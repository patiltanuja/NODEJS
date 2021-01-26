import { useState } from "react";
import web from "../src/image/buter.jpg";
import { faGithub } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import {FcComments} from "react-icons/fc";
function Like() {
    
    const [likes, setLike] = useState(0);
  
    const likeHere = () => {
        setLike(likes + 1);
        <FcLike />
    }
    const dislikeHere = () => {
        setLike(likes - 1);
        <FcLike />
    }
    /*comment*/
    const[comment,setComment]= useState([])
    const [oneC,setC]=useState("");
    const proC=(e)=>setC(e.target.value);
    const addC=()=>{
        setComment([oneC,...comment]);
    }


    return (
        <>
            <div className="row">
            <img src={web} style={{ height: "300px", width: "250px" }} onClick={likeHere} />
            <h3>{likes}</h3>
            <FcLike onDoubleClick={dislikeHere} size="2em" color="cornflowerblue" />
           <input style={{height:"40px"}} type="text" value={oneC}  onChange={proC} />
           <FcComments  onClick={addC}/>
           <span style={{fontSize:"0.8rem"}}> View all {comment.length} comments</span><br/>
           {comment.map((item,index)=>{
           return  <div style={{fontWeight:"bold",fontSize:"0.8rem"}} key={index}>{item}</div>
           })}
            </div>
            </>
    );
}
export default Like;