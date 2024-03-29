import PropTypes from 'prop-types';

import {PortableText} from '@portabletext/react';

const TextContent = function({content, type}) {
    if (!content) return null;
    
    if (type === 'important') {
        return (
            <div className={`flex text-white rounded-md flex-col justify-self-center items-center bg-pink-700 p-4 m-4 sm:mx-48`}>
                <div className='text-lg py-4'>
                    <PortableText value={content} />
                </div>
            </div>
        )
    }
    
    return <PortableText value={content} />
}

TextContent.propTypes = {
    content: PropTypes.instanceOf(Object),
    type: PropTypes.string
}

export default TextContent;