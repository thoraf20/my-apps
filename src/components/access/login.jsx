import React, {Component} from "react"


export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container">
                <div className="container">
                    <div className="header"> Quiz </div>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" placeholder="password" />
                            </div>
                        </div>
                    </div>
                    <div className="footer"> 
                        <button type="button" className="btn">Login</button>
                    </div>
                </div>
                    <p>Don't have an account? <a href="/Register">Signup</a></p>
            
            </div>
        )
    }
}