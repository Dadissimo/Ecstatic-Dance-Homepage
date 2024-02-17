import {PortableText} from '@portabletext/react';
// import PropTypes from 'prop-types';

const EventSummary = function(event) {
    const {title, content, location} = event;

    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    const formatter = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(startDate);

    const startHours = startDate.getHours();
    const startMinutes = startDate.getMinutes();
    const endHours = event.endDate ? endDate.getHours() : startHours + 3;
    const endMinutes = event.endDate ? endDate.getMinutes() : startMinutes;

    const timestamp = `WHEN: ${formattedDate}, ${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;

    return (
        <div className='flex rounded-xl flex-col justify-self-center items-center bg-pink-950 p-4 m-4'>
            <div className='text-2xl mb-4'>
                {title}
            </div>
            <div className='flex w-full italic flex-row justify-between text-sm'>
                <div>
                    {timestamp}
                </div>
                <div>
                    {'WHERE: ' + location.name}
                </div>
            </div>
            <div className='text-lg py-4'>
                <PortableText value={content} />
            </div>
        </div>
    )
}

EventSummary.propTypes = {

}

export default EventSummary;