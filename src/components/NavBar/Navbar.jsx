import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);

  console.log(user);

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

  return (
    // Navbar component
    <nav className=" bg-base-100 shadow-md">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <Link to="/" className="font-bold text-2xl text-blue-600">
            Taskify
          </Link>
        </div>
        <div className="flex gap-2 items-center ">
          {/* input fild  */}
          {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
          {/* buttons for Login */}
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
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

          {/* profile icon dropdown */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
