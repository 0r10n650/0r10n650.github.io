import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <Link to="/">Home</Link>
      <br />
      <Link to="/projects/asteroids">Asteroids</Link>
      <br />
      <Link to="/projects/card-editor">Card Creator</Link>
    </div>
  )
}