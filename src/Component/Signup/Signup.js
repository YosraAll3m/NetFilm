import { useRecoilState } from "recoil";
import React from 'react';
import './Signup.css';
import 'bootstrap'
// import Img from './login.png';  
import {Button} from 'react-bootstrap'; 
const Signup = () => {
  return (
    <div className="login">
              <img src="login.svg" height={500} width={500} 
              style={{marginLeft:5,marginRight:60,marginTop:80 }} alt=""></img>
      <div className="lContainer">

        <div className="lItem">
         
          <div className="Card">
            <h2 style={{ color: "white",paddingLeft:40,fontFamily: 'roboto' }}>SignUp</h2>
            <div className="form-container">
            <form>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="button">
                <button
                style={{
                  margin:10,
                  marginLeft:90,
                  backgroundColor:'#B29324',
                  height: 35,
                  borderRadius:10,
                  width: 180,
                  borderColor: '#B29324',
                  borderWidth: 0.5
              }}
                 onClick={useRecoilState}>Sign Up</button>
                </div>
                <p className="forgot-password text-right">
                <h3 style={{ color: "white",paddingLeft:40,fontFamily: 'roboto' }}>   Already have an account ? <a href="/Signin">Sign In</a></h3>

                </p>
            </form>
        </div>
          </div>
        </div>
   
   
      </div>
     
    </div>
    );
};

export default Signup;