import React, { Component, useContext } from "react"
import axios from "axios"
import { CSRFToken, MainContext } from "../App"

export default class Login extends Component{
    
    static contextType = MainContext

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {        
        event.preventDefault()

        axios.post("http://localhost:3000/api/user/login/", {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            console.log(response)

            this.context[setUser(response.data)]
            this.context[setIsAlert(true)]

            localStorage.setItem("user", JSON.stringify(response.data))
            localStorage.setItem("ALERT_TYPE", "success")
            localStorage.setItem("ALERT_TEXT", "Sikeres bejelentkezés!")

            axios.defaults.headers.common["Authorization"] = `Token ${response.data.token}`
        })
        .catch(function(error) {
            console.log(error)
        })
    }
     

    render() {
        return (
            <div>
                Login
                <form onSubmit={this.handleSubmit} method="POST">
                    <input type="hidden" name="csrfmiddlewaretoken" value={CSRFToken} />

                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}