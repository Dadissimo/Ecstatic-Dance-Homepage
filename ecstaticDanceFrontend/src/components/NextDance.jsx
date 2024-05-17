import PropTypes from 'prop-types';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'


const NextDance = function({nextDate, tbaMode}) {
    const date = new Date(nextDate);
    const formatter = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(date);

    return (
        <div className='flex flex-col justify-self-center items-center'>
            <div className='text-white text-xl sm:text-4xl uppercase mb-1'>
                {'Next dance'}
            </div>
            <div className='text-white text-3xl sm:text-8xl uppercase mb-4'>
                {tbaMode ? 'To Be Announced' : formattedDate}
            </div>
            <a
                href='/events'
                className="flex flex-row opacity-90 items-center rounded-md bg-gray-900 hover:bg-gray-700 hover:cursor-pointer px-6 py-2 text-lg font-medium uppercase leading-normal text-white">
                {'More infos'}
                <ChevronDoubleRightIcon className="ml-1 block h-6 w-6" aria-hidden="true" />
            </a>
        </div>
    )
}

NextDance.propTypes = {
    nextDate: PropTypes.instanceOf(Date),
    tbaMode: PropTypes.bool
}

export default NextDance;