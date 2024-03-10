// import cosmicBackground from '../assets/cosmicBackground.jpg'
import useData from '../components/useData';
import PropTypes from 'prop-types';
import InfoBlock from "../components/InfoBlock";
import urlFor from '../urlFor';

const Info = function({banner}) {
	const[information] = useData('*[_type == "information"]');

	if (!information) return null;

    const infos = information.sort((a, b) => a.sortNumber - b.sortNumber).map(entry => {
        return <InfoBlock key={entry._id} {...entry} />
    });

	return (
		<div>
			<div className="relative h-96 isolate overflow-hidden bg-gray-900 py-8 sm:py-18">
				<img src={ urlFor(banner).url() } alt="Background Image"
					className="absolute opacity-50 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				/>
				<div className='flex flex-col justify-center align-middle h-full'>
					<div className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 text-white">
						{'Welcome!'}
					</div>
					<p className="font-light text-center text-gray-200 sm:text-xl">
						{'Here is everything you need to know.'}
                    </p>
				</div>
			</div>
			{infos}
		</div>
	)
}

Info.propTypes = {
	banner: PropTypes.instanceOf(Object)
}

export default Info;
