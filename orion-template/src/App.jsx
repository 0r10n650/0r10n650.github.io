//import { useState } from 'react'
import './App.css'
import Project from './Project.jsx'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <title>Orion Rand Portfolio</title>
      <section className="text-center">
        <h1 className="text-4xl font-bold m-6">Orion Rand Portfolio</h1>
        <p>Game Developer that wants to improve in everything.</p>
      </section>
      <Project 
        title="Asteroids recreation & expansion"
        description= "A recreation of Asteroids in Godot Game Engine. This project focused on smooth ship movemnt, dynamic asteroid spawning, and reaching a finished project."
        gallery="asteroidsPlus" 
      />
      <Project 
        title="D&D inspired Card Combat Game"
        description="A board game reimagining D&D combat as a card game. This project
      focused on interesting card mechanics, emphasizing cooperation and
      teamwork, finding ways to improve through playtesting, and developing
      abilities in 3d modeling."
        gallery="GMKY"
      />
      <Project
        title="Card Creator App"
        description="A mobile app to create cards for faster playtesting. This project focused
      on data management, user experience, and intuative controls."
        gallery="cardEditor"
      />
  </>
  )
}

export default App
