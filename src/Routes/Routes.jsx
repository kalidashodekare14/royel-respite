import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root.jsx";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs.jsx";
import Gellary from "../Pages/Gellary/Gellary.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Details from "../Pages/Details/Details.jsx";
import Login from "../Pages/Login/Login.jsx";
import SingUp from "../Pages/SingUp/SingUp.jsx";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'update_profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes> <Details></Details> </PrivateRoutes>,
                loader: () => fetch('../data.json')
            },
            {
                path: '/signin',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            }


        ]
    }
])

export default router