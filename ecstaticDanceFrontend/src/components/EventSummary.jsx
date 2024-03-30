import PropTypes from 'prop-types';
import TextContent from './TextContent';

function getHref(event) {
    if (event.dj.isGuest) return event.dj.url;
    if (event.dj.homepage) return event.dj.homepage;
    return '/crew';
}

const EventSummary = function({event, color = 'pink-950'}) {
    const {title, content, location} = event;

    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    const formatter = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(startDate);

    const startHours = startDate.getHours();
    const startMinutes = startDate.getMinutes();
    const endHours = event.endDate ? endDate.getHours() : startHours + 3;
    const endMinutes = event.endDate ? endDate.getMinutes() : startMinutes;

    const timestamp = `${formattedDate}, ${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;
    const djStamp = `${event.dj.artistName}`;
    const locationStamp = `${location.name}`;

    const djHref = getHref(event);
    console.log(djHref);

    return (
        <div className={`flex text-white rounded-xl flex-col bg-${color} p-4 m-4`}>
            <h1 className='text-2xl mb-4'>
                {title}
            </h1>
            <h2 className='flex flex-row xl:w-3/5 justify-between text-md sm:text-lg'>
                <div className='flex flex-col'>
                    <div>{'WHEN'}</div>
                    <div>{'WHO'}</div>
                    <div>{'WHERE'}</div>
                </div>
                <div className='flex flex-col'>
                    <div>{timestamp}</div>
                    <a className='underline' href={djHref}>{djStamp}</a>
                    <div>{locationStamp}</div>
                </div>
            </h2>
            <div className='text-sm sm:text-md py-4'>
                <TextContent content={content} />
            </div>
        </div>
    )
}

EventSummary.propTypes = {
    event: PropTypes.instanceOf(Object),
    color: PropTypes.string
}

export default EventSummary;