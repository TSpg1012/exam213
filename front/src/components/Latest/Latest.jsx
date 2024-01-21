import React, { useState } from 'react'
import "./latest.scss"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../../redux/Slicer/slicer'
import { IoIosStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { addToBasket } from '../../redux/Slicer/slicer'

function Latest() {
    const [type ,setType] = useState("all")
    const data = useSelector((state) => state.counter.data)
    const basket = useSelector((state) => state.counter.basket)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(data)

    useEffect(()=>{
        dispatch(fetchData())
    },[])

   
  return (
    <div className='latest'>
        <div className="top">
            <p>Latest Products</p>
            <ul>
                <li onClick={()=>{setType("all")}}>All</li>
                <li onClick={()=>{setType("new")}}>New</li>
                <li onClick={()=>{setType("featured")}}>Featured</li>
                <li onClick={()=>{setType("offer")}}>Offer</li>
            </ul>
        </div>

        <div className="cards">
        {data && data.map(elem => <>
            <div className="card">
            <img src={elem.image} alt="" />
            <p> <IoIosStar style={{color:"orange"}}/> { elem.review}</p>
            <p>{elem.name}</p>
            <div className="discounted">
                <p>{ elem.price - (elem.price * (elem.discount / 100))}.00$</p>
                <p>{elem.price}.00$</p>
            </div>
        <div className="buttons">
            <button onClick={()=>{dispatch(addToBasket(elem))}}>Add to Basket</button>
            <button >Add to Wishlist</button>
        </div>
        <button id='view' onClick={()=>{navigate("/"+elem.id)}}>View</button>
        </div>
        </>
        )}  
        </div>
    </div>
  )
}

export default Latest