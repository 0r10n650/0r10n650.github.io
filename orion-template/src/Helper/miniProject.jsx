import Gallery from "./Gallery"
import { PROJECTS } from "../Data/ProjectData"
import BulletList from "./BulletList"

export default function MiniProject({ project }) {
    const data = PROJECTS[project]

    return (
        <div class="rounded-lg bg-stone-800 p-4">
            <h3 className="text-4xl font-bold text-yellow-100">{data.title} </h3>
            <div className="flex justify-between">
                <div className="text-zinc-300">
                    <p className="p-6 ">{data.shortDescription}</p>
                    <BulletList items={data.highlights} />
                </div>
                <Gallery name={data.gallery} preview />
            </div>
        </div>
    )
}