import PropTypes from 'prop-types';
import useData from '../components/useData';

import CrewMember from '../components/CrewMember';

const Djs = function() {
	const[djs] = useData('*[_type == "crewMember" && isDj == true]');

    if (!djs) return null;

    const artists = djs.filter(dj => !dj.isGuest).map(dj => <CrewMember key={dj._id} crewMember={dj} />);

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
            {artists}
        </div>
	)
}

Djs.propTypes = {
	title: PropTypes.string,
	quote: PropTypes.string
}

export default Djs;
