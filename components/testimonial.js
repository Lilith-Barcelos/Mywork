import Cardtestimonial from "./cardtestimonial";

export default function Testimonial() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center justify-center w-full pb-[120px] pt-[100px]">
      <h1 className="text-[37px] font-bold w-[214px] text-[#373737]">
        Testimonial
      </h1>
      <h2 className="text-[22px] font-sans w-[949px] text-[#7D7D7D] pt-[50px]">
        Torquem detraxit hosti et quidem faciunt, ut et negent satis esse
        appetendum, alterum. Si sine causa? quae fuerit causa, mox videro;
        interea hoc epicurus in liberos.
      </h2>
      <div className="flex pt-[150px] gap-x-[30px]">
        <Cardtestimonial
          img="images/perfil1.png"
          name="Harrison Phillips"
          profissao="Reporter"
          text="Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui officia aperiam atque qui occaecati est. Magnam voluptatem earum excepturi qui quae ea qui."
        />
        <Cardtestimonial
          img="images/perfil2.png"
          name="Ainara Vergara"
          profissao="Landscape Architect"
          text="Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex."
        />
        <Cardtestimonial
          img="images/perfil3.png"
          name="Niel Bove"
          profissao="Senior Developer"
          text="Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet iusto."
        />
      </div>
    </div>
  );
}
