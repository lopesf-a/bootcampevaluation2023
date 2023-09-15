import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Index=()=>{
    return (    
        
    <div className='navBar'>
        <header className="header__main">
            <div className="header__logo">
                <img src="../Logo_of_the_SCP_Foundation.png" alt="logo scp" />
            </div>
        <nav className="header__nav">
            <div className='stocks'>
                <Link to="/">Homepage</Link>
            </div>
            <div className='favourites'>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='cart'>
                <Link to="/register">Register</Link>
            </div>    
            <div className='cart'>
                <Link to="/news">News</Link>
            </div>    
      </nav>
    </header>
    </div>           
    )

}

export default Index;