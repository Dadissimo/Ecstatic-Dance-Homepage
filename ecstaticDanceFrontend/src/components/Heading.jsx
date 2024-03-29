import PropTypes from 'prop-types';

const Heading = function({title, subTitle}) {
	return (
		<>
            <h1 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white">
                {title}
            </h1>
           { subTitle && <p className="font-light text-center text-gray-200 sm:text-xl">
                {subTitle}
            </p> }
		</>
	)
}

Heading.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
}

export default Heading;
