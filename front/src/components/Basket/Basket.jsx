import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { decrease, increase, removeFromData } from '../../redux/Slicer/slicer';
import "./basket.scss"

function Basket() {
    const basket = useSelector((state) => state.counter.basket)
    const dispatch = useDispatch()

    let sum = 0 ;
    basket.map( elem => sum += elem.quantity*elem.price)
    console.log(sum)
  return (
    <div>
        <p>Basket</p>
        <p>Total:{sum}</p>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>type</TableCell>
            <TableCell>price</TableCell>
            <TableCell>increment</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>decrement</TableCell>
            <TableCell>delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell><button className='increment' onClick={()=>{dispatch(increase(row))}}>Increment</button></TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell><button className='decrement' onClick={()=>{dispatch(decrease(row))}}>Decrement</button></TableCell>
              <TableCell><button className="delBtn"onClick={()=>{dispatch(removeFromData(row))}}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Basket