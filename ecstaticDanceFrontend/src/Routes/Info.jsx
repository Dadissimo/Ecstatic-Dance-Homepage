// import cosmicBackground from '../assets/cosmicBackground.jpg'
import useData from '../components/useData';
import InfoBlock from "../components/InfoBlock";

const Info = function() {
	const[information] = useData('*[_type == "information"]');

	if (!information) return null;

    const infos = information.map(entry => {
        return <InfoBlock key={entry._id} {...entry} />
    });
	return (
		<div>
			{infos}
		</div>
	)
}

export default Info;
