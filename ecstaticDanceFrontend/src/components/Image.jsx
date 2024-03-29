import PropTypes from 'prop-types';
import urlFor from '../urlFor';

const Image = ({image, alt = 'Image'}) => {
    return (
        <div className="relative h-96 isolate overflow-hidden bg-gray-900">
            {image && <img src={ urlFor(image).url() } alt={alt}
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />}
        </div>
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    image: PropTypes.instanceOf(Object),
}

export default Image;