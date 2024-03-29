import PropTypes from 'prop-types';
import urlFor from '../urlFor';

const Image = ({image, alt = 'Image'}) => {
    if (!image) return null;

    const width = 960;
    const height = 960;

    return (
        <div className=" bg-gray-900">
            <img alt={alt} src={urlFor(image).width(width).height(height).url()} />
        </div>
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    image: PropTypes.instanceOf(Object),
}

export default Image;