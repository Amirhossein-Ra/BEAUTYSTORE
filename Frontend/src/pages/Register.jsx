import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../RequestMethods";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      await request.post("/auth/register", { name, email, password });
      toast.success("User registered successfully");
      setTimeout(() => navigate("/login"), 1500);

    } catch (error) {
      if (error.response && error.response.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }

  };

  return (
    <div className="flex items-center justify-center mt-[5%]">
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* IMAGE */}
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
          <img
            src="/lotion.jpg"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FORM */}

        <div className="p-10 w-[500px] h-[500px]">
          <h2 className="text-xl font-semibold text-gray-700 mb-5">
            Create Account
          </h2>

          <form className="space-y-5">
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                placeholder="AmirHossein Rahzany"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleRegister} className="w-full py-2 bg-[#d55fbb] font-black rounded-md transition-transform duration-500 hover:bg-blue-200 focus:outline-none focus:ring-red-500 hover:scale-105 text-white">
              Create An Account
            </button>

            <div className="mt-4 text-sm text-gray-600">
              <span className="">Have an account already?</span>
              <Link className="ml-2 text-red-500 hover:underline" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
