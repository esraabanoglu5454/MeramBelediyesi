import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import Services from './components/pages/Services'
import Footer from './components/Footer'
import Iletisim from './components/pages/Iletisim'
import Egitim from './components/pages/Egitim'
import Kurum from './components/pages/Kurum'
import Login from './components/pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path='/services' exact element={ <Services />} />
          <Route path='/products' exact element={ <Products />} />
          <Route path='/kayit' element={ <SignUp />} />
          <Route path='/iletisim' element={ <Iletisim />} />
          <Route path='/egitim' element={ <Egitim />} />
          <Route path='/kurum' element={ <Kurum />}></Route>
          <Route path='/kayit' element={ <SignUp />}></Route>
          <Route path='/login' element={ <Login />}/>
      </Routes>
      <Footer />
      </Router>
      
    </>
  )
}

export default App