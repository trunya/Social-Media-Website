import React from 'react'
import "./register.css"

export default function Register(){
    return(
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginL'>
                    <h3 className='loginLogo'>WaterMelon🍉</h3>
                    <span className='loginDesc'>Connect with the seeds of society on WaterMelon.</span>
                    <span className='Page'>Sign Up Page</span>
                    <span className='Page1'>Fill in the Details and be a part of our community today!</span>
                </div> 
                <div className='loginR'>
                    <div className='loginBox'>
                        <input className='loginInp' placeholder='UserName'/>
                        <br></br>
                        <br></br>
                        <input className='loginInp' placeholder='Email ID'/>
                        <br></br>
                        <br></br>
                        <input className='loginInp' placeholder='Password'/>
                        <br></br>
                        <br></br>
                        <input className='loginInp' placeholder='Password Again'/>
                        <br></br>
                        <br></br>
                        <button className="loginb">SignUP</button>
                        <br></br>
                        <br></br>
                        <button className="loginReg">Login to your New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}