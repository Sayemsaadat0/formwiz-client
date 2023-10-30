import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Login/Signin";
import Signup from "../Pages/Login/Signup";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <PrivateRoutes><Home></Home></PrivateRoutes>,
            },
            {
                path: "/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
        ],
    },
]);


export default router