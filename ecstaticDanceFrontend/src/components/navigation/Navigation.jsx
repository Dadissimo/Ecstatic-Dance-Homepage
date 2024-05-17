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
		<div className="flex shadow-2xl sticky z-50 top-0 items-center justify-between bg-gray-900 p-4 sm:px-16">
			<HomeIcon />
			<nav>
				<MobileNavigation navigation={navigation} />
				<DesktopNavigation navigation={navigation} />
			</nav>
		</div>
	);
}