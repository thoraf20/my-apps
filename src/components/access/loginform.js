import React from "react";
import { Link } from "react-router-dom";

export function LoginForm () {
   
    return (
        <div className="login">
        <form>
            <div className="form-inner">
                <h2>Login</h2>
            
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                </div>
                <input type="submit" value="LOGIN" />
                <p>Dont have an account yet? <Link to="/register">Register</Link></p>
            </div>
        </form>
        
        </div>
    )
}

