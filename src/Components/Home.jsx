import React from 'react'
import UpdaeArticle from './UpdateArticle'


function Home() {
  return (
    <div className="home-div" >
      <UpdaeArticle />
      <div className= "home">
      <h1 className="home-head" >HEALTH ARTICLES APP</h1>
        <p className="home-par" >Welcome to our health articles app. 
           Here you can get information about health. <br></br>
           They are written by very competitive authors and are very interesting.
           Enjoy reading the articles.</p>
           
      </div>
    </div>
  )
}
export default Home 