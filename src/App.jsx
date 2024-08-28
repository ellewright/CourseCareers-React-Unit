import React from "react"
import JSXBasics from "./components/JSXBasics"
import CreatingComponents from "./components/CreatingComponents"
import Props, { RenderChildFunc, ToDoListItemComponent, NameClass, ToDoListItemClass } from "./components/Props"
import user from './user.json'
import './styles.css'
import img from './img.jpg'

function App() {
  return (
    <div>
      {JSON.stringify(user)}
      <img src={img}></img>
    </div>
  )
}

export default App