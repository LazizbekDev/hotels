import React, {useState} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import {SliderData} from './data/sliderData'
import Hero from './components/Hero'
import Dropdown from './components/Dropdown'


function App() {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
