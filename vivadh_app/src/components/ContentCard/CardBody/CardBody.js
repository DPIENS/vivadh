import React, { useState, useEffect } from "react";
import classes from "./CardBody.css";

const CardBody = () => {

  // const linkName = readMore ? "Read Less <<" : "Read More >>";
  const [para,setPara] = useState("")
  const [shortpara, setShortpara] = useState("")
  const [more,setMore] = useState("...more")
  const [moretrue,setMoretrue] = useState(0)
  const [initialPara, setInitialPara] = useState("");
  var color = "" 
  
  useEffect(() => {
    setInitialPara(`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`)
    setPara("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.");
    setShortpara(para.slice(0, 20));
    
  }, [])

  const handlechange = () => {
    if(moretrue === 0){
       color = more
      
       setMore(" " + para + " ...less");
       setMoretrue(1)

    }
    else{
      setMore("...(more)")
      setMoretrue(0)

    }
   
  }
  return (
    <div className={classes.more}>
      <h6 onClick={handlechange}>{` ${initialPara} ${more}`}</h6>
    </div>
  );
};

export default CardBody;
