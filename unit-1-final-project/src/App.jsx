import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CollectionPage from './components/CollectionPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import mockPlantData from './mockPlantData'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [plants, setPlants] = useState(mockPlantData)

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const deletePlant = (id) => {
    setPlants(plants.filter(plant => plant.id !== id))
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage plants={plants} addPlant={addPlant} deletePlant={deletePlant} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
