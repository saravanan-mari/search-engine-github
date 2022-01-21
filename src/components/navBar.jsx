import React, { Component } from 'react';

const Navbar = () => {
    return(
        <div>
        <nav className='ui raisedvery padded segment' style={{backgroundColor:'purple'}}>  
        <a className= 'ui teal inverted segment'>ImageFOX</a>
        <div className='ui right floated header'>
        <button className='ui button primary'><a href='/home' style={{color:'white'}}>home </a></button>
        <button className='ui button primary'><a href='/about'style={{color:'white'}}>about us</a></button>
        <button className='ui button primary'><a href='/contact'style={{color:'white'}}>contact us</a></button>
        </div>   
        </nav>
        </div>
    )
}

 export default Navbar;
