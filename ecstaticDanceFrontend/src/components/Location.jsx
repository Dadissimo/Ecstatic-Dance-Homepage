import PropTypes from 'prop-types';
import IconLink from './IconLink';
import urlFor from '../urlFor';
import {faMapLocation} from '@fortawesome/free-solid-svg-icons'

const Location = function({location, color = 'pink-950'}) {
    return (
        <div className={`flex text-white rounded-xl flex-col justify-self-center bg-${color} p-4 m-4`}>
            <div className='text-2xl mb-4'>
                {location.name}
            </div>
            {location.googleMapLink && <IconLink icon={faMapLocation} text={location.address} url={location.googleMapLink}/>}
            <div className='text-sm mt-2'>
                {location.description}
            </div>
            <div className='flex justify-center mt-2'>
                {location.picture && <img alt={location.picture.caption} src={urlFor(location.picture).height(320).url()} />}
            </div>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.instanceOf(Object),
    color: PropTypes.string

}

export default Location;