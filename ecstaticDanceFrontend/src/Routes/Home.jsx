import PropTypes from 'prop-types';
import useData from '../components/useData';
import NextDance from '../components/NextDance';
// import EventSummary from '../components/EventSummary';
import Newsletter from '../components/Newsletter';
import urlFor from '../urlFor';

const Home = function({quote, title, banner}) {
	const[event] = useData('*[_type == "event"][0]{...,dj->,location->}');

	if (!event) return null;

	const date = new Date(event.startDate);

	return (
		<>
			<div className="relative isolate overflow-hidden bg-gray-900 py-36 sm:py-24">
				<img src={ urlFor(banner).url() } alt="Background Image"
					className="absolute opacity-50 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				/>
				<div className="flex justify-center justify-items-center mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-col justify-center justify-items-center mx-auto max-w-4xl lg:mx-0">
						<h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-8xl">
							{title}
						</h2>
						<p className="mt-6 text-center text-2xl text-white hidden lg:block">
							{quote}
						</p>
						<div className='mt-8 sm:mt-20'>
							<NextDance nextDate={date} />
						</div>
					</div>
				</div>
			</div>
			{/* <div className='flex justify-center items-center bg-gray-900 text-white w-full'>
				<div className='w-8/12'>
					<EventSummary event={event} />
				</div>
			</div> */}
			<Newsletter />
		</>
	)
}

Home.propTypes = {
	title: PropTypes.string,
	quote: PropTypes.string,
	banner: PropTypes.instanceOf(Object)
}

export default Home;
