import React, { Component } from 'react';

const ImageList =(props) => {  

    const images = props.images.map((arg) => {
    return <img key ={arg.id} src={arg.webformatURL} alt='Images'/>
    })

    return (
        <div>
            
            {images}
       </div>
    )
}

export default ImageList;