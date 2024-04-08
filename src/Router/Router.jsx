import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Residential from "../Components/Residential/Residential";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home> 
            },
            {
                path: '/residential',
                element: <Residential></Residential>
            },
            {
                path: '/about_us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router