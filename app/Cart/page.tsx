"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


import Image from 'next/image'


  const Page=()=>{
    
    
    const [Data, SetData] = useState<any[]>([])

      

    useEffect(() => {
      const cartKey = "CartData";
      const cartData = localStorage.getItem(cartKey);
      if (cartData) {
          try {
              SetData(JSON.parse(cartData)); 
          } catch (error) {
              console.error(`Error parsing ${cartKey}:`, error);
          }
      }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
        const cartdata = localStorage.getItem("CartData");
        if (cartdata) {
            try {
                SetData(JSON.parse(cartdata));
            } catch (error) {
                console.error("Error parsing CartData:", error);
            }
        }
    }
}, []);

    
// useEffect(() => {
//   const cartdata = localStorage.getItem("CartData");
//   if (cartdata) {
//     try {
//       SetData(JSON.parse(cartdata));
//     } catch (error) {
//       console.error("Error parsing CartData:", error);
//     }
//   }
// }, []);


const deleteItem = (id: number) => {
  const updatedData = Data.filter((item) => item.id !== id); 
  SetData(updatedData); // Update state
  localStorage.setItem("CartData", JSON.stringify(updatedData)); 
};

    
    
    
    return<div>
      {
        Data.length===0 && <div className='flex text-center justify-center items-center'
        >
          <div className='mt-24 h-screen'>
            <h1 className='bg-center texy-2xl text-black uppercase font-bold'>cart is empty</h1>
          <Link href="/mobiledetails"> <button className=' text-3xl font-bold bg-black px-7 py-3 text-red-700 mt-24'>check products</button></Link>
          </div>

        </div>
      }
      {
        Data.length>0 &&<div className='mt-32 my-10'>
        {
          Data.map((val,ind)=>
            <div key={ind} className='border border-black py-4 md:flex justify-between px-10 gap-4 '>
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
export default Page