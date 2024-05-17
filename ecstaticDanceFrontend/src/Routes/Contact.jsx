import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Newsletter from '../components/Newsletter';
import TextContent from '../components/TextContent';

const Contact = ({banner}) => {
    return (
        <>
            <Banner image={banner} alt={banner.caption}>
                <Heading title={banner.title} subTitle={banner.subTitle}/>
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
                <TextContent content={banner.text} type='important'/>
            </div>
            <div className="flex justify-center pb-8">
                <a href='/legalnotice' className="text-lg text-center text-white">
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