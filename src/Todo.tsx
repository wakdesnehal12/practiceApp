import { Box, Button, TextField, Typography } from "@mui/material";
import { Component, ReactNode } from "react";

class Todo extends Component{
    state = {
        todoItem: "",
        todoList: [],
        editItem: "",
        toggle: true
    }

    handleAddClick = () => {
        const newData = {
            id: this.state.todoList.length + 1,
            name: this.state.todoItem
        }

        if(this.state.todoItem && !this.state.toggle){
            this.setState({todoList: this.state.todoList.map((edItem:any) => {
                if(edItem.id == this.state.editItem){
                    return {
                        ...edItem,
                        name: this.state.todoItem
                    }
                }
                return edItem
            })})
            this.setState({todoItem: ""})
            this.setState({editItem:""})
            this.setState({toggle:this.state.toggle})
        }
        else{
            this.setState({todoList: [...this.state.todoList, newData]})
            this.setState({todoItem: ""})
        }
        
        // console.log(this.state.todoItem)
    }

    handleDelete = (id:any) => {
        console.log(id)
        const deleteData = this.state.todoList.filter((item:any) => {
            return id !== item.id
        })
        console.log(deleteData)
        this.setState({todoList: deleteData})
    }

    handleEdit = (id:any) => {
        const editData:any = this.state.todoList.find((item:any) => {
            return id == item.id
        })
        console.log(editData)
        this.setState({editItem:id})
        this.setState({todoItem:editData.name})
        this.setState({toggle: !this.state.toggle})
    }

    render(): ReactNode {
        return(
            <>
                <h1>ToDo App</h1>
                <Box>
                    <TextField
                        type="text"
                        value={this.state.todoItem}
                        onChange={(e:any) => {this.setState({todoItem: e.target.value})}}
                    />
                    {
                        this.state.toggle ? <Button onClick={this.handleAddClick}>Add</Button> : 
                        <Button onClick={this.handleAddClick}>update</Button>
                    }
                    
                    

                    <Box>
                        {
                            this.state.todoList.map((item:any) => {
                                return(
                                    <Box>
                                        <Typography>{item.name}</Typography>
                                        <Button onClick={() => {this.handleDelete(item.id)}}>Delete</Button>
                                        <Button onClick={() => {this.handleEdit(item.id)}}>Edit</Button>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </>
        )
    }
}

export default Todo;