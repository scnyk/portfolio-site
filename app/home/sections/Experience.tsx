import PanelComponent from "./Panel";

export default function ExperienceSection () {
    
    let samsung_body = <>
        <li>Developed a fullstack Python web application and managed deployment using Docker and Kubernetes</li>
        <li>Performed unit testing, end-to-end testing, and debugging</li>
        <li>Automated database storage device maintenance processes and reduced storage data pull times by 25%</li>
    </>

    let uopx_body = <>
        <li>Drove $10 million in revenue growth through an increase in prospective student conversions.</li>
        <li>Analyzed business data and optimized ad campaigns using SEO trends and market data.</li>
        <li>Built Python data models to predict customer conversion trends from historical data and statistics.</li>
        <li>Utilized Python, SQL, and Microsoft Power BI to create and analyze data models from Google ad campaigns.</li>
        <li>Applied object-oriented design, data structures, and algorithms to manage and interpret large datasets.</li>
    </>
    
    return (
        <div className="flex flex-col gap-3 min-w-lg w-2xl max-w-3xl place-self-center">
            <div></div>
            <h1 className="font-noto-serif text-3xl font-bold">EXPERIENCE</h1>
            <PanelComponent 
                textTitle="Software Engineer Intern - Samsung" 
                textBody={samsung_body}
                subtitle1="2024"
                subtitle2=""
            />
            <PanelComponent 
                textTitle="Software Engineer Intern - University of Phoenix" 
                textBody={uopx_body}
                subtitle1="2023"
                subtitle2=""
            />
            
            {/* <PanelComponent 
                textTitle="Lorem" 
                textBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a vero praesentium velit aspernatur earum consequuntur dolores nihil voluptate id sit possimus, ipsa repellendus? Aspernatur pariatur excepturi similique quis perferendis."
                subtitle1=""
                subtitle2=""
            /> */}
        </div>
    );
}