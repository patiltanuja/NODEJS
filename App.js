
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Like from './Like';
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Router>
  
      <Link  className="col-9 container-fluid d-flex justify-content-end text-light bg-dark align-items-center" to="/Link">Like </Link>
      <Link className="col-9 container-fluid d-flex justify-content-end  text-light bg-dark align-items-center" to="/">Navbar</Link>
        
      <Route exact path="/Link" component={Like} />
        <Route exact path="/" component={Navbar} />
        
        </Router>
      
    </div>
  );
}
export default App;





















// import "./App.css";
// import ReduxDemo from './ReduxDemo';
// import Redux from './Redux';
// import Redux1 from './Redux1';
// function App() {
//   return (
//     <div>
//      <Redux/> 
//      <Redux1/>

//     </div>
//   );
// }

// export default App;




//navbar making
// import "./App.css";
// import { useState } from "react";
// import Sat from './Sat';
// function App() {
//   return (
//     <div>
//       <Sat/>
//     </div>
//   );
// }
// export default App;

//insta image




// import "./App.css";
// import { useState } from "react";
// import Like from './Like';

// function App() {
//   return (
//     <div>

//     <Like/>
//   </div>
//   );
// }
// export default App;















// /**
//  * <Post /> React also has "state"
//  *
//  * <div></div>
//  * <input></input> :: All the form element  has thier own "state".
//  */
// function Post() {
//   const [title] = useState("Working with Form Input Element");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // When the state of Input Element is udpated. At the same
//   // time we are updating, the state of React State Variabel.
//   // To keep the value in SYNC.
//   const updateInput = (e) => setUsername(e.target.value);
//   const updateInputPassword = (e) => setPassword(e.target.value);

//   const processLogin = () => {
//     console.log(username, password);
//     // we get the user input
//     // we have to validte this user input
//     // who will validate this. TIER2/LAYER2/BACKEND
//     // we have to make ajax call to the BACKEND SERVER.
//   };

//   return (
//     <div>
//       <h1>{title}</h1>

//       <input
//         type="text"
//         value={username}
//         onChange={updateInput}
//         name="username"
//         placeholder="Username"
//       />

//       <br />
//       <input
//         type="password"
//         value={password}
//         onChange={updateInputPassword}
//         name="username"
//         placeholder="Password"
//       />

//       <br />
//       <button onClick={processLogin}>Login</button>

//       <br></br>

//       <div>Username :: {username}</div>

//       <div>Username :: {username}</div>

//       <div>Username :: {username}</div>
//     </div>
//   );
// }

// export default App;
