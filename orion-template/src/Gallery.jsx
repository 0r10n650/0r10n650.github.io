import { getGallery } from "./galleryLoader"

export default function Gallery({ name }) {
    const items = getGallery(name)

    return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) =>
        item.type === "image" ? (
          <img key={i} src={item.src} className="max-w-xl mx-auto" />
        ) : (
          <video
            key={i}
            src={item.src}
            controls
            className="max-w-xl mx-auto"
          />
        )
      )}
    </div>
  )
}
