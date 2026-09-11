import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Functionalities from './Components/Functionalities/Functionalities'
import Navbar from './Components/Navbar/Navbar'
import type { TechPromiseTypes } from './type'


const TechnologiesPromise = async():Promise<TechPromiseTypes[]> => {
    const res = await fetch('/data.json')
    const data = await res.json()
    return data
}

function App() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Suspense fallback={<div>Loading....</div>} >
          <Functionalities TechnologiesPromise={TechnologiesPromise()} />
        </Suspense>
        <Footer />
    </div>
  )
}

export default App
