import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import Home from './Routes/Home'
import NoPage from './Routes/NoPage';
import Events from './Routes/Events';
import Info from './Routes/Info';
import Crew from './Routes/Crew';
import Contact from './Routes/Contact';
import AboutUs from './Routes/AboutUs';
import LegalNotice from './Routes/LegalNotice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
        const PROJECT_ID = "tjb2eob3";
        const DATASET = "production";
    
        const QUERY = encodeURIComponent('*[_type == "siteSettings"][0]');
    
        const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
        const response = await fetch(URL)
                    
        if(!response.ok) throw Error('Failed to load data!');

        const {result} = await response.json();

        return result;
    },
    errorElement: <NoPage />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
        path: "events/",
        element: <Events />
    },
    {
        path: "info/",
        element: <Info />
    },
    {
        path: "about/",
        element: <AboutUs />
    },
    {
        path: "crew/",
        element: <Crew />
    },
    {
        path: "contact/",
        element: <Contact />
    },
    {
        path: "legalnotice/",
        element: <LegalNotice />
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);