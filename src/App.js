import React, {useState} from 'react';
import Axios from 'axios'
import './App.css';



function App() {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [LoginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
     
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <div className="App">
    <div className="Wrapper fadeInDown">
    <div id="formContent">
      <h2 className="active">Register</h2>

      <form>
        <input type="text" onChange={(e) => { setUsernameReg(e.target.value);}}
        className="fadeIn second"  placeholder="User Name"/>

        <input type="text" onChange={(e) => {setPasswordReg(e.target.value);}}
         className="fadeIn third"  placeholder="Password"/>
         
         <input type="submit" className="fadeIn fourth"  onClick={register} value="Register"/>
        
      </form>
    </div>
    </div> 

    <div className="Wrapper fadeInDown">
    <div id="formContent">
      <h2 className="active">Login</h2>
      <h1>{LoginStatus}</h1>
      <form>
        <input type="text"  onChange={(e) => { setUsername(e.target.value);}} 
         className="fadeIn second" placeholder="User Name"/>

        <input type="text"  onChange={(e) => { setPassword(e.target.value);}} 
         className="fadeIn third"  placeholder="Password"/>
        <input type="submit" className="fadeIn fourth" onClick={login} value="Log in"/>
        
      </form>
    </div>
    </div> 
    </div>
    
  );
  
}

export default App;
