import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";
import { deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const TableStyle = styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
width:auto; 
background:gray;
& > th {
    color:#fff
}
`

const TBody = styled(TableRow)`
& > td{
    font-size:20px;
}
`


const AllUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        let response = await getUsers();
        setUsers(response.data)
        // console.log(response.data)
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
        getAllUser();
    }


    return (
        <>
            <TableStyle>
                <TableHead>
                    <THead>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Action</TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TBody key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>
                            </TBody>
                        ))
                    }
                </TableBody>
            </TableStyle>
        </>
    )
}

export default AllUsers;