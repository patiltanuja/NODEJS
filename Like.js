import { useState } from "react";
import web from "../src/image/buter.jpg";
import { faGithub } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import tan from "../src/image/ta.jpeg"
import sop from "../src/image/sop.jpeg"
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
    return (
        <>
            <nav className="navbar sticky-top navbar-light bg-dark" >
                <div className="container-md text-light" >Hello world</div>
            </nav>
            {/*<img src ={sau} style={{height:"500px", widht:"800px"}} onClick={likeHere} /> */}


            <div className="row">
            <img src={web} style={{ height: "300px", width: "250px" }} onClick={likeHere} />
            <h3>{likes}</h3>
            <FcLike onDoubleClick={dislikeHere} size="2em" color="cornflowerblue" />

            <img src={tan} style={{ height: "300px", width: "250px" }} onClick={likeHere} />
            <h3>{likes}</h3>
            <FcLike onDoubleClick={dislikeHere} size="2em" color="cornflowerblue" />
            <img src={sop} style={{ height: "300px", width: "250px" }} onClick={likeHere} />
            <h3>{likes}</h3>
            <FcLike onDoubleClick={dislikeHere} size="2em" color="cornflowerblue" />


            <nav className="navbar fixed-bottom navbar-light bg-dark" >
                <div className="container-md text-light" >Hello world</div>
            </nav>
            </div>
            </>
    );
}
export default Like;