import React from "react";
import { Link } from "react-router-dom";


export function RegisterForm () {
   
    return (
        <div className="login">
        <form>
            <div className="form-inner">
                <h2>REGISTER</h2>
            
                <div className="form-group">
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Last Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="text" name="confirm-password" id="confirm-password" />
                </div>
                <input type="submit" value="REGISTER" />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
           
        </form>
        </div>
    )
}