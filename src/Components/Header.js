import { Avatar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import '../CssOfComponents/Header.css'
import logo from '../default.png'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src={logo} alt="" />
            </Link>
            <div className="header__center">
                <input type="text" placeholder="search" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
