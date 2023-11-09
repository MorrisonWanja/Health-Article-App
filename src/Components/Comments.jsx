import React,{useState, useEffect} from 'react'

function Comments() {
  const[comments,setComments]=useState("")
  const[submittedComments,setSubmittedComments]=useState([])
  const[errors,setErrors]=useState([])
useEffect (() =>{
  fetch('http://localhost:8000/comments')
  .then(res => res.json())
  .then(comment => console.log(comment))


},[])

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
    <form onSubmit={handleSubmit}>
      <input type="text"
       placeholder='leave a comment here...'
       value={comments} 
       onChange={handleChange} 
       /> <br></br>
      <button type="submit" className="butn" >submit</button>
    </form>
    {errors.length>0?errors.map((error,index)=>(
      <p key={index}>{error}</p>

    )):null
  }
    <br></br>
    <div>
  
    {submissions}
    </div>
    </div>
  );
}
export default Comments;