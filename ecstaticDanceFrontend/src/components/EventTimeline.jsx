import PropTypes from 'prop-types';
const Event = function(event) {
    const {dj, location} = event;
    const startDate = new Date(event.startDate);

    const formatter = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(startDate);

    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white  dark:border-gray-500 dark:bg-gray-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-200">{formattedDate}</time>
            <h3 className="text-lg font-semibold text-white">{location.name + ' - DJ ' + dj.artistName}</h3>
            {/* <p className="text-base font-normal text-gray-500 dark:text-gray-400">{'Something'}</p> */}
        </li>
    )
}

const EventTimeline = function({events}) {
    const renderedEvents = events.map(event => {
        return (<Event key={event._id} {...event} />);
    });
    
    return (
        <>
            <div className="uppercase p-4 text-4xl text-center text-white">
                {'Previous Dances'}
            </div>
            <div className="flex justify-center pb-16">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    {renderedEvents}
                </ol>
            </div>
        </>
    )
}

EventTimeline.propTypes = {
    events: PropTypes.arrayOf(Object)
}

export default EventTimeline;