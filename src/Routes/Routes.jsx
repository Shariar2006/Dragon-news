import { createBrowserRouter } from "react-router-dom";
import Home from "../Root/Home";
import Root from "../Root/Root";
import About from "../Root/About";
import Career from "../Root/Career";




const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    }
])

export default Routes;