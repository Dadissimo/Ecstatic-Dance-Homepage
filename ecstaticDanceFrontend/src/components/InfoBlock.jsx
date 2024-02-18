import {PortableText} from '@portabletext/react';
import PropTypes from 'prop-types';

import urlFor from '../urlFor';
export default function InfoBlock({title, content, picture}) {
    return (
        <div className="bg-gray-900">
            <div className="flex flex-col m-8 p-8">
                <h2 className="text-4xl mb-4 font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
                <div className='flex flex-row'>
                    <div className="mr-10 w-5/6 text-lg leading-8 text-gray-300">
                        <PortableText value={content} />
                    </div>
                    <div className='flex flex-col'>
                        {picture && <img src={urlFor(picture).width(480).height(480).url()} />}
                    </div>
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
};
  