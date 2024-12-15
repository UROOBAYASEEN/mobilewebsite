"use client"
import React, {  useState } from 'react'
import Hero from './components/Hero'
import Company from './components/Company'
import About from './components/About'
import Newproducts from './components/Newproducts'
import Contact from './components/Contact'




import Header from './components/Header'






const page = () => {

 
 
  if (!localStorage.getItem("CartData")) {
    localStorage.setItem("CartData", JSON.stringify([]));
  }
 

  

  
 
  


  
     
  
  return (
    <div className='mt-10'>
      
 
  



<Header/>
       <Hero/>
      <Company/>
      <About/>
      <Contact/>
      <Newproducts/> 

     
     
    
    
    




    
    
     
     
    </div>
  )
}

export default page