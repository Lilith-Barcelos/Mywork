export default function Cardcountries(props) {
  return (
    <div className="bg-[#FAFAFA]">
      <img className="w-[348px] h-[215]" src={props.img}></img>
      <h1 className="text-[#37474F] text-[25px] font-sans pt-[20px]">
        {props.text}
      </h1>

      <div className="w-[348px]">
        <span className=" font-sans text-[16px] text-[#37474FB8] pt-[10px]  ">
          {props.span}
        </span>
      </div>
    </div>
  );
}
