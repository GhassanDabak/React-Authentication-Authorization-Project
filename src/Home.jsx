import React from 'react'
import './Home.style.css'
import Admin from './admin'
import User from './user'

class Home extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { firstName: "", password: "" ,isAdmin:false, isSubmitted:false}
    }
    signIn = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    submit = (e) => {
        e.preventDefault()
        for (let key in localStorage) {
            e.preventDefault()

            if (key === this.state.firstName) {
                const userData = JSON.parse(localStorage.getItem(key))
                if (userData.password === this.state.password) {
                    if (userData.role === "user") {
                        this.setState({isAdmin:false})
                    }
                    if (userData.role === "admin") {
                        this.setState({isAdmin:true})
                        console.log("mahdi")
                    }
                    this.setState({isSubmitted:true})
                }
                else {
                    alert("wrong password!")
                }
            }
            else if (this.state.firstName === "") {
                return false;
            }
        }
    }

    render() {
        return (
            <div>
                <main className="main-cont">
                    <div className="container">
                        <div className="header">
                            <h2>Sign in</h2>
                        </div>
                        <form id="form" className="form" onSubmit={this.submit}>
                            <div className="form-control">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="firstName" value={this.state.firstName} onChange={this.signIn} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" value={this.state.password} onChange={this.signIn} />
                            </div>
                            <button type="submit" className="log-btn">Sign in</button>
                        </form>
                    </div>
                </main>
                    {this.state.isSubmitted?<div>{ this.state.isAdmin ?<Admin/> : <User/>}</div>: null}
            </div>
        )
    }
}
export default Home