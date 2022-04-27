export default function Servicescard(props) {
  return (
    <div className="flex flex-col justify-center custom-shadow bg-[#FFFFFF] w-[344px] h-[351px] rounded-[16px] pt-[20px] px-[20px]">
      <img className="h-[75px] w-[60px] pt-4" src={props.img}></img>
      <h1 className="text-[24px] text-center h-[37px] text-[#37474F] pt-[10px]">
        {props.title}
      </h1>
      <h2 className="text-[#37474FB8] text-center text-[16px] font-sans pt-[10px]">
        {props.text}{" "}
      </h2>
      <button className="flex gap-2 items-center justify-center text-[#717CFF] text-[17px] font-bold w-[150px] py-[50px] text-center px-[10px]">
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
    </div>
  );
}
