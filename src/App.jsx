import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Loading from './components/Loading'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Calendar from './pages/Calendar'
import Contact from './pages/Contact'
import AllProjects from './pages/AllProjects'
import Testimonials from './pages/Testimonials'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App(){
  const [waitForRender, setWaitForRender] = React.useState(true)
  const [lan, setLan] = React.useState(false)

  function changeLan(){
    setLan(prev => !prev)
}

  React.useEffect(() => {
    setTimeout(() => {
      setWaitForRender(false)
    }, 3000);
  }, [])

   return (
       <div>
          {waitForRender && <Loading />}
          {!waitForRender && <Router>
            <NavBar lan={lan} changeLan={() => changeLan()}/>
            <Routes>
              <Route path='/' element={<Home lan={lan}/>}/>
              <Route path="/about-me" element={<AboutMe/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path="/contact" element={<Contact lan={lan}/>} />
              <Route path="/all-projects" element={<AllProjects/>} />
              <Route path="/testimonials" element={<Testimonials/>} />
            </Routes>
            <Footer lan={lan}/>
          </Router>}
       </div>
   )
}