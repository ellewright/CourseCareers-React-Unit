import React from "react"
import JSXBasics from "./components/JSXBasics"
import CreatingComponents from "./components/CreatingComponents"
import Props, { RenderChildFunc, ToDoListItemComponent, NameClass, ToDoListItemClass } from "./components/Props"
import UseStateHook, { Counter } from "./components/BasicStatefulComponents/UseStateHook"
import StateInClassComponents, { CounterClass } from "./components/BasicStatefulComponents/StateInClassComponents"
import InputEventListeners from "./components/BasicStatefulComponents/InputEventListeners"
import ArrayStateProject from "./components/BasicStatefulComponents/ArrayStateProject"
import CounterWithNameProject, { CounterWithNameClass } from "./components/BasicStatefulComponents/CounterWithNameProject"
import VirtualDom from "./components/ComponentLifecycle/VirtualDom"
import ComponentLifecycle from "./components/ComponentLifecycle/ComponentLifecycle"
import UseEffectHook, { UseEffectExercise } from "./components/ComponentLifecycle/UseEffectHook"
import ClassComponentLifecycleMethods from "./components/ComponentLifecycle/ClassComponentLifecycleMethods"
import DataFetchFromAPI from "./components/ComponentLifecycle/DataFetchFromAPI"
import ConditionalRendering from "./components/AdvancedComponents/ConditionalRendering"
import RenderingLists from "./components/AdvancedComponents/RenderingLists"
import Fragments from "./components/AdvancedComponents/Fragments"
import UserListProject from "./components/AdvancedComponents/UserListProject"
import RenderRawHTML from "./components/AdvancedComponents/RenderRawHTML"
import HookRules from "./components/BasicHooks/HookRules"
import UseRefHook from "./components/BasicHooks/UseRefHook"
import RefsInClassComponents from "./components/BasicHooks/RefsInClassComponents"
import UseMemoHook from "./components/BasicHooks/UseMemoHook"
// import user from './user.json'
// import './styles.css'
// import img from './img.jpg'

function App() {
  return (
    <UseMemoHook />
  )
}

export default App