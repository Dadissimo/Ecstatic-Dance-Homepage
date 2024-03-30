import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MobileNavigation = ({navigation}) => {
    const {pathname} = useLocation();
	const isActive = href => (pathname === ('/' + href));

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <section className="flex lg:hidden">
            <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                <Bars3Icon className="text-white animate-pulse block h-8 w-8" aria-hidden="true" />
            </div>
            <div className={isNavOpen ? "showMenuNav bg-gray-900 text-white" : "hideMenuNav"}>
                <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                    <XMarkIcon className="text-white animate-pulse block h-8 w-8" aria-hidden="true" />
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    {navigation.map(item => {
                        return (
                            <li key={item.name} className="border-b border-gray-400 my-8 uppercase" 
                                aria-current={isActive(item.href) ? 'page' : undefined}
                            >
                                <a href={item.href}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}

MobileNavigation.propTypes = {
	navigation: PropTypes.arrayOf(Object)
}

export default MobileNavigation;