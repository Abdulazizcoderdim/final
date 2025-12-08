import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
