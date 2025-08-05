/*A component that shows on all pages. Navbar, header, footer*/
import {Outlet} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function Layout(){
    
return(
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
   
)

}


export default Layout;
