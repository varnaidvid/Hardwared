import React, {Component} from "react"
import axios from "axios"
import { CSRFToken } from "../App"


export default class Login extends Component{
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
        axios.post("http://localhost:3000/api/user/token/obtain/", {
            username: this.state.username,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
        event.preventDefault()    
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