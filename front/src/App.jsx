import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Category from './components/category/Category'
import Latest from './components/Latest/Latest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Category/>
      <Latest />
    </>
  )
}

export default App
