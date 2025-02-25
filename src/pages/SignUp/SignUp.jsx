import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { saveImage } from "../../utils/utils";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {handleCreateUser, handleUpdateUserProfile} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const navigate = useNavigate()

  // Handle form submission
  const signUpForm = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.photo[0]; 


    try {
      // Send image to Cloudinary get image URL
      const imageURL = await saveImage(image);

      // Create user with email and password
      await handleCreateUser(email, password)

      // Update user profile with name and photo
      await handleUpdateUserProfile(name, imageURL);

      // toast success message
      toast.success("User created successfully");

      // Redirect to home page
      navigate('/')


    } catch (error) {
      console.log("Image Upload Error:", error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-68px)] flex flex-1 flex-col justify-center py-10 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 rounded-lg px-4 py-6 sm:px-10">
        <form onSubmit={handleSubmit(signUpForm)} className="space-y-6">
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  message: "Invalid name",
                })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>
          {/* photo  */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2">
              {/* Hidden File Input */}
              <input
                type="file"
                id="photo"
                {...register("photo", { required: "Photo is required" })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                accept="image/*"
              />

              {/* Custom Upload Button */}
              {/* <label
                htmlFor="photo"
                className="cursor-pointer block w-full rounded-md px-3 py-2 text-gray-900 text-start outline-1 -outline-offset-1 outline-gray-300"
              >
                {selectedFile?.[0]?.name || fileName}
              </label> */}

              {/* Error Message */}
              {errors.photo && (
                <span className="text-red-500 text-sm">
                  {errors.photo.message}
                </span>
              )}
            </div>
          </div>
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                autoComplete="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email",
                  },
                })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                autoComplete="current-password"
                type="password"
                {...register("password", {
                  required: "Passwoard is required",
                  minLength: { value: 6 },
                  message: "Password must be at least 6 characters",
                })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          {/* button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm/6 text-gray-500 ">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
