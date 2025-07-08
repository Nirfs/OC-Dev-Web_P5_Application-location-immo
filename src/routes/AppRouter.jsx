import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from '../pages/Home';
import {About} from '../pages/About';
import {NotFound} from '../pages/NotFound';
import { Accomodation } from '../pages/Accommodation';
import {Layout}  from '../Layout/Layout';
import { getAnnounce } from '../Api/ApiDataCall';

const router = createBrowserRouter([
    {    
        path: '/',
        element: <Layout />,
        children:[
            {
                index:true,
                element:<Home/>,
                loader: () => getAnnounce()
            },
            {
                path:'about', 
                element:<About/>,
                loader: () => getAnnounce()
            },
            {
                path:'accomodation/:id', 
                element:<Accomodation/>,
                loader: () => getAnnounce()
            },
            {
                path:'*', 
                element:<NotFound/>
            },
        ],
    },
])

export default function AppRouter() {
    return (
    <RouterProvider
      router={router}
    />
  );
}