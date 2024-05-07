import React from 'react'
import './header.scss'
import logo from "../../../assets/nav-loga.svg"
import { IoSearchOutline, IoPersonSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";



const Header = () => {
  return (
    <nav className='nav'>
        <div className="container row">
            <div className="nav__left">
                <img src={logo} alt="" />
            </div>
            <div className="nav__middle">
                <ul className='nav__middle__lists'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Recent Products</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""> About</a></li>
                </ul>
            </div>
            <div className="nav__right">
            <IoSearchOutline className='nav__icons'/>
            <IoPersonSharp className='nav__icons'/>
            <PiShoppingCartSimpleFill className='nav__icons'/>
            <RxHamburgerMenu className='nav__icons'/>

            </div>
        </div>
    </nav>
  )
}

export default Header