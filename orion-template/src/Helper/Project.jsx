import Gallery from "./Gallery"
import { PROJECTS } from "../Data/ProjectData"

export default function Project({ project }) {
    const data = PROJECTS[project]

    return (
        <div class="rounded-lg bg-red-700 p-4">
            <h3 className="text-xl font-bold text-white">{data.title} </h3>
                <p className="text-gray-600 mt-2 text-zinc-300">{data.description}</p>
            <Gallery name={data.gallery} />
        </div>
    )
}