import { useState } from "react";

function Redux() {
const [counter,setCounter] = useState(100)
const [title,setTitle] = useState("All the best For 25<sup>th</sup> jan exam")
    return (
        <div>
            <h1 className="bg-dark text-light d-flex justify-content-center align-items-center">Parent Component{counter}</h1>
            <ChildA counter={counter} />
          
        </div>
    );
}

function ChildA(props) {
    return (
        <>
            <div className="bg-danger">Saturday it is
            <h3>Child A {props.counter}</h3>
            <ChildB counter={props.counter}/>
           
            </div>
        </>
    )
}
function ChildB(props) {
    const [counter,setCounter]= useState(props.counter);
    return (
        <>
            <div className="bg-primary">Saturday it is
            <h3>Child B {props.counter}</h3>
            <ChildC counter={props.counter}/>
            </div>
       
            </>
    )
}

function ChildC(props) {
    
const [counter,setCounter] = useState(props.counter)
    return (
        <>
        
            <div className="bg-success">Saturday it is
            <h3>Child C {counter}{""} <button onClick={(e)=>setCounter(counter+300)}>update</button></h3>
            </div>
            </>
    )
}

export default Redux;