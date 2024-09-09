import React from 'react'
import Register from '../register/Register'
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login(){
    /*const RegisterLink = React.forwardRef(({ navigate, ...props }, ref) => {
        return (
          <a ref={ref} {...props} onClick={handleClick}></a>
        )
      })
      <Link to="/" component={FancyLink} />
       <Link to="Register">About</Link>
            <Link to = <Register/> >About</Link>   



            
    function myFunction() {
            document.getElementById("Incorrect").style.visibility = "visible";
    }

   function my() {
        document.getElementById("Incorrect").style.display = "none";
    }onclick="my()"
    
    <span className='Incorrect'>INCORRECT USERNAME/PASSWORD</span>


    function myFunction() {
         document.getElementById("loginb").style.display = "none";
    }*/
    return(
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginL'>
                    <h3 className='loginLogo'>WaterMelon🍉</h3>
                    <span className='loginDesc'>Connect with the seeds of society on WaterMelon.</span>
                    <span className='Page'>Login Page</span>
                </div> 
                <div className='loginR'>
                    <div className='loginBox'>
                        <input className='loginInp' placeholder='UserName'/>
                        <br></br>
                        <br></br>
                        <input className='loginInp' placeholder='Password'/>
                        <br></br>
                        <br></br>
                        <button id='loginb'>Login</button>
                        <br></br>
                        <br></br>
                        <span className='loginForgot'>Forgot Password?</span>
                        <br></br>
                        <span className='Incorrect'>INCORRECT USERNAME/PASSWORD</span>                        
                        <br></br>                   
                        <br></br>
                        <button className="loginReg">Create a New Account</button>  
                    </div>
                </div>
            </div>
                
        </div>
    )
}


  