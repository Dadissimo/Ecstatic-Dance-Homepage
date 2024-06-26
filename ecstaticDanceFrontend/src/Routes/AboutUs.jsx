// import cosmicBackground from '../assets/cosmicBackground.jpg'
import useData from '../components/useData';
import PropTypes from 'prop-types';
import InfoBlock from "../components/InfoBlock";

import Banner from '../components/Banner';
import Heading from '../components/Heading';
import TextContent from '../components/TextContent';
import { useOutletContext } from 'react-router-dom';

const AboutUs = function() {
	const siteData = useOutletContext();
	const {aboutUsBanner} = siteData;
	const[aboutUs] = useData('*[_type == "aboutUs"]');

	if (!aboutUs) return null;

    const infos = aboutUs.sort((a, b) => a.sortNumber - b.sortNumber).map(entry => {
        return <InfoBlock key={entry._id} {...entry} />
    });

	return (
		<>
			<Banner image={aboutUsBanner} alt={aboutUsBanner.caption}>
                <Heading title={aboutUsBanner.title} subTitle={aboutUsBanner.subTitle} />
            </Banner>
			<TextContent content={aboutUsBanner.text} type='important'/>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
				{infos}
			</div>
		</>
	)
}

AboutUs.propTypes = {
	siteData: PropTypes.instanceOf(Object)
}

export default AboutUs;
