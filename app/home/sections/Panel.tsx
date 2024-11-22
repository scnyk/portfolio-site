

export default function PanelComponent ({textTitle,textBody,subtitle1,}:{
  textTitle:string,
  textBody:React.ReactNode,
  subtitle1:string,
}) {
    let subheader1 = <></>;
    if (subtitle1) {
      subheader1= <h2 className="font-thin text-sm text-neutral-300/75">{subtitle1}</h2>
    }
    // let subheader2 = <></>;
    // if (subtitle2) {
    //   subheader2= <h2>{subtitle2}</h2>
    // }
    return (
      <div className="group rounded-lg border border-neutral-600/0 hover:border-blue-500/25 hover:bg-[#81C3D7]/15 hover:shadow-md  ease-in duration-200 p-5
      hover:translate-x-5
      ">
        <div className=" font-noto-serif pb-2">
          <h1 className="group-hover:text-white text-neutral-300 font-extrabold text-lg origin-left">{textTitle}</h1>
          {subheader1}
        </div>
        <ul className="ml-4 group-hover:text-white text-neutral-300 list-disc list-outside" >{textBody}</ul>
      </div>  
    );
}
