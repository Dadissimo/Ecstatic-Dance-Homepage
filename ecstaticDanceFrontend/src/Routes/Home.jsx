import PropTypes from 'prop-types';
import useData from '../components/useData';
import NextDance from '../components/NextDance';
import { useOutletContext } from 'react-router-dom'
// import EventSummary from '../components/EventSummary';
import Newsletter from '../components/Newsletter';
import urlFor from '../urlFor';


const Home = function() {
	const siteData = useOutletContext()

	const {homeBanner} = siteData;
	const[event] = useData('*[_type == "event"] | order(startDate desc)[0]{...,dj->,location->}');

	if (!event) return null;

	const date = new Date(event.startDate);

	return (
		<main>
			<div className="relative isolate overflow-hidden bg-gray-900 py-20 lg:py-32">
				<img src={ urlFor(homeBanner).url() } alt={homeBanner.caption}
					className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
					style={{opacity: homeBanner.opacity / 100}}
				/>
				<div className="flex justify-center justify-items-center mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-col justify-center justify-items-center mx-auto max-w-4xl lg:mx-0">
						<h1 className="home-font text-center text-4xl font-bold tracking-tight text-white sm:text-8xl">
							{homeBanner.title}
						</h1>
						<h2 className="mt-6 text-center text-2xl text-white hidden lg:block">
							{homeBanner.subTitle}
						</h2>
						<div className='mt-8 sm:mt-20'>
							<NextDance nextDate={date} tbaMode={siteData.tbaMode} />
						</div>
						<div className='mt-24 lg:mt-6'>
							<Newsletter />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

Home.propTypes = {
	siteData: PropTypes.instanceOf(Object)
}

export default Home;
