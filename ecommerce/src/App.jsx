import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a YSC ARTE!!" />

    </>
  )
}

export default App