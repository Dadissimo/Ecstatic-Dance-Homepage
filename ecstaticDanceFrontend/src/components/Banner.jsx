import PropTypes from 'prop-types';
import urlFor from '../urlFor';

const Banner = ({image, alt = 'Banner image', children}) => {
    return (
        <>
            <div className="relative h-48 md:h-60 isolate overflow-hidden bg-gray-900 py-8 sm:py-18">
                <img src={ urlFor(image).url() } alt={alt}
                    className="absolute opacity-50 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div className='flex flex-col justify-center align-middle h-full'>
                    {children}
                </div>
            </div>
        </>
    )
}

Banner.propTypes = {
    alt: PropTypes.string,
    image: PropTypes.instanceOf(Object),
    children: PropTypes.instanceOf(Object),
}

export default Banner;