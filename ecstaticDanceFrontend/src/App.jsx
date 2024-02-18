// import Newsletter from './components/Newsletter'
import Navigation from './components/Navigation'
import './App.css'
import useData from "./components/useData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Routes/Home'
import NoPage from './Routes/NoPage';
import Events from './Routes/Events';
import Info from './Routes/Info';
import Rules from './Routes/Rules';
import Djs from './Routes/Djs';
import Contact from './Routes/Contact';

export default function App() {
  const [siteData] = useData('*[_type == "siteSettings"][0]');

  if (!siteData) return;

  return (
    <div className="min-h-screen bg-gray-900">
		<Navigation/>
		<BrowserRouter>
			<Routes>
				<Route index element={
					<Home banner={siteData.homeBanner} quote={siteData.quote} title={siteData.title} />
				} />
				<Route path='/events' element={
					<Events banner={siteData.eventBanner} />
				} />
				<Route path='/info' element={
					<Info />
				} />
				<Route path='/rules' element={
					<Rules banner={siteData.danceInfoBanner} />
				} />
				<Route path='/crew' element={
					<Djs />
				} />
				<Route path='/contact' element={
					<Contact banner={siteData.contactBanner} />
				} />
				<Route path='*' element={
					<NoPage/>
				} />
			</Routes>
		</BrowserRouter>
		{/* <Newsletter /> */}
    </div>
  )
}
