import { BrowserRouter } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import { useState } from 'react'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
