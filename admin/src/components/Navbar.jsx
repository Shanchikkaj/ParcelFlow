import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <div className="flex items-center bg-[#4a85e3] justify-between h-[70px] pl-10">
      <img
        src="/logo.png"
        alt=""
        height={150}
        width={130}
        className="text-white"
      />


      <Link to="/login">
      <span className="mr-[30px] text-[18px] cursor-pointer">Logout</span>
      </Link>
    </div>
  );
};

export default Navbar;