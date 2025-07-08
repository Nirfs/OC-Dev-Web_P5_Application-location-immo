import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout-Componant/Header';
import { Footer } from '../components/layout-Componant/Footer';

export function Layout(){
    return(
        <>
        <div className='main-content'>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
    )
}