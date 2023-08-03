// Import necessary dependencies from react-router-dom
import { createBrowserRouter } from "react-router-dom";

// Import components for different pages
import Home from "../pages/home/Home";
import UiHome from "../pages/ui-path/UiHome";
import FileConverterHome from "../pages/file-converter/FileConverterHome";
import Login from "../pages/login/Login";
import PrivateRoure from "./PrivateRoure";
import JobsTable from "../components/ui-path-com/allTable/JobsTable";
import RegisterForm from "../components/authentication/RegisterForm";
import LoginPage from "../components/authentication/LoginPage";
import PrivateRouteAuth from "./PrivateRouteAuth";
import SendOtp from "../components/authentication/SendOtp";
import VarifyOtp from "../components/authentication/VarifyOtp";

/**
 * Create the application router using the createBrowserRouter function.
 *
 * The router defines the mapping between URL paths and corresponding React components to render.
 * It uses the createBrowserRouter function from react-router-dom to set up the routing configuration.
 *
 * The router configuration is an array of route objects, each specifying a path and the React component to render.
 * For example, when the URL path is '/', the Home component will be rendered.
 * Similarly, when the URL path is '/login', the Login component will be rendered.
 * The same pattern applies to the '/file-converter' and '/ui-path' paths.
 *
 * The router created here will be used to handle navigation and rendering of different pages in the application.
 *
 * @returns {Object} - The application router configuration.
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home /> // Render the Home component when the URL path is '/'
    },
    {
        path: '/login',
        element: <Login /> // Render the Login component when the URL path is '/login'
    },
    {
        path: '/file-converter',
        element: <PrivateRouteAuth><FileConverterHome /></PrivateRouteAuth>  // Render the FileConverterHome component when the URL path is '/file-converter'
    },
    {
        path: '/regester',
        element: <RegisterForm /> // Render the FileConverterHome component when the URL path is '/file-converter'
    },
    {
        path: '/authlogin',
        element: <LoginPage /> // Render the FileConverterHome component when the URL path is '/file-converter'
    },
    {
        path: '/varifyotp',
        element: <VarifyOtp /> // Render the FileConverterHome component when the URL path is '/file-converter'
    },
    {
        path: '/otpauth',
        element: <SendOtp /> // Render the FileConverterHome component when the URL path is '/file-converter'
    },
    {
        path: '/ui-path',
        element: <PrivateRoure><UiHome /></PrivateRoure> , // Render the UiHome component when the URL path is '/ui-path'
        children:[
            {
                path: "/ui-path/:name/:id/:key",
                element: <JobsTable />,
            },
        ]
    }
]);
