
const AddTodo = (props)=>{

    const {todo,handleClick,setTodo}=props

    
    return(
    <div>
        <label> Todo's name</label>
        <div>
           <input value={todo} type="text" onChange={(event)=>setTodo(event.target.value)}></input>
           <button type='button' onClick={()=>handleClick()}>Submmit</button>
           <br></br>
           </div>
    </div>
    )
}

export default AddTodo;