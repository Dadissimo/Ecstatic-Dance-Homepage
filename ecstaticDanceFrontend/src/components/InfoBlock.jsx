import {PortableText} from '@portabletext/react';
import PropTypes from 'prop-types';

export default function InfoBlock({id, title, content}) {
    return (
        <div id={id} className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                        <PortableText value={content} />
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoBlock.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.instanceOf(Object)
};
  