import PanelComponent from "./Panel";

export default function AboutSection({className}: {
    className: string,
}) {
    const _className = 'flex flex-col gap-5 min-w-lg w-2xl max-w-3xl place-self-center ' + className;
    return (
        <div className={_className}>
            <div></div>
            <h1 className="text-3xl font-bold mb-5 font-noto-serif">ABOUT</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus fuga ab illum aliquam recusandae dignissimos tempore rerum esse, ipsam aspernatur illo natus sit. Dolorem pariatur voluptates non vitae nemo!</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus fuga ab illum aliquam recusandae dignissimos tempore rerum esse, ipsam aspernatur illo natus sit. Dolorem pariatur voluptates non vitae nemo!</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus fuga ab illum aliquam recusandae dignissimos tempore rerum esse, ipsam aspernatur illo natus sit. Dolorem pariatur voluptates non vitae nemo!</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus fuga ab illum aliquam recusandae dignissimos tempore rerum esse, ipsam aspernatur illo natus sit. Dolorem pariatur voluptates non vitae nemo!</p>
        </div>
    );
}