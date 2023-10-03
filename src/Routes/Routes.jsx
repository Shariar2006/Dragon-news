import { createBrowserRouter } from "react-router-dom";
import Home from "../Root/Home";
import Root from "../Root/Root";




const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Routes;