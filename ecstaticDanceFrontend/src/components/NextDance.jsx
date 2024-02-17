import PropTypes from 'prop-types';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'


const NextDance = function({nextDate}) {
    const date = new Date(nextDate);
    const formatter = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(date);

    return (
        <div className='flex flex-col justify-self-center items-center'>
            <div className='text-white text-4xl uppercase mb-1'>
                {'Next dance'}
            </div>
            <div className='text-white text-8xl uppercase mb-1'>
                {formattedDate}
            </div>
            <a
                href='/info'
                className="flex flex-row items-center rounded-xl bg-gray-900 hover:bg-gray-700 hover:cursor-pointer px-6 py-2 text-lg font-medium uppercase leading-normal text-white">
                {'More infos'}
                <ChevronDoubleRightIcon className="ml-1 block h-6 w-6" aria-hidden="true" />
            </a>
        </div>
    )
}

NextDance.propTypes = {
    nextDate: PropTypes.instanceOf(Date)
}

export default NextDance;