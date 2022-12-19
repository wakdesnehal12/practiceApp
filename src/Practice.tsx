import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Practice = () => {
  const [data, setData] = useState<any>([])
  const [value, setValue] = useState<any>("")
  const [itemEditId, setEditItemId] = useState<any>(0)
  const [toggle, setToggle] = useState<any>(true)
  const loadData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((result) => {
      setData(result)
    })
  }

  useEffect(() => {
    loadData()
  },[])

  const handleClick = () => {
    const addArray = 
      {
        id: data.length + 1,
        name : value
      }
    
    // console.log(data.length + 1)
    if(value && !toggle){
      setData(data.map((editElem:any) => {
        if(editElem.id === itemEditId){
          return (
            {
              ...editElem,
              name: value
            }
          )
        }
        return editElem
      }))
      setToggle(true)
      setValue("")
      setEditItemId(0)
    }else{
      setValue("")
      setData([...data, addArray])
    }
    
  }

  const handleDeleteClick = (id:any) => {
    
    const deleteData = data.filter((item:any) => {
      return id != item.id
    })
    setData(deleteData)
  }

  const handleEditClick = (id:any) => {
    const editId = data.find((item:any) => {
      return id === item.id
    })
    console.log(editId, "editId")
    setEditItemId(id)
    setToggle(!toggle)
    setValue(editId.name)
  }
  console.log(data, "data")
  return(
    <>
      <h1>Data</h1>
      <Box className='dataBox'>
          <TextField
              type="text"
              value={value}
              onChange={(e:any) => {setValue(e.target.value)}}
          />
          {
            toggle ? <Button onClick={handleClick} className='dataBtnBox'>Add New Name</Button>
            : <Button onClick={handleClick} className='dataBtnBox'>Update Name</Button>
          }
          
      </Box>
      <Box>
      {
        data.map((item:any) => {
          return(
            <Box key={item.id} className="itemBox">
              <Typography variant='h6' className="itemName">{item.name}</Typography>
              <Box className='buttonBox'>
                <Button onClick={() => {handleDeleteClick(item.id)}} className="itemButton">Delete</Button>
                <Button onClick={() => {handleEditClick(item.id)}} className="itemButton">Edit</Button>
              </Box>
            </Box>
          )
        })
      }
      </Box>
      
    </>
  )
}

export default Practice