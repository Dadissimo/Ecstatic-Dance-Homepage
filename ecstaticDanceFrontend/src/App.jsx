// import Announcements from './Anouncements'
import Navigation from './components/Navigation'
import './App.css'
import Home from './components/Home'
import useData from "./components/useData";
// import Newsletter from './components/Newsletter'


export default function App() {
  const [data] = useData('*[_type == "siteSettings"][0]');

  if (!data) return;

  return (
    <div className="text-4xl min-h-screen bg-gray-900">
      <Navigation/>
      <Home quote={data.quote} title={data.title} />
      {/* <Newsletter /> */}
      {/* <Announcements /> */}
    </div>
  )
}
