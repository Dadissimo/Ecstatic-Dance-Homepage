import './App.css'
import useData from "./components/useData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Routes/Home'
import NoPage from './Routes/NoPage';
import Events from './Routes/Events';
import Info from './Routes/Info';
import Crew from './Routes/Crew';
import Contact from './Routes/Contact';
import AboutUs from './Routes/AboutUs';
import Navigation from './components/navigation/Navigation';

export default function App() {
  const [siteData] = useData('*[_type == "siteSettings"][0]');

  if (!siteData) return;

  return (
    <div className="min-h-screen bg-gray-900">
		<BrowserRouter>
			<Navigation/>
			<Routes>
				<Route index element={
					<Home siteData={siteData} />
				} />
				<Route path='/events' element={
					<Events siteData={siteData} />
				} />
				<Route path='/info' element={
					<Info banner={siteData.danceInfoBanner}/>
				} />
				<Route path='/about' element={
					<AboutUs siteData={siteData}/>
				} />
				<Route path='/crew' element={
					<Crew siteData={siteData}/>
				} />
				<Route path='/contact' element={
					<Contact banner={siteData.contactBanner} />
				} />
				<Route path='*' element={
					<NoPage/>
				} />
			</Routes>
		</BrowserRouter>
    </div>
  )
}
