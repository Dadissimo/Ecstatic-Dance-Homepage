import {PortableText} from '@portabletext/react';
import PropTypes from 'prop-types';

import urlFor from '../urlFor';
export default function InfoBlock({id, title, content, picture}) {
    return (
        <div id={id} className="relative isolate overflow-hidden bg-gray-900">
            <div className="flex m-8 p-8">
                <div className='flex flex-col mr-20'>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                        <PortableText value={content} />
                    </div>
                </div>
                <div className='flex w-3/6'>
                    {picture && <img src={urlFor(picture).url()} />}
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
  