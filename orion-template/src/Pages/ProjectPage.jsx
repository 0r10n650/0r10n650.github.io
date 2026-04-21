import { useParams } from "react-router-dom"
import Sidebar from "../Helper/Sidebar.jsx"
import Gallery from "../Helper/Gallery.jsx"
import { PROJECTS } from "../Data/ProjectData.jsx"

export default function ProjectPage() {
  const { id } = useParams()
  const project = PROJECTS[id]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>

        <p className="mt-4 text-gray-600">
          {project.description}
        </p>

        {/* Bigger, more detailed gallery */}
        <div className="mt-6">
          <Gallery name={project.gallery} />
        </div>
      </div>
    </div>
  )
}