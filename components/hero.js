export default function Hero() {
  return (
    <div className="flex justify-between">
      <div className="pl-[150px]">
        <h1 className="text-[53px] font-extralight pt-[103px]">
          We Help to <span className="text-blue-300">Build</span>
          <br /> Your Dream{" "}
        </h1>
        <h2 className="text-[#373737] font-extralight text-[22px] w-[632px]">
          We are always availed to consult on tajing your higher education to
          the next level so you can stay competitive in the globalworld.
          <br />
          We welcome the opportunity to work with you "today" for solutions.
        </h2>
        <br />
        <button className="flex gap-2 items-center justify-center text-[#FFFFFF] text-[22px] font-extralight  bg-[#717CFF] h-[40px] px-[15px] rounded">
          Apply online
          <svg
            class="w-4 h-4"
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
        <div className="flex pt-[100px] gap-x-3">
          <img
            className="h-[20.45px] w-[11.19px]"
            src="images/facebook.png"
          ></img>
          <img className="h-[21px] w-[20.67px]" src="images/twitter.png"></img>
          <img
            className="h-[22.43px] w-[21.31px]"
            src="images/instagram.png"
          ></img>
        </div>
      </div>
      <img
        className="w-[450px] h-[505px] mt-[100px] pr-[50px]"
        src="images/photo.png"
      ></img>
    </div>
  );
}
