import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <div className="flex items-center justify-between h-[70px] pl-10 bg-[#697e94] ">
      <img
        src="/logo.png"
        alt=""
        height={200}
        width={90}
        className="text-white"
      />


      <Link to="/login">
      <span className="mr-[30px] text-[18px] cursor-pointer">Logout</span>
      </Link>
    </div>
  );
};

export default Navbar;