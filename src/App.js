import React, {useState} from 'react';
import Axios from 'axios'
import './App.css';



function App() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
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
      <form>
        <input type="text" id="login" className="fadeIn second" name="login" placeholder="User Name"/>
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password"/>
        <input type="submit" className="fadeIn fourth" value="Log in"/>
        
      </form>
    </div>
    </div> 
    </div>
    
  );
  
}

export default App;
