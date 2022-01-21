import React, { Component } from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './imageList';


    
class Home extends React.Component {

    constructor(){
        super();
        this.state={
           images : [] 
       };
        this.onSearchSubmit=this.onSearchSubmit.bind(this);
    }        
   async onSearchSubmit (entry) {
       
       const response = await axios.get(`https://pixabay.com/api/?key=25288266-7436a5c0eb4c581ef27c4f82c&q=${entry}&image_type=photo&pretty=true`);
       this.setState({images:response.data.hits});
       console.log(this.state.images.length);        
    }
       render(){
           return (
            <div className='ui container' style={{marginTop : '30px'}}>
            <SearchInput onSearchSubmit = {this.onSearchSubmit}/>
            <ImageList  images = {this.state.images}  />      
          </div>
    
        )
     }
}

export default Home;