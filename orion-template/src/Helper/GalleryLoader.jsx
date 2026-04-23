
const galleries = {
  asteroidsPlus: import.meta.glob(
    "../assets/AsteroidsPlus/*.{png,jpg,jpeg,mp4}",
    { eager: true }
  ),
  cardEditor: import.meta.glob(
    "../assets/CardEditor/*.{png,jpg,jpeg,mp4}",
    { eager: true }
  ),
  GMKY: import.meta.glob(
    "../assets/TheGmIsTryingToKillYou/*.{png,jpg,jpeg,mp4}",
    { eager: true }
  ),
}

export function getGallery(name) {
  const files = galleries[name]

  if (!files) return []

  return Object.entries(files).map(([path, mod]) => {
    const isVideo = path.endsWith(".mp4")

    const fileName = path.split("/").pop(); // get file name
    return {
      src: mod.default,
      type: isVideo ? "video" : "image",
      key: fileName.startsWith("key_"),
    }
  })
}
