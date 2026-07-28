import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen font-mono">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
