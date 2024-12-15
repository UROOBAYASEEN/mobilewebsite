import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold tracking-tighter  underline items-center text-center'>comfort zone</h1>
    <div className=' justify-evenly items-center text-center mt-20 md:flex'>
   
   
       
       
        <p className='w-[90%] text-4xl font-[200] tracking-tighter mx-3'>
        Discover the latest smartphones at unbeatable prices! From cutting-edge technology to sleek designs, our collection offers something for everyone. Enjoy fast performance, stunning cameras, and long-lasting batteries. Shop confidently with exclusive deals, secure payment options, and quick delivery. Upgrade your experience today with the perfect phone tailored to your needs!

        </p>
        <div className='px-3'>
            <Image 

src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-oI4C8i27v2K3TQrQ1z1oaGqQ3XDrxYkgg&s"
            alt='thi'
            height={500}
            width={500}
            />
        </div>

    </div>
    </div>
  )
}

export default About