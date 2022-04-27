export default function Cardnews(props) {
  return (
    <div className="h-[360px] w-[344px] bg-[#FFFFFF]">
      <img className="h-[224px] w-full object-cover " src={props.img}></img>
      <div className=" flex items-center pl-3 pt-5">
        <img className="h-[14px] w-[14px]" src={props.date}></img>
        <h1 className="h-[22px] px-4 text-[#565656] ">17 Apr 2020</h1>
      </div>
      <h1 className="text-[22px] font-sans text-[#252525] px-4">
        {props.text}
      </h1>
    </div>
  );
}
