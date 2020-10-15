import React from "react"
import { Link } from "gatsby"
import header_icon from "../img/header_iconv2.png"

export default () => (

 
    <div class="navbar">
        <div class="header-photo">
            <Link to="/"><img src={header_icon} alt=""/></Link>
        </div>
        <div class="nav-content">
            
            <ul>
                <li><Link to="/">Home</Link></li>
    
                <div class="subnavbar">
                    <button class="subnavbtn">Art</button>
                    <div class="subnav-content">
                        <ul class="sub">
                        <li><Link to="/">Illustrations</Link></li>
                        <li><Link to="/">Sketches</Link></li>
                        <li><Link to="/">Pixel Art</Link></li>
                        </ul>
                    </div> 
                </div>

                <div class="subnavbar">
                    <button class="subnavbtn">Coding</button>
                    <div class="subnav-content">
                        <li><Link to="/">Code Blog</Link></li>
                        <li><Link to="/">Projects</Link></li>
                    </div>
                </div>

                <li><Link to="/shop/">Shop</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/contact/">Contact Me</Link></li>
            </ul> 
        </div>
    </div>

    
    )