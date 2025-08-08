/*A component that shows on all pages. Navbar, header, footer*/
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <div className="pageContainer">
        <Header />
        <div className="contentWrap">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
