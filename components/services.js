import Servicescard from "./servicescard";
export default function Services() {
  return (
    <div className="bg-[#F2F2F2] pt-10">
      <h1 className="pl-[600px] text-[37px] font-sans">Our Services</h1>
      <h2 className="pt-10 text-[#7D7D7D] font-sans text-[22px] pl-[246px] pr-[246px]">
        Execute Trade international is an University Centre, guiding Bangladeshi
        students to Australian, British, Canadian and irish univercities!
      </h2>
      <div className="bg-[#F2F2F2] w-full flex flex-wrap justify-center gap-x-[20px] gap-y-[20px] px-[100px] py-[140px]  ">
        <Servicescard
          img="images/group1.png"
          title="Career Counselling"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Lear more"
        />
        <Servicescard
          img="images/group2.png"
          title="University Admissions"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Lear more"
        />
        <Servicescard
          img="images/group3.png"
          title="Visa Consultancy"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Lear more"
        />
        <Servicescard
          img="images/group4.png"
          title="Accommodation"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Lear more"
        />
        <Servicescard
          img="images/group5.png"
          title="Pre-Departure Briefing"
          text="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
          more="Lear more"
        />
      </div>
    </div>
  );
}
