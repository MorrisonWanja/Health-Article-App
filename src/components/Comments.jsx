import React,{useState} from 'react'

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
    <form onSubmit={handleSubmit}>
      <textarea type="text"
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
    <h3>Comments</h3>
    {submissions}
    </div>
    </div>
  )
}
export default Comments