import Eventscards from "./eventscards";
export default function Events() {
  return (
    <div className="bg-[#F2F2F2] flex flex-col items-center justify-center w-full pb-[120px] pt-[100px]">
      <h1 className="text-[37px] font-bold w-[507px] text-center">
        Upcoming University Events
      </h1>
      <span className="text-[22px] font-sans text-[#7D7D7D] text-center w-[949px] pt-[20px]">
        Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum
        teneam sententiam, quid bonum esse vult.
      </span>
      <div className=" w-full flex flex-wrap justify-center gap-x-[20px] gap-y-[20px] px-[100px] pt-[100px]">
        <Eventscards
          img="images/date1.png"
          title="Macquarie University, Sydney, Australia"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Learn More"
        />
        <Eventscards
          img="images/date2.png"
          title="Federation University, Australia"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Learn More"
        />
      </div>
    </div>
  );
}
