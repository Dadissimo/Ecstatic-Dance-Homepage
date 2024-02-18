import PropTypes from 'prop-types';
import useData from '../components/useData';
import urlFor from '../urlFor';

// eslint-disable-next-line react/prop-types
const Rule = function({title, explanation}) {
    return (
        <div className='text-white text-center p-4'>
            <div className='text-4xl mb-2'>
                {title}
            </div>
            <div className='text-2xl'>
                {explanation}
            </div>
        </div>
    )
}

const Rules = function({banner}) {
	const[rules] = useData('*[_type == "rule"]');

	if (!rules) return null;

    const rulesRendered = rules.map(rule => {
        return <Rule key={rule._id} {...rule} />
    });

	return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-18 sm:py-24">
            <img src={ urlFor(banner).url() } alt="Background Image"
                className="absolute opacity-50 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className='flex justify-center'>
                <div className='w-3/6'>
                    {rulesRendered}
                </div>
            </div>
        </div>
	)
}

Rules.propTypes = {
	banner: PropTypes.instanceOf(Object)
}

export default Rules;
