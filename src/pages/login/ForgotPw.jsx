import React from 'react'
import './forgotPw.css'

export default function ForgotPw(){
    return(
        <div className='forgot'>
            <div className='forgotWrapper'>
                    <div className='forgotL'>
                        <h3 className='forgotLogo'>WaterMelon🍉</h3>
                        <span className='Page'>Reset Password</span>
                    </div> 
                    <div className='forgotR'>
                            <div className='forgotBox'>
                                <input className='forgotInp' placeholder='UserName'/>
                                <br></br>
                                <br></br>
                                <input className='forgotInp' placeholder='Enter new Password'/>
                                <br></br>
                                <br></br>
                                <input className='forgotInp' placeholder='Enter new Password again'/>
                                <br></br>
                                <br></br>
                                <button className="forgotReg">Reset</button>                    
                            </div>
                    </div>
            </div>
        </div>
    )
}