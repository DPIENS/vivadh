import React, { useState, useEffect } from "react";
import classes from "./CardBody.css";

const CardBody = (props) => {

  // const linkName = readMore ? "Read Less <<" : "Read More >>";
  const [more,setMore] = useState("(more)")
  const [moretrue,setMoretrue] = useState(true)

  /// --->> write an async function to useState fetch from db !important
  ///const [initialPara, setInitialPara] = useState();
  


  const fullPara = () => {
    
    if(moretrue===0){
     
      if(props.mypara.length>250){
        
        return(props.mypara.slice(0,250)+"..")

      }
      else{
        return (props.mypara)
      }
        
    }

    
  }
    
  //  useEffect(
  //       //// write a async functon here!!!
  //  )


  const handlechange = (e) => {
      e.preventDefault()
       setMoretrue(!moretrue)
       if(moretrue){
         setMore("(less)")
       }
       else{
         setMore("(more)")
       }

   
  }
  return (
    <div className={classes.more}>
      {

        props.mypara.length>250?(<div>
                  <h6>{moretrue?props.mypara.slice(0,250)+"...":props.mypara+"..."}<a href="" onClick={(e)=>handlechange(e)} >{more}</a></h6>

        </div>):(
          <div>
            <h6>{props.mypara}</h6>
          </div>
        )


      }
      
    </div>
  );
};

export default CardBody;
