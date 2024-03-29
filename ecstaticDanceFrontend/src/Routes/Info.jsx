// import cosmicBackground from '../assets/cosmicBackground.jpg'
import useData from '../components/useData';
import PropTypes from 'prop-types';
import InfoBlock from "../components/InfoBlock";

import Banner from '../components/Banner';
import Heading from '../components/Heading';
import TextContent from '../components/TextContent';

const Info = function({banner}) {
	const[information] = useData('*[_type == "information"]');

	if (!information) return null;

    const infos = information.sort((a, b) => a.sortNumber - b.sortNumber).map(entry => {
        return <InfoBlock key={entry._id} {...entry} />
    });

	return (
		<>
			<Banner image={banner} alt={banner.caption}>#
                <Heading title={banner.title} subTitle={banner.subTitle} />
            </Banner>
			<TextContent content={banner.text} type='important'/>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
				{infos}
			</div>
		</>
	)
}

Info.propTypes = {
	banner: PropTypes.instanceOf(Object)
}

export default Info;
