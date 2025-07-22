const Footer = () => {
  return (
    <div className="flex items-center bg-[#4a85e3] justify-between h-[100px]">
      <img
        src="/logo.png"
        alt=""
        height={100}
        width={130}
        className="text-white"
      />
      <ul className="m-[20px]">
        <li>Admin&copy; 2024</li>
      </ul>
    </div>
  );
};

export default Footer;