import { apiLoginSuccess, apiRegister } from "@/services/authService";
import { loginSuccessAction } from "@/stores/actions/authAction";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false); // State để toggle giữa Login và Register
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName : "",
    lastName : ""
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // Xử lý input thay đổi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý form submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(isRegister){
      const rawResponse = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData })
      });
      const content = await rawResponse.json();
      if(content) {
        setIsRegister(false)
      }
    }else{
     try {
      const rs = await apiLoginSuccess(formData);
      console.log(rs)
     
      if (rs !== "Invalid username or password.") {
        dispatch(loginSuccessAction(formData));
        setTimeout(() => {
          navigate("/");
        }, 1000); 
        toast.success("Đăng nhập thành công");
      } else {
        toast.error("Sai tên đăng nhập hoặc mật khẩu");
      }
     } catch (error) {
        console.error(error);
        toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
     }
    }
  };
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegister ? "Register" : "Login"}
        </h2>
      
        <form onSubmit={handleSubmit}>
          {isRegister && <>
            <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="FirstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          </>}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Input Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        {/* Toggle giữa Login và Register */}
        <p className="mt-4 text-center text-gray-600">
          {isRegister
            ? "Already have an account?"
            : "Don't have an account?"}
          <button
            onClick={() => {
              setIsRegister(!isRegister)
            }}
            className="text-blue-500 hover:underline"
          >
            {isRegister ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
