export default function Cardtestimonial(props) {
  return (
    <div>
      <div className="flex">
        <img className="h-[62px]" src={props.img}></img>
        <div className="flex flex-col pl-[24px] ">
          <span className="text-[#37474F] text-[22px] font-sans w-[174px]">
            {props.name}
          </span>
          <h2 className="text-[#37474F] text-[18px] font-sans ">
            {props.profissao}
          </h2>
        </div>
      </div>
      <h1 className="w-[435px] text-[18px] text-[#37474FB8] font-sans pt-[20px]">
        {props.text}
      </h1>
    </div>
  );
}
