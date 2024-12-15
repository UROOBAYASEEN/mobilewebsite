import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen my-3 px-12 py-12  justify-between items-center text-center gap-5 md:flex'>

<div>
    <h1 className='uppercase text-6xl font-bold tracking-[-0.2rem] '>Upgrade to the Future</h1>
    <h1 className='uppercase text-4xl font-light tracking-[-0.2rem] '> Find Your Perfect Smartphone Today!</h1>
   <Link href="/mobiledetails"> <p className='uppercase border border-black text-light font-2xl  px-12 my-7 font-bold py-3 cursor-pointer hover:rounded-2xl'>shop now</p></Link>

</div>
<div><Image src="https://images.ctfassets.net/wcfotm6rrl7u/5KYFmM6BQD6LHus6FpT6Mp/4b7b546a321f30d0933d21babfe6eefe/HMD_Crest-Hero-White-Homepage-v2.png?w=1920&fm=webp&q=80"
alt='this is iame'
height={700}
width={600}
/></div>


    </div>
  )
}

export default Hero