const DisplayTodo =(props)=>
{
    const deleteTodoFromChild=(id)=>{
        props.deleteTodoInParent(id)
    }

    // const handleDelete=props.handleDelete;

    const listTodo= props.listTodo;
    return(
        <div>
        <div> ---List Todo :----</div>
         {listTodo.map((item,index)=>{
                   return(
                       <div key={item.id} >{index+1}-{item.name}-<span onClick={()=>deleteTodoFromChild(item.id)}>X</span></div>
                   )
               })}
    </div>
    )
    
}
export default DisplayTodo;