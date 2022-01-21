
import React from 'react'
import Navbar from './navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import About from './about';


const App = ()=>{

    return (             
            
                <BrowserRouter>
                 <div className='App'>
                 <Navbar/>
                  <Routes>
                  <Route path ='/home' element={<Home/>}/>
                  <Route path ='/contact' element={<Contact/>}/>
                  <Route path ='/about' element={<About/>}/>
                  </Routes>
                  </div>
                </BrowserRouter>    
              
            )
}
export default App;