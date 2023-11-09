import React from 'react'
import image from "../Images/image.jpg"
import health from "../Images/health.jpg"
import hhh from "../Images/hhh.jpg"
import  sh from "../Images/sh.jpg"


function Home() {
  return (
    
    <div>
    <h1 className="home-head" >GREEN HEALTH ARTICLES APP</h1>
    <p className="home-par" >Welcome to our health articles app. 
           Here you can get information about health. <br></br>
           They are written by very competitive authors and are very interesting.
           Enjoy reading the </p>
    <div className="home-div" >
      
      <div className= "home">
      
      <div className='image'>
      <img src={image} alt="alternate-text"/>
      <img src={hhh} alt="alternate-text"/>
      <img src={health} alt="alternate-text"/>
      <img src={sh} alt="alternate-text"/>
      
      </div>
        

           </div>
      </div>
      <div>
      
      </div>
    </div>
  )
}
export default Home 