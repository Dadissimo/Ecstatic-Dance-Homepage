import PropTypes from 'prop-types';
import EventSummary from "../components/EventSummary";
import EventTimeline from "../components/EventTimeline";
import useData from "../components/useData";
import Location from "../components/Location";

import {PortableText} from '@portabletext/react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

const Events = function({banner}) {
    const [events] = useData('*[_type == "event"] | order(startDate desc) {...,dj->,location->}');
    if (!events) return null;

    const currentEvent = events[0];
    const previousEvents = events.filter(event => event._id !== currentEvent._id);

    // const summaries = events.map(event => <EventSummary key={ event._id } {...event} />)

    return (
        <>
            <Banner image={banner} alt={banner.caption}>#
                <Heading title={banner.title} subTitle={banner.subTitle} />
            </Banner>
            <div className="flex justify-center h-full">
                <div className="flex flex-col xl:flex-row sm:w-8/12">
                    <div className="sm:w-8/12">
                        <EventSummary event={currentEvent} color="none" />
                    </div>
                    <div className="flex flex-1 flex-grow justify-center xl:justify-normal">
                        <Location location={currentEvent.location} color="none"/>
                    </div>
                </div>
            </div>
            <div className={`flex text-white rounded-md flex-col justify-self-center items-center bg-pink-700 p-4 m-4 sm:mx-48`}>
                <div className='text-lg py-4'>
                    <PortableText value={currentEvent.news} />
                </div>
            </div>
            <div className="uppercase p-4 text-4xl text-center text-white">
                {'Previous Dances'}
            </div>
            <div className="flex justify-center pb-16">
                <EventTimeline events={previousEvents} />
            </div>
        </>
    )
}

Events.propTypes = {
    banner: PropTypes.instanceOf(Object)
}

export default Events;