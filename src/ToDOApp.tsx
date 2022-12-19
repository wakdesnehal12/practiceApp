import { TextField, Button, Box, Typography } from "@mui/material";
import { Component } from "react";

interface dataPro{
    listValue?: string
    dataItem?: []
    editItem?: null
    toggle?: boolean
}
class ToDOApp extends Component<dataPro>{
    state = {
        listValue: "",
        dataItem: [],
        editItem: null,
        toggle: true
    }
    handleClickData = () => {
        // console.log(this.state.dataItem.length + 1)
        const newData = {
            id: this.state.dataItem.length + 1,
            name: this.state.listValue
        }

        if(this.state.listValue && !this.state.toggle){
            this.setState({dataItem: this.state.dataItem.map((editElem:any) => {
                // console.log(editElem, "btn-teal")
                if(editElem.id === this.state.editItem){
                    return{...editElem, name: this.state.listValue}
                }
                return editElem
            })})

            this.setState({listValue: ""})
            this.setState({editItem: null})
            this.setState({toggle: this.state.toggle})
        }else{
            this.setState({dataItem: [...this.state.dataItem, newData]})
            this.setState({listValue: ""})
            this.setState({dataItems: []})
        }
        
    }
    handleDeleteClick = (id:any) => {
        // const dataDelete = this.state.dataItem.filter((item, ind) => {
        //     return index !== ind
        // })
        const dataDelete = this.state.dataItem.filter((item:any) => {
            return id !== item.id
        })

        this.setState({dataItem: dataDelete})
    }
    handleClickAllData = () => {
        console.log(this.state.dataItem)
        this.setState({dataItem: []})
    }

    handleEditClick = (id:any) => {
        
        const editData:any = this.state.dataItem.find((data:any) => {
            return data.id === id
        })
        console.log(editData)
            this.setState({listValue: editData.name})
            this.setState({editItem: id})
            this.setState({toggle: !this.state.toggle})
    }
    render(){
        const {listValue, dataItem} = this.state
        return(
            <>
                <h1>ToDo App</h1>
                <TextField 
                    type="text"
                    value={listValue}
                    onChange={(e:any) => {this.setState({listValue:e.target.value})}}
                />
                {
                    this.state.toggle ? <Button onClick={this.handleClickData}>Add Item</Button> : 
                    <Button onClick={this.handleClickData}>update</Button>
                }
                
                
                <Button value={dataItem} onClick={this.handleClickAllData}>Remove All</Button>
                <Box>
                    {
                        dataItem.map((item:any) => {
                            return(
                                <Box key={item.id}>
                                    <Typography>{item.name}</Typography>
                                    <Button onClick={() => {this.handleDeleteClick(item.id)}}>Delete</Button>
                                    <Button onClick={() => {this.handleEditClick(item.id)}}>Edit</Button>
                                </Box>
                            )
                        })
                    }
                </Box>
            </>
        )
    }
}

export default ToDOApp;