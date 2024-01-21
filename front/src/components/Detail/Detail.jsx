import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import "./detail.scss"

function Detail() {
  let id = useParams().id;
  const [detail ,setDetail] = useState({})
  axios.get("http://localhost:4000/" + id).then((res)=> setDetail(res.data))
  return (
    <div className='detail'>
      <div className="image">
        <img src={detail.image} alt="" />
      </div>
      <div className="info">
        <p>Name:{detail.name}</p>
        <p>Type:{detail.type}</p>
        <p>Price with discount:{ detail.price - ( detail.price *(detail.discount/100))}.00$</p>
        <p>Discount Percentage:{detail.discount}%</p>
        <p>Review point:{detail.review}</p>
      </div>
    </div>
  )
}

export default Detail