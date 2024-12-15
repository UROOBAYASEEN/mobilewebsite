import React from 'react'
import { reallmedata } from '../database/reallme'
import Mbl from '../components/Mbl'



const page =  async() => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[65px]'>
        
 { await reallmedata.map((val,ind)=>
<div key={ind} className='border hover:border-black p-4  m-5 shadow-2xl shadow-red-700 rounded-3xl   hover:p-[10px]' ><Mbl name={val.model} replace={val.name}  id={val.id} image={val.image_url} price={val.price} description={val.description} route={val.model}/></div>

)}


    </div>
  )
}
// export const getStaticProps=async()=>{
// const data=await reallmedata


// }

export default page