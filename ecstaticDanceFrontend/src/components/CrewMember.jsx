import PropTypes from 'prop-types';
import urlFor from '../urlFor';

import { faInstagram, faFacebook, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import IconLink from './IconLink';

const CrewMember = function({crewMember}) {
    const {picture, artistName, bio, soundcloud, instagram, facebook, homepage} = crewMember;

    const width = 480;
    const height = 480;

	return (
		<div className='flex flex-col m-4 p-4 bg-gray-700 w-5/6 lg:w-3/4'>
            {picture && <img src={urlFor(picture).width(width).height(height).url()} />}
            <h2 className="text-2xl my-4 uppercase font-bold tracking-tight text-white sm:text-4xl">{artistName}</h2>
            <div className='mb-4 grid grid-cols-2'>
                {instagram && <IconLink icon={faInstagram} text={instagram} url={`https://www.instagram.com/${instagram}`} />}
                {facebook && <IconLink icon={faFacebook} text={facebook} url={`https://www.facebook.com/${facebook}`} />}
                {soundcloud && <IconLink icon={faSoundcloud} text={soundcloud} url={`https://www.soundcloud.com/${soundcloud}`} />}
                {homepage && <IconLink icon={faHouse} text={'Homepage'} url={homepage} />}
            </div>
            <div className=' text-white'>
                {bio}
            </div>
		</div>
	)
}


CrewMember.propTypes = {
    crewMember: PropTypes.instanceOf(Object)
}

export default CrewMember;
