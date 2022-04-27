export default function Eventscards(props) {
  return (
    <div className="w-[580px] h-[308] bg-[#FFFFFF] flex flex-col justify-center ">
      <div className="flex px-[10px]">
        <img
          className="w-[76px] h-[76px] pt-[15px] pr-5 "
          src={props.img}
        ></img>
        <h1 className="text-[#37474F] text-[24px] font-bold w-[330px] pt-[15px]  ">
          {props.title}
        </h1>
      </div>
      <span className="text-[#37474FB8] text-[16px] font-sans text-center">
        {props.text}
      </span>

      <div className="flex justify-between items-center">
        <button className="flex items-center gap-2 text-[#717CFF] text-[17px] font-bold w-[150px] py-[50px] text-center px-[10px]">
          {props.more}
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
        <div className="flex items-center pr-[20px]">
          <img className=" w-[24px] h-[24px]" src="images/Time1.png"></img>
          <h1 className="text-[15px] font-sans ">10:00 AM - 2:00 PM</h1>
        </div>
      </div>
    </div>
  );
}
