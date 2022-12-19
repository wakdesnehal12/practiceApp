import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { Component, ReactNode } from "react";

interface dataObj{
    error?: any,
}

class LoginForm extends Component<dataObj>{
    
    state = {
        name: "",
        phone: "",
        email: "",
        password: "",
        error: {}
    }

    handleSubmit = (e:any) => {
        const {name, phone, email, password} = this.state
        const newDatass = {name, phone, email, password}
        e.preventDefault()
        this.setState({error: this.validation(newDatass)})
        this.setState({name: ""})
        this.setState({phone: ""})
        this.setState({email: ""})
        this.setState({password: ""})
    }

    validation = (values:any) => {
        let newErr:any = {}

        if(!values.name){
            newErr.name = "Please Enter Name field"
        }else if(!isNaN(values.name)){
            newErr.name = "Only Characters are allowed"
        }

        if(!values.phone){
            newErr.phone = "Please Enter Phone field"
        }else if (isNaN(values.phone)){
            newErr.phone = "only numbers"
        }else if((values.phone.length != 10)){
            newErr.phone = "only 10 chareacters are allowed"
        }

        if(!values.email){
            newErr.email = "Please Enter Email field"
        }else if((values.email.charAt(values.email.length-4) != "." )&& (values.email.charAt(values.email.length-3 )!= "." )){
            newErr.email = "Please Enter valid Email format"
        }

        if(!values.password){
            newErr.password = "Please Enter password field"
        }else if((values.password.length < 4 )){
            newErr.password = "Please above 4"
        }else if((values.password.length > 10 )){
            newErr.password = "Please above 4"
        }

        return newErr;
    }
    render(): ReactNode {
        const {error}:any = this.state
        return(
            <>
                <h1>Login Form</h1>
                <Box>
                    <InputLabel>Name</InputLabel>
                    <TextField
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e:any) => {this.setState({name: e.target.value})}}
                    />
                    <Typography>{error.name}</Typography>

                    <InputLabel>Phone</InputLabel>
                    <TextField
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={(e:any) => {this.setState({phone: e.target.value})}}
                    />
                    <Typography>{error.phone}</Typography>

                    <InputLabel>Email</InputLabel>
                    <TextField
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(e:any) => {this.setState({email: e.target.value})}}
                    />
                    <Typography>{error.email}</Typography>

                    <InputLabel>Password</InputLabel>
                    <TextField
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={(e:any) => {this.setState({password: e.target.value})}}
                    />
                    <Typography>{error.password}</Typography>

                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Box>
            </>
        )
    }
}

export default LoginForm;