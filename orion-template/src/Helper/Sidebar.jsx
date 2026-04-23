import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="pt-3 pr-3 items-center bg-stone-900 space-y-4 h-lvh min-w-80">
      <Link to="/" className=" hover:text-gray-400">
        <div class="mx-auto max-w-sm items-center p-6 rounded-r-xl bg-stone-800 shadow-lg outline outline-black/5 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
              <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Orion Rand
            </h1>
            <p className="mb-6 text-gray-400">
                Portfolio of everything I've done.
            </p>
        </div>
      </Link>
        <div className='p-3 bg-zinc-700 text-white rounded-r-lg'>
            <Link to="/projects/asteroids" className=" hover:text-gray-400">Asteroids</Link>
            <br />
            <Link to="/projects/cardeditor" className=" hover:text-gray-400">Card Creator</Link>
        </div>
    </div>
  )
}