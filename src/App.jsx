import React from "react"
import JSXBasics from "./components/JSXBasics"
import CreatingComponents from "./components/CreatingComponents"
import Props, { RenderChildFunc, ToDoListItemComponent, NameClass, ToDoListItemClass } from "./components/Props"
import UseStateHook, { Counter } from "./components/BasicStatefulComponents/UseStateHook"
import StateInClassComponents, { CounterClass } from "./components/BasicStatefulComponents/StateInClassComponents"
import InputEventListeners from "./components/BasicStatefulComponents/InputEventListeners"
import ArrayStateProject from "./components/BasicStatefulComponents/ArrayStateProject"
import CounterWithNameProject, { CounterWithNameClass } from "./components/BasicStatefulComponents/CounterWithNameProject"
// import user from './user.json'
// import './styles.css'
// import img from './img.jpg'

function App() {
  return (
    <CounterWithNameProject />
  )
}

export default App