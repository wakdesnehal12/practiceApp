import { Box, Button, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { dataProvider } from './Provider';

const User = () => {
    const {data, setData}:any = useContext(dataProvider)
    
    const [value, setValue] = useState<any>("")
    const [phone, setPhone] = useState<any>()
    const [email, setEmail] = useState<any>("")
    // search
    const [search, setSearch] = useState<any>("")
    
    const navigate = useNavigate()
    
    const loadData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            setData(result)
        })
    }

    useEffect(() => {
        data.length>0 ? setData(data) : loadData()
    },[])

    const handleDelete = (id:any) => {
        // console.log(id)
        const deleteData = data.filter((item:any) => {
            return id !== item.id
        })
        // console.log(deleteData)
        setData(deleteData)
        
    }
    const handleAddClick = () => {
        const newData = { 
            id: data.length + 1,
            username: value,
            phone: phone,
            email: email,
        }
        setData([...data, newData])
    }
    const handleEdit = (item:any) => {
        navigate(`/editUser/${item.id}/searchText=${search}`, {state:item})
    }

    // search
    const handleSearchChange = (e:any) => {
        setSearch(e.target.value);

        if(search.length > 0){
            data.filter((item:any) => {
                return data.username == search
                console.log(data.username.match(search))
            })
            
        }
    }

    // search
    const handleSearchClick = () => {
        navigate(`/editUser/searchText=${search}`)
    }
    return(
        <>
        <Container>
        <h2>Testinhyu</h2>
        <Box>
            <TextField 
                value={value}
                onChange={(e:any) => setValue(e.target.value)}
            />
            <TextField 
                value={phone}
                onChange={(e:any) => setPhone(e.target.value)}
            />
            <TextField 
                value={email}
                onChange={(e:any) => setEmail(e.target.value)}
            />
            <Button onClick={handleAddClick}>Add</Button>
        </Box>
        {/* search */}
        <Box>
            <TextField
                type="text"
                placeholder="Search here"
                onChange={handleSearchChange}
                value={search}
            />
            <Button onClick={handleSearchClick}>Search</Button>
        </Box>
        <Box>
            <TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item:any, index:any)=> {
                            return(
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Typography>{item.id}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{item.username}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{item.phone}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{item.email}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleEdit(item)}>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </TableBody>
        </Box>
        </Container>
        </>
    )
}

export default User;