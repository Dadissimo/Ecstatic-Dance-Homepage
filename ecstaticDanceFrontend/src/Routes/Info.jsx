// import cosmicBackground from '../assets/cosmicBackground.jpg'
import PropTypes from 'prop-types';
import useData from '../components/useData';
import InfoBlock from "../components/InfoBlock";

const Info = function() {
	const[information] = useData('*[_type == "information"]');

	if (!information) return null;

    const infos = information.map(entry => {
        console.log(entry);

        return <InfoBlock key={entry._id} {...entry} />
    });
	return (
		<div>
			{infos}
		</div>
	)
}

Info.propTypes = {
	title: PropTypes.string,
	quote: PropTypes.string
}

export default Info;
