import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';

export default function App() {
    const siteData = useLoaderData();

    return (
        <div className="min-h-screen bg-gray-900">
            <Navigation/>
            <Outlet context={siteData} />
        </div>
    );
}