import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root.jsx";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs.jsx";
import Gellary from "../Pages/Gellary/Gellary.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Details from "../Pages/Details/Details.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../data.json')
            },
            {
                path: '/about_us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/gellary',
                element: <Gellary></Gellary>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('../data.json')
            }


        ]
    }
])

export default router