import React,{useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

function Comments() {
  const[comments,setComments]=useState("")
  const[submittedComments,setSubmittedComments]=useState([])
  const[errors,setErrors]=useState([])
  
  function handleChange(event){
    setComments(event.target.value)

  }
  function handleSubmit(event){
    event.preventDefault() 
    if (comments.length>0){
      const formData={comments:comments}
      const dataArray=[...submittedComments,formData]
      setSubmittedComments(dataArray)
      setComments("")
      setErrors([])
    }else{
      alert("Kindly leave a comment......")
    }
  }
  const submissions=submittedComments.map((data,index)=>{
    return (
      <div key={index}>{data.comments}</div>
    )
  })
  return (
    <div className="comments">
    <h4>Comments </h4>
    <div className="form-comments-sections">
    <div className="form-section"> 
    <form onSubmit={handleSubmit}>
      <input type="text"
       placeholder='leave a comment here...'
       value={comments} 
       onChange={handleChange} 
       /> <br></br>
      <button type="submit" className="butn" >Submit</button>
    </form>
    </div>
    <div className="display-comments">
    <div>
  
    {submissions}
    </div>
    </div>
    </div>
    {errors.length>0?errors.map((error,index)=>(
      <p key={index}>{error}</p>

    )):null
  }
    
    </div>
  );
}
export default Comments;