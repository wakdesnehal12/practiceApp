import { Box, TextField, Button } from '@mui/material'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import React, { useContext, useEffect, useState, } from 'react';
import { dataProvider } from './Provider';


export const EditUser = () => {
    const navigate = useNavigate()
    const { state }: any = useLocation()
    const editdata: any = state
    const [name, setName] = useState<any>(editdata.username)
    const [email, setEmail] = useState<any>(editdata.email)
    const [phone, setPhone] = useState<any>(editdata.phone)
    const { data, setData } = useContext(dataProvider)

    // const { id }: any = useParams()
    // console.log(id, "data")
    const handleUpdate = () => {
        setData(data.map((item: any) => {
            if (item.id == editdata.id) {
                item.username = name;
                item.phone = phone;
                item.email = email;
            } 
            return item          
        }))
        navigate(`/`)
    }
return (
    <Box>
        <h2>Edit Form</h2>
        <TextField
            type="text"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
        />
        <TextField
            type="text"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextField
            type="text"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
        />
        <Button onClick={handleUpdate}>Update</Button>
    </Box>
)
}
