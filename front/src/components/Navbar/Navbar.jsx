import React from 'react'
import "./navbar.scss"
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import {useNavigate} from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
  return (
    <nav>
        <div className="estore">
            <p>Estore<span>.</span></p>
        </div>
        <div className="links">
            <ul>
                <li onClick={()=>{
                    navigate("/")
                }}>Home</li>
                <li onClick={()=>{
                    navigate("/Add")
                }}>Add</li>
                <li onClick={()=>{
                    navigate("/Basket")
                }}>Basket</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="datalinks">
            <div className="search">
             <input type="text" name="" id="" placeholder='Search'/>
             <IoIosSearch className='lupa'/>
            </div>
            <IoMdHeartEmpty className='wishlist'/>
            <FaCartShopping className='basket'/>
            <button>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar