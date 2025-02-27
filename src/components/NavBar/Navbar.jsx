import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import TaskFilterSort from "../TaskFilterSort/TaskFilterSort";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  const handleLogOutUser = async () => {
    try {
      await handleLogOut();
      toast.error("Logout Successfull");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(openMenu);

  return (
    // Navbar component
    <nav className=" bg-slate-200 shadow-md">
      <div className="container mx-auto navbar">
        <div className="flex-1 flex items-center space-x-2">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="text-2xl md:hidden cursor-pointer text-blue-500"
          >
            {!openMenu && <LuMenu />}
          </div>
          <Link to="/" className="font-bold text-2xl text-blue-500">
            Taskify
          </Link>
        </div>
        <div className="flex gap-2 items-center ">
          {/* input task filter sort */}
          {user && (
            <div className="md:flex gap-4 items-center hidden">
              <TaskFilterSort />
            </div>
          )}

          {/* buttons for Login */}
          {/* profile icon dropdown */}
          {user !== null ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-slate-200  text-black font-medium rounded-box z-1 mt-5 w-32 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOutUser}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="py-1.5 px-3 rounded-sm border-2 border-blue-500 text-base font-medium cursor-pointer text-blue-500 hover:bg-blue-500 transition-colors hover:text-white">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="py-1.5 px-3 rounded-sm border-2 border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 text-white text-base font-medium cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
        <div>
          {openMenu && (
            <div >
              <div onClick={() => setOpenMenu(false)} className="md:hidden z-30 absolute top-4 right-5 text-xl bg-slate-100 p-2 rounded cursor-pointer text-red-600">
                <RxCross2 />
              </div>

              <div className="md:hidden gap-4 items-center flex flex-col absolute top-0 left-0 bg-slate-200 w-full h-auto pt-16 px-10 pb-10 transition duration-700 ease-in ">
                <TaskFilterSort />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
