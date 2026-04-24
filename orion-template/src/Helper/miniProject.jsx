import Gallery from "./Gallery"
import { PROJECTS } from "../Data/ProjectData"
import BulletList from "./BulletList"
import { Link } from "react-router-dom"

export default function MiniProject({ project }) {
    const data = PROJECTS[project]

    return (
        <div class="rounded-lg bg-stone-800 p-4">
            <Link to={`/projects/${project}`}>
            <h3 className="text-4xl font-bold text-yellow-100 p-6 hover:bg-stone-700 transition">
                {data.title}
            </h3>
            </Link>
            

            <div className="flex">
                <div
                className="flex flex-col text-zinc-300 w-1/2 ">
                    <p className="p-6 ">{data.shortDescription}</p>

                    <BulletList items={data.highlights} />

                    <p className="mt-auto pt-8">{data.currentState}</p>
                </div>

                <div className="p-6 w-1/2 flex justify-start">
                    <Gallery name={data.gallery} preview />
                </div>
            </div>
        </div>
    )
}