import { useState } from "react";
const AddNewProduct =()=>{

    const [name,setName]=useState("")
    const [price,setPrice]=useState(0)
    const[size,setSize]=useState(0)
    const[color,setColor]=useState("")

    const[isShowDetail,setIsShowDetail]=useState(false)

    const handleClick=()=>{
        // let object ={
        //     name,price,size,color
        // }
        let object = {
            name : name,
            price: price,
            size:size,
            color:color
        }

        // localStorage.setItem("productList",JSON.stringify(object));

        let productList = localStorage.getItem("productList")

        console.log(">>> check product List", JSON.parse(productList))
   
        if(productList){
            let arr = JSON.parse(productList);
            console.log("check arr:",arr)
            arr.push((object))
            
            localStorage.setItem("productList",JSON.stringify(arr))
            
        }
        else{
            localStorage.setItem("productList",JSON.stringify([object]))
        }
 
        setName("");
        setPrice(0);
        setSize(0);
        setColor("");
    }
    
    const handHideShow=(status)=>{
       
        setIsShowDetail(status)
        // setIsShowDetail(!isShowDetail)
    }

   

    

    

    return(
        <>
         {
                isShowDetail === true &&
        <fieldset>
           
            
            <legend>Add A New Product</legend>
            <div className="input-product">
                <label>Name :</label>
                <input value={name} type='text' onChange={(event)=>setName(event.target.value)} ></input>
            </div>
            <div className="input-product">
                <label>Price :</label>
                <input value={price} type='text' onChange={(event)=>setPrice(event.target.value)} ></input>
            </div>
            <div className="input-product">
                <label>Size :</label>
                <input value={size} type='text' onChange={(event)=>setSize(event.target.value)} ></input>
            </div>
            <div className="input-product">
                <label>Color :</label>
                <input value={color} type='text' onChange={(event)=>setColor(event.target.value)} ></input>
            </div>
            <div>
                <button onClick={()=>handleClick()}>+Add New</button>
            </div>
        </fieldset>
        }
            
        

        
        <div>
            {isShowDetail===true ?
             <div onClick={()=>handHideShow(false)}>Hide this from</div>
            :    
            <div onClick={()=>handHideShow(true)}>Show the from</div>
        }
        </div>
        <div>
            Produc List :
            <div> {localStorage.getItem('productList')}</div>
        </div>
        
    </>
    )
}
export default AddNewProduct;