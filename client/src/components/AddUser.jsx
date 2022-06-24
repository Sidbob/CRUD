import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
width:40%;
margin: 5% auto 0 auto;
& > div{
    margin-top:20px;
}

`
const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}


const AddUser = () => {

    const [user, setuser] = useState(defaultValue)

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async() => {
        await addUser(user); 
        navigate('/All')
    }
    return (
        <>
            <Container>
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" />
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default AddUser;