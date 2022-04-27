import Cardcountries from "./cardcountries";
export default function Countries(props) {
  return (
    <div className="bg-[#FAFAFA] flex flex-col items-center justify-center w-full pt-[100px] pb-[100px]">
      <h1 className="text-[37px] font-bold w-[700px] text-[#373737] text-center">
        Countries we covered
      </h1>
      <span className="text-[#7D7D7D] text-[22px] w-[949px] pt-[50px] font-sans items-center">
        Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum
        teneam sententiam, quid bonum esse vult.
      </span>
      <div className="w-full flex  justify-center gap-x-[50px] px-[100px] pt-[100px]">
        <Cardcountries
          img="images/countrie1.png"
          text="Study in Australia"
          span=" Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."
        />
        <Cardcountries
          img="images/countrie2.png"
          text="Study in Canada"
          span=" Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."
        />

        <Cardcountries
          img="images/countrie3.png"
          text="Study in Uk"
          span=" Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."
        />
      </div>
    </div>
  );
}
