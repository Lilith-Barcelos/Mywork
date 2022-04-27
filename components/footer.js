export default function Footer() {
  return (
    <div className="bg-[#717CFF] flex h-[346px]  ">
      <div className="pl-[144px] pt-[64px] pr-[100px]">
        <img className="h-[57px] w-[160px]" src="images/Bitmap2.png"></img>
        <h1 className="text-[#EEEEEE] text-[18px] w-[343px] font-sans pt-[26px]">
          Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.
        </h1>
        <h2 className="text-[#EEEEEE] text-[18px] font-sans pt-[58px]">
          © 2020 Executive Trade International.
        </h2>
      </div>
      <div className="flex flex-col items-center pt-[70px] gap-y-6 pr-[100px] ">
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          About us
        </a>
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Responsibilities
        </a>
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Our Services
        </a>
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Contact
        </a>
      </div>
      <div className="flex flex-col items-center pt-[70px] gap-y-4 ">
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Disclaimer
        </a>
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Testimonials
        </a>
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Privacy Policy
        </a>
        <a className="text-[18px] font-sans w-[161px] text-[#EEEEEE]">
          Terms of Service
        </a>
      </div>
      <div className="flex items-end gap-x-4  pb-[125px] pl-[100px]">
        <img className="w-[8.8px] h-[16px]" src="images/facebook2.png"></img>
        <img className="w-[16px] h-[13px]" src="images/twitter2.png"></img>
        <img className="w-[16px] h-[16px]" src="images/instagram2.png"></img>
      </div>
    </div>
  );
}
