import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { editUser,getUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const Container = styled(FormGroup)`
width:40%;
margin: 5% auto 0 auto;
& > div{
    margin-top:20px;
}

`
// const defaultValue = {
//     name: "",
//     username: "",
//     email: "",
//     phone: ""
// }


const EditUser = () => {

    const [user, setusers] = useState("")

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(id)
        console.log(response.data[0])
        setusers(response.data[0])
    }

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setusers({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all')
    }
    return (
        <>
            <Container>
                <Typography variant="h4">Edit User</Typography>
                <FormControl>
                    {/* <InputLabel>Name</InputLabel> */}
                    <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
                </FormControl>
                <FormControl>
                    {/* <InputLabel>UserName</InputLabel> */}
                    <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
                </FormControl>
                <FormControl>
                    {/* <InputLabel>Email</InputLabel> */}
                    <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
                </FormControl>
                <FormControl>
                    {/* <InputLabel>Phone</InputLabel> */}
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default EditUser;