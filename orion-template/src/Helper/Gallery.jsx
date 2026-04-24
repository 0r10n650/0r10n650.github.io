import { getGallery } from "./GalleryLoader"

export default function Gallery({ name, preview = false }) {
    const items = getGallery(name)

     const displayItems = preview
        ? items.filter(item => item.key)   // only key item
        : items;      
      
    return (
      
    <div className="flex flex-wrap gap-4">
      {displayItems.map((item, i) => (
        <div>
          {item.type === "image" ? (
            <img 
              key={i} 
              src={item.src} 
              className="max-w-[500px] max-h-[500px] w-auto h-auto"
              />
          ) : (
            <video
              key={i}
              src={item.src}
              controls
              className="max-w-[500px] max-h-[500px] w-auto h-auto"
            />
          )}
        </div>
      ))}
    </div>
  )
}
