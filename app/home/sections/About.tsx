import PanelComponent from "./Panel";

export default function AboutSection () {
    return (
        <div className="flex flex-col gap-5 min-w-lg w-2xl max-w-3xl place-self-center">
            <div></div>
            <h1 className="text-3xl font-bold">About Me</h1>
            <PanelComponent textTitle="Lorem" textBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a vero praesentium velit aspernatur earum consequuntur dolores nihil voluptate id sit possimus, ipsa repellendus? Aspernatur pariatur excepturi similique quis perferendis."/>
        </div>
    );
}