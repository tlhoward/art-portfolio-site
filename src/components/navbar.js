import React from "react"
import { Link } from "gatsby"
import header_icon from "../img/header_icon.jpg"

export default () => (
    <div class="navbar">
        <div class="header-photo">
            <Link to="/"><img src={header_icon} alt="" width="250" height="250" /></Link>
        </div>
        <div class="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/">Art</Link></li>
                <li><Link to="/">Coding</Link></li>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/">Contact Me</Link></li>
            </ul> 
        </div>
    </div>
    )