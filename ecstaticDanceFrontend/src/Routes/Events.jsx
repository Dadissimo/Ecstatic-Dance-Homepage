import PropTypes from 'prop-types';
import EventSummary from "../components/EventSummary";
import EventTimeline from "../components/EventTimeline";
import useData from "../components/useData";
import Location from "../components/Location";

import Banner from '../components/Banner';
import Heading from '../components/Heading';
import TextContent from '../components/TextContent';

const Events = function({banner}) {
    const [events] = useData('*[_type == "event"] | order(startDate desc) {...,dj->,location->}');
    if (!events) return null;

    console.log(events);
    const currentEvent = events[0];
    const previousEvents = events.filter(event => event._id !== currentEvent._id);

    return (
        <>
            <Banner image={banner} alt={banner.caption}>
                <Heading title={banner.title} subTitle={banner.subTitle} />
            </Banner>
            <div className="flex justify-center h-full">
                <div className="flex flex-col xl:flex-row sm:w-8/12">
                    <div className="rounded-md m-4 bg-gray-700 xl:w-8/12">
                        <EventSummary event={currentEvent} color="none" />
                    </div>
                    <div className="flex flex-1 flex-grow rounded-md m-4 bg-gray-700 justify-center xl:justify-normal">
                        <Location location={currentEvent.location} color="none"/>
                    </div>
                </div>
            </div>
            {
                currentEvent.news && <div className={`flex text-white rounded-md flex-col justify-self-center items-center bg-cyan-900 p-4 m-4 sm:mx-48`}>
                    <div className='text-lg py-4'>
                        <TextContent content={currentEvent.news} />
                    </div>
                </div>
            }
            <EventTimeline events={previousEvents} />
        </>
    )
}

Events.propTypes = {
    banner: PropTypes.instanceOf(Object)
}

export default Events;