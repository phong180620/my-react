import React ,{useState} from 'react';
import DisplayTodo from './DisplayTodo';
import AddTodo from './AddTodo';


const Home =()=>{

    const [todo,setTodo]=useState("");
    const[listTodo,setListTodo]=useState( [ 
        { id : 'todo1', name :'Whatching youtobe'} ,
        {id : 'todo2', name :'Using Facebook'},
        {id : 'todo3', name :'Read book'}

] )
const randomIntFromInterval=(min, max)=> { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  
 
    const handleClick=()=>{
        if(!todo){
            alert('moi nhap data');
            return
        }

        // if(todo===""){
        //     alert(' missing todo')
        //     return
        // }
        const rndInt = randomIntFromInterval(4, 999999999999)


        let todoItem ={
            id :`${rndInt}`, name:todo
        }
        console.log('..check:',todoItem)

        // let currentTodoList = listTodo;
        // currentTodoList.push(todoItem);
        // setListTodo(todoItem)

        setListTodo([...listTodo,todoItem]);
        setTodo("")
    
    }

    const handleDelete=(id)=>{
        let currentTodoList = [...listTodo]
        currentTodoList=currentTodoList.filter(item=> item.id !== id)
        setListTodo(currentTodoList)
    }

    
    return(
        <div>
          
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClick={handleClick}
            />
           
           <DisplayTodo
           listTodo={listTodo}
           deleteTodoInParent={handleDelete}
           />

              
           
        </div>
    )
}
export default Home;