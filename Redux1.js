import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
function Redux1() {
    const rdState= useSelector(state=>state);

const counter = useSelector((state) => state.counter);


    return (
        <div>
            <h1 className="bg-dark text-light d-flex justify-content-center align-items-center">Parent Component{counter}</h1>
            <ChildA  />
          
        </div>
    );
}

function ChildA(props) {
    const counter = useSelector((state) => state.counter);
  
    return (
        <>
            <div className="bg-danger">Saturday it is
            <h3>Child A {counter}</h3>
            <ChildB />
           
            </div>
        </>
    )
}
function ChildB(props) {
    const counter = useSelector((state) => state.counter);
 
    return (
        <>
            <div className="bg-primary">Saturday it is
            <h3>Child B{counter}</h3>
            <ChildC  />
            </div>
       
            </>
    )
}

function ChildC(props) {
    const rdState= useSelector(state=>state);
const dispatch  = useDispatch()
const counter = useSelector((state) => state.counter);

    return (
        <>
        
            <div className="bg-success">Saturday it is
            <h3>Child C {counter}
            <button onClick={e=>dispatch({type: "INC"})}>Increament</button>
            <button onClick={e=> dispatch({type:"DEC"})}> Descreament</button>
            </h3>
            </div>
            </>
    )
}
export default Redux1;