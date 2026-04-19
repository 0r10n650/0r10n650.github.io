//import { useState } from 'react'
import { IMAGES, VIDEOS} from './index.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  console.log(VIDEOS.AP)
  return (
    <>
  <title>Orion Rand Portfolio</title>
  <section className="text-center">
    <h1 className="text-4xl font-bold m-6">Orion Rand Portfolio</h1>
    <p>Game Developer that wants to improve in everything.</p>
  </section>
  <div className="bg-white shadow rounded-xl m-10">
    <h3 className="text-xl font-bold">Asteroids recreation &amp; expansion</h3>
    <p className="text-gray-600 mt-2">
      A recreation of Asteroids in Godot Game Engine. This project focused on
      smooth ship movemnt, dynamic asteroid spawning, and reaching a finished
      project.
    </p>
    <video controls className="block mx-auto max-w-lg w-full mt-8" src={VIDEOS.AP} />
    <h3 className="text-xl font-bold">D&amp;D Inspired Card Combat Game</h3>
    <p className="text-gray-600 mt-2">
      A board game reimagining D&amp;D combat as a card game. This project
      focused on interesting card mechanics, emphasizing cooperation and
      teamwork, finding ways to improve through playtesting, and developing
      abilities in 3d modeling.
    </p>
    <img src={IMAGES.BG1} className="block mx-auto max-w-2xl w-full mt-8" />
    <img src={IMAGES.BG2} className="block mx-auto max-w-2xl w-full mt-8" />
    <h3 className="text-xl font-bold">Card Creator App</h3>
    <p className="text-gray-600 mt-2">
      A mobile app to create cards for faster playtesting. This project focused
      on data management, user experience, and intuative controls.
    </p>
    <img src= {IMAGES.CE1} className="block mx-auto max-w-sm w-full mt-8" />
    <img src= {IMAGES.CE2} className="block mx-auto max-w-sm w-full mt-8" />
  </div>
  </>
  )
}

export default App
