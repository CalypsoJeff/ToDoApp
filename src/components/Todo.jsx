import { AppBar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const ToDO = () => {
var [input,setInput]=useState({itsname:'',qty:'',descrpn:''});
const[data,setData]=useState([]);

const inputHandler=(e)=>{
  const {name,value}=e.target;
  setInput((input)=>({...input,[name]:value}))
}
const addHandler=()=>{
  setData((data)=>[...data,input]);
  setInput('');
  // setData('');
}


  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h4' color={'yellow'}>To DO Application</Typography>
        </Toolbar>
      </AppBar>

      <Typography variant='h4'style={{paddingTop:'120px', fontFamily:'cursive'}}>Welcome to To DO App </Typography>
      <br /><br /><br />
      <TextField variant='outlined' placeholder='Name' name='itsname' value={input.itsname} onChange={inputHandler}></TextField>
      <br /><br /><br />
      <TextField variant='outlined' placeholder='Quantity'name='qty'value={input.qty} onChange={inputHandler}></TextField>
      <br /><br /><br />
      <TextField variant='outlined' placeholder='Description'name='descrpn' value={input.descrpn} onChange={inputHandler}></TextField>
      <br /><br /><br />
      <Button variant='contained' onClick={addHandler}>Submit</Button>
      <br /><br /><br />
      <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',}}>Name</TableCell>
                        <TableCell style={{color:'red'}}>Quantity</TableCell>
                        <TableCell style={{color:'red'}}>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((val,index)=>{
                        return(
                            <TableRow>
                              
                                 <TableCell>{val.itsname}</TableCell>
                                <TableCell>{val.qty}</TableCell>
                               <TableCell>{val.descrpn}</TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </TableContainer>



        
    </div>
  )
}

export default ToDO