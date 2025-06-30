import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from '../pages/Home';
import {About} from '../pages/About';
import {NotFound} from '../pages/NotFound';
import {Layout}  from '../Layout/Layout';


const router = createBrowserRouter([
    {    
        path: '/',
        element: <Layout />,
        children:[
            {index:true, element:<Home/>}, // index: true = path:""
            {path:'about', element:<About/>},
            {path:'*', element:<NotFound/>},
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router}/>
}