import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
