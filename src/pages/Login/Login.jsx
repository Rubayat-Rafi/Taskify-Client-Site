import { createContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {handleSignIn} = createContext(AuthContext);
    const {register, handleSubmit , formState:{errors}} = useForm();

    const navigate = useNavigate();

    const logInForm = async(data) => {

        const email = data.email;
        const password = data.password;

        try {
          await handleSignIn(email, password);
          toast.success('Login Successfull');
          navigate('/');
        }catch(error){
            console.log(error);
        }

    }

  return (
    <>
      <div className="min-h-[calc(100vh-68px)] flex flex-1 flex-col justify-center   py-10 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 rounded-lg px-4 py-6 sm:px-10">
          <form onSubmit={handleSubmit(logInForm)}  className="space-y-6">
            {/* email */}
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  {...register('email',{required: 'Email is required', pattern: {value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email'}})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
              </div>
            </div>
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  {...register('password', {required: 'Passwoard is required', minLength:{value:6}, message: 'Password must be at least 6 characters'})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
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
            Not register yet?
            <Link to='/signup' className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2 hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
