import {PortableText} from '@portabletext/react';
import PropTypes from 'prop-types';
import { useCollapse } from 'react-collapsed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

// import urlFor from '../urlFor';
// eslint-disable-next-line no-unused-vars
export default function InfoBlock({title, content, picture, expandedOnDefault}) {
    const { getCollapseProps, getToggleProps } = useCollapse({defaultExpanded: expandedOnDefault})

    return (
        <div className="bg-gray-900">
            <div className="flex flex-col mx-8 p-4">
                <div {...getToggleProps()} className="text-xl mb-4 font-bold tracking-tight text-white sm:text-4xl">
                    <FontAwesomeIcon fixedWidth color='white' size='sm' icon={faCaretRight} />
                    {title}
                </div>
                <div {...getCollapseProps()} className='flex flex-row'>
                    <div className="mr-10 w-5/6 text-lg leading-8 text-gray-300">
                        <PortableText value={content} />
                    </div>
                    {/* <div className='flex flex-col'>
                        {picture && <img src={urlFor(picture).width(480).height(480).url()} />}
                    </div> */}
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
  