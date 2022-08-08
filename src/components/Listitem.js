import React from "react"

import Card from "./card"

function DoneImg(props){
if (props.done) { 
     return(<img alt="done" src="./assets/undone.png"></img>)
}else {
     return(<img alt="undone" src="./assets/done.png"></img>)
};
}

// function listDiff(props){
    
//     if (props.diff) { 
//          return(<img alt="" src=""></img>)
//     }else {
//          return(<img alt="" src=""></img>)
//     };
//     }






function ListItem(props){
   return( 
   
   
   <li> 
        
        <Card className={props.item.done?"done item": "item"}> 
        {props.item.text}
        <div className="buttons">
       

        {/* <button onClick={()=>{props.onList(props.item)}}> <ListItem diff={props.item.diff}></ListItem></button>  */}
        <button onClick={()=>{props.onDone(props.item)}}> <DoneImg done={props.item.done}></DoneImg> </button>
        <button onClick={()=>{props.onItemDeleted(props.item)}}  ><img className="a1" src="./assets/bin.png" alt="binIcon"></img></button>
       
        </div>
       </Card>
       
       </li>)}
     
    




export default ListItem;