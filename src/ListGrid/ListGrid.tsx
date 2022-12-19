import { Box, Typography, TextField, Button } from "@mui/material";
import { Component } from "react";
import { style } from "./ListGrid.style";
import {withStyles} from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import SearchData from "./SearchData";

interface datapro{
    data?: [],
    classes: any,
    toggle?: boolean,
    searchValue?: string
}
class ListGrid extends Component<datapro>{
    state = {
        data: [],
        toggle: true,
        searchValue: ""
    }

    loadData = async() => {
        await fetch ('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({data:result})
        })
    }
    componentDidMount = () => {
        this.loadData()
    }
    handleToggleClick = () => {
        this.setState({toggle:!this.state.toggle})
    }
    handleSearch = (e:any) => {
       this.setState({searchValue: e.target.value})
       const updateDta = this.state.data.filter((item:any) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase())
       })

       this.setState({data:updateDta})
    }
    render() {
        const {classes} = this.props
        return(
            <>
                <Box className={classes.searchBox}>
                    <TextField
                        type="text"
                        placeholder="search"
                        className={classes.searchInputBox}
                        value={this.state.searchValue}
                        onChange={this.handleSearch}
                    />
                    <SearchIcon className={classes.searchIconBox}/>
                </Box>
                {/* <SearchData inputData={this.props.searchValue}/> */}
                <Button onClick={this.handleToggleClick}>Toggle</Button>
                <Box >
                    {   this.state.data.length > 0 &&
                        this.state.data.map((item:any) => {
                            return(
                                <Box className={this.state.toggle ? classes.listBox : classes.listgridBox}>
                                    <Typography>{item.name}</Typography>
                                    <Typography>{item.username}</Typography>
                                    <Typography>{item.phone}</Typography>
                                    <Typography>{item.email}</Typography>
                                    <Typography>{item.catchPhrase}</Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
            </>
        )
    }
}

export default withStyles(style)(ListGrid);