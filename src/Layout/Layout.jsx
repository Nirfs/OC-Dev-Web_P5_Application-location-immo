import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout-Componant/Header';
import { Footer } from '../components/layout-Componant/Footer';
import "@/styles/global.scss";

export function Layout(){ 
    return(
        <>
        <div className='main-container'>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
    )
}