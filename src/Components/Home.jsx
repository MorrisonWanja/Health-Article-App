import React from 'react'
import { useMediaQuery } from 'react-responsive'

import health from "../Images/health.jpg"
import hhh from "../Images/hhh.jpg"
import  sh from "../Images/sh.jpg"


function Home() {
  

  return (
    
    <div >
    <h1 className="home-head" >GREEN HEALTH ARTICLES APP</h1>
   
           
    <div className="home-div">
      
      <div className= "home">
      
      <div className='home-image'>
      <div>
      <img src={hhh} alt="alternate-text"/>
      <caption className="home-par" >Welcome to our health articles app. 
      Here you can get information about health. <br></br>
      They are written by very competitive authors and are very interesting.
      Enjoy reading the </caption>
      </div>
      <div>
      <img src={health} alt="alternate-text"/>
      <caption className="home-par" >Welcome to our health articles app. 
      Here you can get information about health. <br></br>
      They are written by very competitive authors and are very interesting.
      Enjoy reading the </caption>
      </div>
      <div>
      <img src={sh} alt="alternate-text"/>
      <caption className="home-par" >Welcome to our health articles app. 
      Here you can get information about health. <br></br>
      They are written by very competitive authors and are very interesting.
      Enjoy reading the </caption>
      </div>  
      
      </div>
      </div>
      </div>
      <div>
      
      </div>
    </div>
  )
}
export default Home 