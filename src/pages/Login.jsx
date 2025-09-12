import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { loginWithEmailAndPassword } from "../firebase/firebase.init";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   try {
     await loginWithEmailAndPassword(userInfo.email, userInfo.password);
     navigate('/');
    
   } catch (error) {
    console.log(error)
   }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="card-body p-8">
          <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="label text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userInfo.email}
                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-gray-600 font-medium">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={open ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  value={userInfo.password}
                  className="input input-bordered w-full rounded-lg pr-12 focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer z-50"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <IoIosEyeOff size={22} /> : <IoMdEye size={22} />}
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-between text-sm mt-2">
              <p>
                No account?{" "}
                <Link
                  className="text-blue-600 font-semibold hover:underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
              <Link to="/reset" className="text-gray-500 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="btn btn-neutral w-full mt-6 rounded-lg text-white font-semibold"
            >
              Login
            </button>
            <button className="btn w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M44.5 20H24v8.5h11.8C34.8 34.5 30.1 38 24 38c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 3.1l6-6C34.6 5.5 29.7 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.8 0 20-7.9 20-21 0-1.3-.1-2.3-.5-4z"
                />
              </svg>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
