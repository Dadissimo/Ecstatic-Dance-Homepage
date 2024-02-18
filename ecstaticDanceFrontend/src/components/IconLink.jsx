import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = ({icon, text, url}) => {
    return (
        <div className='m-0.5'>
            <FontAwesomeIcon fixedWidth color='white' size='xl' icon={icon} />
            <a href={url} className='ml-2 text-white'>
                {text}
            </a>
        </div>
    )
}

IconLink.propTypes = {
    icon: PropTypes.instanceOf(Object),
    text: PropTypes.string,
    url: PropTypes.string,
}

export default IconLink;
