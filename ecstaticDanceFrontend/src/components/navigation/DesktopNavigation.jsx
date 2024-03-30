import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

const DesktopNavigation = ({navigation}) => {
    const {pathname} = useLocation();
	const isActive = href => (pathname === ('/' + href));

    return (
        <ul className="text-white hidden space-x-8 lg:flex ">
            {navigation.map(item => {
                return (
                    <li className={isActive(item.href) ? 'animate-pulse' : null} key={item.name} 
                        aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                        <a href={item.href}>{item.name}</a>
                    </li>
                );
            })}
        </ul>
    )
}

DesktopNavigation.propTypes = {
	navigation: PropTypes.arrayOf(Object)
}

export default DesktopNavigation;