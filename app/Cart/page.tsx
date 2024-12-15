"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Image from 'next/image'


  const page=()=>{
    
    
    const [data, setdata] = useState<any[]>([])

      

   

    
useEffect(() => {
  const cartdata = localStorage.getItem("CartData");
  if (cartdata) {
    try {
      setdata(JSON.parse(cartdata));
    } catch (error) {
      console.error("Error parsing CartData:", error);
    }
  }
}, []);


const deleteItem = (id: number) => {
  const updatedData = data.filter((item) => item.id !== id); 
  setdata(updatedData); // Update state
  localStorage.setItem("CartData", JSON.stringify(updatedData)); 
};

    
    
    
    return<div>
      {
        data.length===0 && <div className='flex text-center justify-center items-center'
        >
          <div className='mt-24 h-screen'>
            <h1 className='bg-center texy-2xl text-black uppercase font-bold'>cart is empty</h1>
          <Link href="/mobiledetails"> <button className=' text-3xl font-bold bg-black px-7 py-3 text-red-700 mt-24'>check products</button></Link>
          </div>

        </div>
      }
      {
        data.length>0 &&<div className='mt-32 my-10'>
        {
          data.map((val)=>
            <div className='border border-black py-4 md:flex justify-between px-10 gap-4 '>
              <div>
                <Image
                src={val.imageurl}
                alt='thisisimage'
                height={100}
                width={100}
                />

            
              </div>
              <div>
                <h1>MODEL</h1>
                <p>{val.model}</p>

              </div>
              <div>
                <h1>Price</h1>
                <p>{val.price}</p>

                </div>
               
               <div className='flex gap-5'>
                <div className='font-bold text-red-600'onClick={() => deleteItem(val.id)}> delete</div>
               <Link href={`${val.Catagaries}/${val.id}`}> <div className='font-bold text-red-600'> Veiw Product</div></Link>

               </div>


              </div>
          )
        }
       
       
        </div>

      }
      
    </div>


    




  }
export default page