// import Announcements from './Anouncements'
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

export default function App() {
  const [data] = useData('*[_type == "siteSettings"][0]');

  if (!data) return;

  return (
    <div className="min-h-screen bg-gray-900">
		<Navigation/>
		<BrowserRouter>
			<Routes>
				<Route index element={
					<Home quote={data.quote} title={data.title} />
				} />
				<Route path='/events' element={
					<Events />
				} />
				<Route path='/info' element={
					<Info />
				} />
				<Route path='/rules' element={
					<Rules />
				} />
				<Route path='/crew' element={
					<Djs />
				} />
				<Route path='*' element={
					<NoPage/>
				} />
			</Routes>
		</BrowserRouter>
		{/* <Newsletter /> */}
		{/* <Announcements /> */}
    </div>
  )
}
