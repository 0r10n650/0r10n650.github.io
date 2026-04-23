import Gallery from "./Gallery"
import { PROJECTS } from "../Data/ProjectData"

export default function Project({ project }) {
    const data = PROJECTS[project]

    return (
        <div class="rounded-lg p-4">
            <div className="flex justify-between">
                <p className="text-gray-600 mt-2 text-zinc-300">{data.description}</p>
                <Gallery name={data.gallery} />
            </div>
        </div>
    )
}