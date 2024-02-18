import PropTypes from 'prop-types';
import IconLink from './IconLink';
import {faMapLocation} from '@fortawesome/free-solid-svg-icons'

const Location = function({location, color = 'pink-950'}) {
    return (
        <div className={`flex text-white rounded-xl flex-col justify-self-center bg-${color} p-4 m-4`}>
            <div className='text-2xl mb-4'>
                {location.name}
            </div>
            <IconLink icon={faMapLocation} text={location.address} url={location.googleMapLink}/>
            <div className='text-sm mt-2'>
                {location.description}
            </div>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.instanceOf(Object),
    color: PropTypes.string

}

export default Location;