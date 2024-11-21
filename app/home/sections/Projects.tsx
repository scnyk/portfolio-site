import PanelComponent from "./Panel";
import Image from 'next/image';
import LearnLensImg from './images/LearnLensImg.png'
import PortfolioSiteImg from './images/PortfolioSiteImg.png'


export default function ProjectsSection () {
    return (
        <div className="flex flex-col gap-5 min-w-lg w-2xl max-w-3xl place-self-center">
            <div></div>
            <h1 className="font-noto-serif text-3xl font-bold">PROJECTS</h1>
            <div className="flex flex-row gap-5"> 
                {/* <Image 
                    src={PortfolioSiteImg} 
                    alt="Portfolio Site Image" 
                    width={250} 
                    height={50}
                    className="object-contain" 
                /> */}
                <PanelComponent 
                textTitle="Portfolio Website" 
                textBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a vero praesentium velit aspernatur earum consequuntur dolores nihil voluptate id sit possimus, ipsa repellendus? Aspernatur pariatur excepturi similique quis perferendis."
                subtitle1="2024"
                subtitle2=""
                />
            </div>
            <div className="flex flex-row gap-5"> 
                {/* <Image 
                    src={LearnLensImg} 
                    alt="Learn Lens Image" 
                    width={250} 
                    height={50}
                    className="object-contain" 
                /> */}
                <PanelComponent 
                textTitle="LearnLens" 
                textBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a vero praesentium velit aspernatur earum consequuntur dolores nihil voluptate id sit possimus, ipsa repellendus? Aspernatur pariatur excepturi similique quis perferendis."
                subtitle1="2024"
                subtitle2=""
                />
            </div>
            
        </div>
    );
}