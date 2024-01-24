import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UserRegistration from "../pages/UserRegistration";
import UserLogin from "../pages/UserLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/registration',
            element: <UserRegistration/>
        },
        {
            path: '/login',
            element: <UserLogin/>
        }
    ]
  },
]);