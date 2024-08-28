import React from "react"
import JSXBasics from "./components/JSXBasics"
import CreatingComponents from "./components/CreatingComponents"
import Props, { RenderChildFunc, ToDoListItemComponent, NameClass, ToDoListItemClass } from "./components/Props"

function App() {
  return (
    <div>
      <ToDoListItemClass isComplete>
        Do dishes
      </ToDoListItemClass>
    </div>
  )
}

export default App