import { useParams } from "react-router-dom"
import Sidebar from "../Helper/Sidebar.jsx"
import Gallery from "../Helper/Gallery.jsx"
import { PROJECTS } from "../Data/ProjectData.jsx"
import Project from "../Helper/Project.jsx"

export default function ProjectPage() {
  const { id } = useParams()
  const project = PROJECTS[id]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 bg-slate-900 text-white p-6 z-10">
            <h1 className="text-5xl font-bold ">
                {project.realTitle ?? "Portfolio"}
            </h1>
        </div>
        <div className="p-6 bg-stone-700 h-full overflow-y-auto">
          <Project project={id}/>
        </div>
      </div>
    </div>
  )
}