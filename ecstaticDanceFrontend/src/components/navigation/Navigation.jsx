import HomeIcon from "./HomeIcon";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const navigation = [
	{ name: 'Events', href: 'events'},
	{ name: 'Info', href: 'info' },
	{ name: 'About', href: 'about' },
	{ name: 'Crew', href: 'crew' },
	{ name: 'Contact', href: 'contact' }
  ]

export default function NavigationNew() {
	return (
		<div className="flex items-center justify-between border-b border-gray-400 p-4 sm:px-16">
			<HomeIcon />
			<nav>
				<MobileNavigation navigation={navigation} />
				<DesktopNavigation navigation={navigation} />
			</nav>
		</div>
	);
}