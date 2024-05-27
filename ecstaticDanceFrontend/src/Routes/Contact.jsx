import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Newsletter from '../components/Newsletter';
import TextContent from '../components/TextContent';
import { useOutletContext } from 'react-router-dom';

const Contact = () => {
    const {contactBanner} = useOutletContext()
    return (
        <>
            <Banner image={contactBanner} alt={contactBanner.caption}>
                <Heading title={contactBanner.title} subTitle={contactBanner.subTitle}/>
                <div className='mt-4 flex justify-center items-center'>
                    <FontAwesomeIcon fixedWidth color='white' size='xl' icon={faEnvelope} />
                    <a href='mailto:"info@ecstaticdance-graz.at"' className="ml-1 font-light text-center text-white sm:text-xl">
                        {'info@ecstaticdance-graz.at'}
                    </a>
                </div>
            </Banner>
            <div className='bg-gray-900 rounded-md mt-24 lg:mt-6 opacity-95'>
                <Newsletter />
            </div>
            <div className='bg-gray-900 pb-8'>
                <TextContent content={contactBanner.text} type='important'/>
            </div>
            <div className="flex justify-center pb-8">
                <a href='/legalnotice' className="text-lg text-center text-white underline">
                    {'Disclaimer & Legal Notice'}
                </a>
            </div>
        </>
    )
}

Contact.propTypes = {
    banner: PropTypes.instanceOf(Object)
}

export default Contact;