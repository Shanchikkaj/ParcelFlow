const Footer = () => {
  return (
    <div className="h-[300px] bg-[#697e94] ] flex items-center justify-between p-[30px]">
      <div className="flex flex-col">
      <img src="/logo.png" height="200px" width="200px" alt="" />
        <span className="w-[70%]">
          We understand that your parcels carry more than just items— they carry
          your trust. Committed to excellence,
        </span>
        <span>+94 0765894321</span>
        <span>parcelflow@gmail.com</span>
      </div>
      <div className="flex flex-col">
        <span>&copy; copyright 2025</span>
      </div>
    </div>
  );
};

export default Footer;