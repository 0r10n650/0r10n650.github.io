import MiniProject from '../Helper/miniProject.jsx';
import Sidebar from '../Helper/Sidebar.jsx';
import {PROJECTS} from '../Data/ProjectData.jsx'
import {useActiveSection} from "../Helper/observer.jsx"
import { getSortedProjects } from '../Helper/Sorter.jsx';

export default function Home(){
    const {active, containerRef} = useActiveSection("asteroids");
    
    return (
        <>
            <div className='flex h-screen overflow-hidden bg-stone-700'>
                <Sidebar/>
                <div className="flex-1 flex flex-col">
                    <div className="sticky top-0 bg-stone-900 text-white p-6 z-10">
                        <h1 className="text-5xl font-bold w-lvh">
                           {PROJECTS[active]?.title ?? "Portfolio"}
                        </h1>
                    </div>
                    <div ref={containerRef} className='flex-1 overflow-y-auto p-6 space-y-4'>
                         {getSortedProjects(PROJECTS).map(([key]) => (
                        <div key={key} data-id={key}>
                            <MiniProject project={key} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}
