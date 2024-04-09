import PropTypes from 'prop-types';

import {PortableText} from '@portabletext/react';

const TextContent = function({content, type}) {
    if (!content) return null;
    
    console.log(content);
    
    if (type === 'important') {
        return (
            <div className={`flex text-white rounded-md flex-col justify-self-center items-center bg-pink-700 p-4 m-4 mx-8 sm:mx-48`}>
                <div className='text-content text-lg py-4'>
                    <PortableText value={content} />
                </div>
            </div>
        )
    }
    
    return (
        <div className='text-content'>
            <PortableText value={content} />
        </div>
    );
}

TextContent.propTypes = {
    content: PropTypes.instanceOf(Object),
    type: PropTypes.string
}

export default TextContent;