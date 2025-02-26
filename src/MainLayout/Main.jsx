import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";

const Main = () => {
  return (
    <div>

    {/* this is Navbar */}
      <Navbar />
     

      {/* this is Main layout */}
      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default Main;
