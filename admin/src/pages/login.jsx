import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      const { token, user } = res.data;

      // Save token and role to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

console.log("Token saved:", localStorage.getItem("token"));

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/home");
      } else {
        navigate("/home"); 
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="border">
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300 ">
        <div>
          <h2 className="text-[#4a85e3] font-semibold text-[35px]">
            ParcelFlow Admin
          </h2>
          <img src="/hero.png" alt="" />
        </div>

        <form
          onSubmit={handleLogin}
          className="h-[450px] w-[450px] bg-[#FF6B00] rounded-md flex flex-col items-center justify-center"
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#fff] p-[15px] w-[350px] mb-4 outline-none"
            placeholder="Enter your email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#fff] p-[15px] w-[350px] mb-4 outline-none"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="bg-[#697e94] w-[350px] p-[15px] text-white font-semibold text-[18px]"
          >
            Login
          </button>

          {error && <p className="text-red-500 mt-3">{error}</p>}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
