import React from 'react'
import { useMediaQuery } from 'react-responsive'

import health from "../Images/health.jpg"
import hhh from "../Images/hhh.jpg"
import  sh from "../Images/sh.jpg"


function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    
    <div style={isMobile ? { width: '80%' } : {}}>
    <h1 className="home-head" >GREEN HEALTH ARTICLES APP</h1>
   
           
    <div className="home-div" style={isMobile ? { width: '80%' } : {}}>
      
      <div className= "home">
      
      <div className='image'>
      <img src={hhh} alt="alternate-text"/>
      
      <img src={health} alt="alternate-text"/>

      <img src={sh} alt="alternate-text"/>
      
      <div className='image-item'>
      
      </div>
     
      
      </div>
      
      <p className="home-par" >Welcome to our health articles app. 
      Here you can get information about health. <br></br>
      They are written by very competitive authors and are very interesting.
      Enjoy reading the </p>
        

           </div>
      </div>
      <div>
      
      </div>
    </div>
  )
}
export default Home 