
export default function PanelComponent ({textTitle,textBody,}:{
  textTitle:string,
  textBody:string
}) {
    return (
      <div className="group rounded-lg border border-neutral-600/0 hover:border-blue-500/25 hover:bg-neutral-500/15 ease-in duration-200 p-5">
        <div className="">
          <h1 className="group-hover:text-blue-400 ease-in duration-200">{textTitle}</h1>
        </div>
        <p className="group-hover:text-blue-400 ease-in duration-200" >{textBody}</p>
      </div>  
    );
}