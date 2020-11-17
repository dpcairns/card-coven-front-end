import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css';
import logo from './images/card-coven.png'




export default class Header extends Component {

    handleLogout = () => {
        localStorage.clear()
        this.history.push('./')
    }

    render() {
        return (
            <div className='header'>


                <div className="logo-div">
                    <img src={logo} alt='logo'></img>
                </div>
                {/*                                     */}
                <div className='search-bar'>
                    <input placeholder='Search' className="inputSearch"></input>
                </div>
                {/*                                     */}
                <div className='header-links'>
                    <span><Link to='/userDeck'>My Deck</Link></span>
                    <span><Link to='/list'>All Cards</Link></span>
                </div>
                {/*                                     */}
                <div className="logout">
                    <Link to="./"> <div> <p onClick={() => this.handleLogout}>logout</p> </div></Link>
                </div>
            </div>
        )
    }
}
