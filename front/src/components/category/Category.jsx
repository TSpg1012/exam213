import React from 'react'
import "./category.scss"
const arr = ["Owmen's","Winter cloth","Man's Cloth"]
function Category() {
  return (
    <div className='category'>
        <p>Shop by Category</p>
        <div className="photos">
            <div className='image' >
                <div className='first'>
                    <div>
                    <p>Owmen's</p>
                    <button>best new Deals</button>
                    </div>
                </div>
            </div>
            <div className='image' >
                <div className='second'>
                    <div>
                    <p>Winter Cloth</p>
                    <button>New collection</button>
                    </div>
                </div>
            </div>
            <div className='image' >
                <div className='third'>
                    <div>
                    <p>Men's CLoth</p>
                    <button>best new Deals</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category