"use client"
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Mbl = ({name,image,price,route,description,id,replace}:{name:string,price:string,route:string,description:string,image:string,id:string,replace:string}) => {
  const totalcell=["Apple", "Samsung", "Xiaomi", "OPPO", "Vivo", "Realme"]
  
  return (
    <div className='mx-5'>
        <Image
        src={image}
        alt=''
        height={200}
        width={200}
        className='h-[200px] w-[200px] object-cover bg-center bg-cover'
        />
        <h1 className='text-2xl font-[600] mt-2 text-red-700 '>{name}</h1>
        <h1 className=' mt-3 tracking-tighter  font-light text-2xl '>{description}</h1>
        <h1 className='mt-2 text-red-800 uppercase mb-4'> price:{price}</h1>
        <div className='flex text-2xl gap-3 mb-2 '><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/></div>
       <Link 
    
    // href={`/Apple/${id}`}
     
      href={`/${replace}/${id}`}  ><button className='uppoercase px-7 py-5  mb-7 mt-4 bg-red-700 text-white font-bold tracking-tighter text-2xl uppercase cursor-pointer shadow-lg shadow-gray-400'>product details </button></Link>
    </div>
  )
}

export default Mbl