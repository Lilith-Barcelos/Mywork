export default function Header() {
  return (
    <div className="flex justify-between sticky top-0 z-50 bg-white w-full font-extralight h-[100px] pl-[149px] items-center px-[150px] shadow-sm ">
      <img src="images/Bitmap.png"></img>
      <a className="text-[#373737] text-[17px] cursor-pointer "> Home </a>
      <a className="text-[#373737 text-[17px] cursor-pointer">About us</a>
      <a className="text-[#373737] text-[17px] cursor-pointer">Our servicies</a>
      <a className="text-[#373737] text-[17px] cursor-pointer">
        Responsibilities
      </a>
      <a className="text-[#373737] text-[17px] cursor-pointer">Country</a>
      <button className=" text-[#505050] border-2 border-blue-300 font-extralight h-[42px] w-[111px]  rounded-t-none shadow">
        Apply
      </button>
    </div>
  );
}
