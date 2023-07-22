import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UiHome from "../pages/ui-path/UiHome";
import FileConverterHome from "../pages/file-converter/FileConverterHome";

export const router=createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'/file-converter',
        element: <FileConverterHome />
    },
    {
        path:'/ui-path',
        element: <UiHome />
    }
])