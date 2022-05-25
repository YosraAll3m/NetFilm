import { useRecoilState } from "recoil";
import React, { useState } from "react";
import "bootstrap";
import "./Signin.css";
import { button } from "react-bootstrap";
import { content } from "../Atoms";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const [userName,setUserName]=useState('');
const [password,setPassword]=useState('');
  const [authenticated, setAuthenticated] = useRecoilState(content);
  const navigate = useNavigate();
  const onSignInClicked = () => {
    //setAuthenticated(true);
     
    axios.post(`https://fci-back-end.herokuapp.com/register`, {
      
        "firstName": "Unknown Type: string,",
        "lastName": "Unknown Type: string,",
        "image": "string",
        "userName": userName,
        "password": password,
      
    }).then(
      (response) => {
        setAuthenticated(true);
      navigate('/Movies');
        }
      
    )
    .catch(
      (erorr) => {
        console.log('Error')
        console.log('Wronmg username or password')
      }
    );
  };
  const onUsernameChanged =(event)=>{
   setUserName(event.target.value);
    
  };
  const onPasswordChanged =(event)=>{
    setPassword(event.target.value);
    
   
  };
  return (
   
    
   
 <div className="login">
              <img src="movie2.svg" height={500} width={500} 
              style={{marginLeft:5,marginRight:60 ,marginTop:20}} alt=""></img>
      <div className="lContainer">

        <div className="lItem">

          <div className="loginImage">

          </div>
          <div className="Card">

            <h2 style={{ color: "white",paddingLeft:40,fontFamily: 'roboto' }} >Sign In </h2>
            <div className="form-container">
              
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={onUsernameChanged}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={onPasswordChanged}
                  />
                </div>
                <div className="button">
                  <button   style={{
                    margin:30,
                    marginLeft:90,
                    backgroundColor:'#B29324',
                    height: 35,
                    borderRadius:10,
                    width: 180,
                    borderColor: '#B29324',
                    borderWidth: 0.5
                }} onClick={onSignInClicked}>Sign In</button>
                </div>

                <p className="forgot-password text-right">
                <h3 style={{ color: "white",paddingLeft:40,fontFamily: 'roboto' }}> Don't have an account ? <a href="/Signup">Sign Up</a></h3>
                </p>
            </div>
          </div>
        </div>
     
      </div>
     
    </div>
  );
};

export default Signin;
