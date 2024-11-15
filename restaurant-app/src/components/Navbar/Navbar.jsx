import React, { useState } from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import { images } from '../../constants/';

import './Navbar.css';

const Navbar = () => {
  const[toggleMenu,setToggleMenu] =useState(false);


  return(
  <nav className='app__navbar'>
  <div className="app__navbar-logo">
    <img src={images.gericht} alt="app-logo" srcset="" />
  </div>

  <ul className="app__navbar-links">
  <li className="p__opensans"><a href="#home"></a>Home</li>
  <li className="p__opensans"><a href="#about"></a>About</li>
  <li className="p__opensans"><a href="#menu"></a>Menu</li>
  <li className="p__opensans"><a href="#award"></a>Awards</li>
  <li className="p__opensans"><a href="#contact"></a>Contact</li>
    
  </ul>


  < div className="app__navbar-login">
   <a href="#login" className='p__opensans'>Log In / Register</a>
  

   <a href="/" className='p__opensans'>Book Table</a>
   
   </div>
   
     {/* hamburger  */}
    <div className="app__smallscreen">
    < GiHamburgerMenu  color='#fff'  fontSize={27} onClick={()=>setToggleMenu(true)}/>

    {/* inside toggle  */}
    {toggleMenu && (
    
   <div className='app__navbar-smallscreen_overlay  flex __center slide-bottom'>
   < MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
   <ul className="app__navbar-smallscreen-links">
   <li className="p__opensans"><a href="#home"></a>Home</li>
   <li className="p__opensans"><a href="#about"></a>About</li>
   <li className="p__opensans"><a href="#menu"></a>Menu</li>
   <li className="p__opensans"><a href="#award"></a>Awards</li>
   <li className="p__opensans"><a href="#contact"></a>Contact</li>
    
  </ul>
  </div>
  )}
   
   
  </div>
  </nav>
  )
}


export default Navbar;
