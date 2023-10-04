import { createBrowserRouter } from "react-router-dom";
import Home from "../Root/Home";
import Root from "../Root/Root";
import About from "../Root/About";
import Career from "../Root/Career";
import Login from "../Root/Login";
import Register from "../Root/Register";
import News from "../Root/News";
import PriveteRoute from "../Root/PriveteRoute";




const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PriveteRoute><News></News></PriveteRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Routes;