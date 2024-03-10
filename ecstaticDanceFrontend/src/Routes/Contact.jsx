import PropTypes from 'prop-types';
import urlFor from '../urlFor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = ({banner}) => {
    return (
        <>
            <div className="relative h-96 isolate overflow-hidden bg-gray-900 py-8 sm:py-18">
                <img src={ urlFor(banner).url() } alt="Background Image"
                    className="absolute opacity-50 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div className='flex flex-col justify-center align-middle h-full'>
                    <div className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 text-white">
                        Contact Us
                    </div>
                    <p className="font-light text-center text-gray-200 sm:text-xl">
                        Got any questions? Let us know.
                    </p>
                    <div className='mt-4 flex justify-center items-center'>
                        <FontAwesomeIcon fixedWidth color='white' size='xl' icon={faEnvelope} />
                        <a href='mailto:"info@ecstaticdance-graz.at"' className="ml-1 font-light text-center text-white sm:text-xl">
                            info@ecstaticdance-graz.at
                        </a>
                    </div>
                </div>
            </div>
            {/* <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your email
                            </label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@lastname.at" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section> */}
        </>
    )
}

Contact.propTypes = {
    banner: PropTypes.instanceOf(Object)
}

export default Contact;