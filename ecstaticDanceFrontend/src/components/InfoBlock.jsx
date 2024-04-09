import PropTypes from 'prop-types';
import TextContent from './TextContent';

import Image from './Image';
export default function InfoBlock({title, content, picture}) {
    return (
        <div className='flex flex-col m-4 sm:p-4 rounded-md bg-gray-700'>
            <div className="flex flex-col mx-8 sm:p-4">
                <div className="text-2xl my-2 lg:mb-4 font-bold tracking-tight text-white sm:text-4xl">
                    {title}
                </div>
                <Image image={picture} alt={picture.caption} />
                <div className="text-white text-md sm:text-lg leading-8 mt-4">
                    <TextContent content={content} />
                </div>
            </div>
        </div>
    )
}

InfoBlock.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.instanceOf(Object),
    picture: PropTypes.instanceOf(Object),
    expandedOnDefault: PropTypes.bool
};
  