"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Mblcompany = ({logo,name,owner}:{logo:string,name:string,owner:string}) => {
    
  return (
    <div className='flex justify-center text-center items-center'>
      <div>
        <Image
        src={logo} 
        alt='companyname'
       
        className='h-[200px] w-[200px] item-center pl-20 text-red-500  px-2 py-3 '
        width={100}
        height={100}
        />
       
       <h1 className='text-2xl items-start font-bold tracking-tighter mt-10 text-red-700'>{owner}</h1>
      <Link href={`/${name}`} > <button 
          className=' uppercase  text-white bg-red-700 hover:rounded-2xl text-center px-8 py-3 mt-10'>products</button></Link>
    </div>
    </div>
  )
}

export default Mblcompany