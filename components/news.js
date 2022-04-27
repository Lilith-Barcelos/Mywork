import Cardnews from "../components/cardnews";

export default function News() {
  return (
    <div className="bg-[#FAFAFA] flex flex-col items-center justify-center w-full pb-[124px]">
      <h1 className="text-[#373737] text-[37px] font-sans text-center pt-[50px] ">
        News
      </h1>
      <h2 className="font-sans text-[22px] text-[#7D7D7D] text-center px-[245px] pt-[50px]">
        Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum
        teneam sententiam, quid bonum esse vult.
      </h2>
      <div className="bg-[#FAFAFA] w-full flex flex-wrap justify-center gap-x-[20px] gap-y-[20px] px-[100px] pt-[140px]  pb-[60px]">
        <Cardnews
          img="images/pictur1.png"
          date="images/calendario1.png"
          text="Come On In. The Water’s Fine (Mostly)."
        />
        <Cardnews
          img="images/pictur2.png"
          date="images/calendario1.png"
          text="Trump Lays Plans to Reverse Obama’s Climate Change Legacy"
        />
        <Cardnews
          img="images/pictur3.png"
          date="images/calendario1.png"
          text="How a Little Bit of Hydra Regrows a Whole Animal"
        />
      </div>

      <button className="flex items-center justify-center gap-2 text-[#FFFFFF] text-[22px] font-extralight  bg-[#717CFF] h-[40px] w-[138px] rounded">
        Join Here
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
