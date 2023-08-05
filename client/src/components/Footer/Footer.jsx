import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accesories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sit eligendi. Ab corrupti fuga delectus voluptatibus incidunt maiores repellendus possimus provident magnam dolores! Voluptatibus blanditiis mollitia temporibus dolore, accusamus omnis.
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam neque omnis nobis nulla temporibus dolor pariatur recusandae adipisci eaque, incidunt cupiditate quidem ad quod quos, numquam excepturi placeat fuga? Sed.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className='logo'>E-Store</span>
                <span className='copyright'>
                    &copy; Copyright 2023. All Rights Reserved
                </span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer