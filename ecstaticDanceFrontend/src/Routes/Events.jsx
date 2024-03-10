import PropTypes from 'prop-types';
import EventSummary from "../components/EventSummary";
import EventTimeline from "../components/EventTimeline";
import useData from "../components/useData";
import Location from "../components/Location";
import urlFor from '../urlFor';

import {PortableText} from '@portabletext/react';

const Events = function({banner}) {
    const [events] = useData('*[_type == "event"] | order(startDate desc) {...,dj->,location->}');
    if (!events) return null;

    const currentEvent = events[0];
    const previousEvents = events.filter(event => event._id !== currentEvent._id);

    // const summaries = events.map(event => <EventSummary key={ event._id } {...event} />)
    return (
        <>
            <div className="relative h-96 isolate overflow-hidden bg-gray-900 py-8 sm:py-18">
                <img src={ urlFor(banner).url() } alt="Background Image"
                    className="absolute opacity-20 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div className="flex justify-center h-full">
                    <div className="flex flex-row w-8/12">
                        <div className="w-8/12">
                            <EventSummary event={currentEvent} color="none" />
                        </div>
                        <div className="flex flex-1 flex-grow">
                            <Location location={currentEvent.location} color="none"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex text-white rounded-xl flex-col justify-self-center items-center bg-pink-950 p-4 m-4 mx-48`}>
                <div className='text-lg py-4'>
                    <PortableText value={currentEvent.news} />
                </div>
            </div>
            <div className="uppercase p-4 text-4xl text-center text-white">
                {'Previous Dances'}
            </div>
            <div className="flex justify-center">
                <EventTimeline events={previousEvents} />
            </div>
        </>
    )
}

Events.propTypes = {
    banner: PropTypes.instanceOf(Object)
}

export default Events;