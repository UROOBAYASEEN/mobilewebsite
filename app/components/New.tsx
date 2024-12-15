import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";

const New = ({url,price,name}:{url:string,price:string,name:string}) => {
  return (
    <div className='px-10'>
<Image
src={url}
alt=''
width={200}
height={200}
/>
<div className='flex   mt-10 gap-4 '>
    <FaStar className='text-3xl hover:text-yellow-500'/>
    <FaStar className='text-3xl hover:text-yellow-500'/>
    <FaStar className='text-3xl hover:text-yellow-500'/>
    <FaStar className='text-3xl hover:text-yellow-500'/>
    <FaStar className='text-3xl hover:text-yellow-500'/>
</div>
<h1 className='text-2xl font-[200] '>{name}</h1>
<p className='text-2xl font-[200] '>{price}</p>

    </div>
  )
}

export default New