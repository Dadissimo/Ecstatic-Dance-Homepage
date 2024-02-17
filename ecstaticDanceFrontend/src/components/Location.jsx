import PropTypes from 'prop-types';

const Location = function({location, color = 'pink-950'}) {
    return (
        <div className={`flex text-white rounded-xl flex-col justify-self-center items-center bg-${color} p-4 m-4`}>
            <div className='text-2xl mb-4'>
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