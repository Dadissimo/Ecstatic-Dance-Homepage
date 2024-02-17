import PropTypes from 'prop-types';
import urlFor from '../urlFor';

const CrewMember = function({crewMember}) {
    const {picture, artistName, description} = crewMember;

    const width = 480;
    const height = 480;

	return (
		<div style={{width}} className='flex flex-col m-4 p-4 bg-gray-700'>
            {picture && <img src={urlFor(picture).width(width).height(height).url()} />}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{artistName}</h2>
            {description}
		</div>
	)
}

CrewMember.propTypes = {
    crewMember: PropTypes.instanceOf(Object)
}

export default CrewMember;
