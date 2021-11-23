import React from 'react'
import './registration.style.css'

    class Registration extends React.Component {
        constructor(props){
            super(props);
            
            this.adminUser = {

                'userEmail': 'Mahdi@gmail.com',
                'password': '123456',
                "role": 'admin'
            }
            localStorage.setItem('mahdi', JSON.stringify(this.adminUser))
            this.state={
            userName:"",
            userEmail:"",
            password:"",
            role:"user"
            }
        }
        
        registerCheck = (e) => {
            const {name,value} = e.target;
            this.setState({[name]:value})
        }

        
    
        submit = (e) => {
            e.preventDefault()

            let myObj = {
                'userEmail': this.state.userEmail,
                'password': this.state.password,
                "role": this.state.role
            }
            for(let user in localStorage){
                
                e.preventDefault()

                if(user === this.state.userName)
                {
                    alert("user already registered")
                    e.preventDefault()
                    return false;
                }
                else if(this.state.userName ===""){
                    return false;
                }
            }
            localStorage.setItem(`${this.state.userName}`,JSON.stringify(myObj));
            alert("You have registered")
            e.preventDefault()
         }

        render(){
            return (
                <main className="main-cont">
                    <div className="container">
                        <div className="header">
                            <h2>Create Account</h2>
                        </div>
                        <form id="form" className="form">
                            <div className="form-control">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="userName" value={this.state.userName} onChange={this.registerCheck}/>
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div className="form-control">
                                <label htmlFor="username">Email</label>
                                <input type="text" id="email" name="userEmail" value={this.state.userEmail} onChange={this.registerCheck} />
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" value={this.state.password} onChange={this.registerCheck} />
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div className="form-control">
                                <label htmlFor="passwordcheck">Repeat Password</label>
                                <input type="password" id="password2" />
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <button className="sub-btn" onClick={this.submit}>Submit</button>
                        </form>
                    </div>
                </main>
            )
        }
    }


export default Registration