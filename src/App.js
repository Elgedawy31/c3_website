import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Copmponents/Home/Home';
import Navs from './Copmponents/Nav/Navs';
import { Fragment, useEffect } from 'react';
import Footer from './Copmponents/footer/Footer';
import { useState } from 'react';
import Contact from './Copmponents/contactUs/Contact';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Featured from './Copmponents/featured/Featured';
function App() {


  

  useEffect(() => {
    AOS.init({duration:2000})
  } , [] )

  const [scroll , setScroll] = useState('')


  window.onscroll =() => {


    if(window.scrollY >= 400){
      setScroll('scroll')
    }else{
      setScroll('')
    
      }

  }


  return (
    <div className="App">
      <>
        <Navs scroll={scroll} />
         <Home />
        <Featured />
         <Contact />
         <Footer />
      </>
      </div>
  );
}

export default App;
