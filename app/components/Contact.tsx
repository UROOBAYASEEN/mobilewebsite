import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center item-center text-center mb-10'>
      <div className='text-red-700'>
    <h1 className='uppercase text-4xl my-10 font-bold  mx-3'>contact us</h1>
    <div className='justify-center   h-screen w-screen items-center  text-center gap-20 '>
        
        <div className='my-5'>
            <h1 className='text-7xl font-[500]  uppercase tracking-[-0.4rem] '>get in</h1>
            <h1 className='text-8xl font-bold  text-red-700 uppercase tracking-[-0.4rem] leading-[20px]'>Touch</h1>
        </div>
        <div>
            <div className='text-2xl font-bold text-red-700 mx-1'>
         
         
          
       Enter name: <input type='text' placeholder='Enter your name' className=' h-[50px] text-center font-bold text-red-600 border border-black my-5'></input><br></br>
       Enter city:<input type='text' placeholder='Enter your city' className=' h-[50px] text-center font-bold text-red-600  border border-black my-5'></input><br></br>
       Paste message:<input type='text' placeholder='Enter  message' className=' h-[100px] text-center font-bold text-red-600  border border-black my-5'></input><br></br>
<button className=' bg-red-700 px-7 py-3 text-white font-bold mt-10'>Submit</button>



               
               
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact