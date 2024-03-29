import PropTypes from 'prop-types';
import useData from '../components/useData';

import CrewMember from '../components/CrewMember';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import TextContent from '../components/TextContent';

const Crew = function({siteData}) {
	const[djs] = useData('*[_type == "crewMember" && isGuest != true] | {...,role->}');
	
    if (!djs) return null;
	const {crewBanner} = siteData;

    const artists = djs.map(dj => <CrewMember key={dj._id} crewMember={dj} />);

	return (
		<>
			<Banner image={crewBanner} alt={crewBanner.caption}>
				<Heading title={crewBanner.title} subTitle={crewBanner.subTitle} />
			</Banner>
			<TextContent content={crewBanner.text} type='important'/>
			<div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'>
				{artists}
			</div>
		</>
	)
}

Crew.propTypes = {
	siteData: PropTypes.instanceOf(Object)
}

export default Crew;
