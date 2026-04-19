import Gallery from "./Gallery"

export default function Project({title, description, gallery}) {
    return (
        <div>
            <h3 className="text-xl font-bold">{title} </h3>
                <p className="text-gray-600 mt-2">{description}</p>
            <Gallery  name={gallery} />
        </div>
    )
}