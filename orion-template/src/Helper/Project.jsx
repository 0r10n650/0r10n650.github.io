import Gallery from "./Gallery"
import { PROJECTS } from "../Data/ProjectData"
import BulletList from "./BulletList"
import { getGallery } from "./GalleryLoader"

export default function Project({ project }) {
    const data = PROJECTS[project]
    const items = getGallery(data.gallery)

    return (
        <div class="rounded-lg p-4">
            <div className="flex pb-6">
                <div className=" flex flex-col grow text-zinc-300 w-1/2">
                    <p className="text-2xl">
                        Software used : {data.softwareUsed}
                        
                    </p>
                     <p className="text-lg text-stone-300 pt-5 pr-20">
                        {data.description}
                    </p>
                </div>
                <div className="min-w-80">
                    <p className="text-3xl text-stone-300">
                        Started : {data.startDate}
                        {data.endDate ? (
                            <div>
                                <br/>
                                Completed : {data.endDate}
                            </div>
                        ) : (
                            <div className="italic">
                                <br/>
                                {data.currentState}
                            </div>
                        )}
                    </p>
                </div>
            </div>
            <div className="flex ">
                <div className=" flex flex-col text-stone-300 w-1/2">
                    <h1 className="text-4xl pb-5 underline">
                        Things Learned
                    </h1>
                    <div className="text-lg">
                        <BulletList items={data.skillsLearned ?? []}/>
                    </div>
                   
                </div>
                <div className="w-1/2 ">
                   <Gallery name={data.gallery} preview />
                </div>
            </div>
            {data.notes && (
                <div className="text-stone-300">
                    <h1 className="text-4xl underline pb-5">
                        Notes
                        <br/>
                    </h1>
                    <div className="min-h-80">
                        <p>
                            {data.notes}
                        </p>
                    </div>
                </div>
            )}
            {items.length > 1 && (
                <div>
                    <h1 className="underline text-4xl text-stone-300 pb-8">
                    Gallery
                </h1>
                <div>
                    <Gallery name={data.gallery} />
                </div>
                </div>
            )}
        </div>
    )
}