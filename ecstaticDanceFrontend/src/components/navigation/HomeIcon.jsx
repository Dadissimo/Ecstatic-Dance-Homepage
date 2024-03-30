import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router';

export default function HomeIcon() {
    const {pathname} = useLocation();

    const active = pathname === '/';
    return (
        <div className="flex text-2xl flex-shrink-0 items-center text-white">
            <a aria-current={active && 'page'} className={active && 'animate-pulse'} href={'/#'}>{'Home'}</a>
            <a className="ml-2" href='https://www.facebook.com/urbanfishtank' aria-label='link to facebook'>
                <FontAwesomeIcon fixedWidth color='white' icon={faFacebook} />
            </a>
        </div>
    )
}