import Footer from "./footer";
export default function Dreams() {
  return (
    <div className="bg-[#FAFAFA] pb-[50px]">
      <div className="flex justify-between items-center pt-[100px] pr-[159px] pl-[147px] pb-[79px]">
        {" "}
        <h1 className="text-[#252525] font-bold text-[37px] w-[539px]">
          Ready to chase your dreams?
        </h1>
        <button className="flex gap-2 items-center justify-center text-[#FFFFFF] text-[22px] font-extralight  bg-[#717CFF] h-[40px] px-[15px] rounded">
          Apply online
          <svg
            class="w-4 h-4"
            color="black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
