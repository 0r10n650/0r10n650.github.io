import { getGallery } from "./GalleryLoader"

export default function Gallery({ name, preview = false }) {
    const items = getGallery(name)

     const displayItems = preview
        ? items.filter(item => item.key)   // only key item
        : items;      
      
    return (
    <div className="flex flex-col gap-6">
      {displayItems.map((item, i) =>
        item.type === "image" ? (
          <img 
            key={i} 
            src={item.src} 
            className="max-w-xl mx-auto max-h-[500px]" />
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
