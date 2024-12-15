import React from 'react'
import { oppodata } from '../database/oppo'
import Mbl from '../components/Mbl'

const page =  async() => {
 
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[65px]'>
            
    { await oppodata.map((val,ind)=>
    <div key={ind} className='border hover:border-black p-4 m-5 shadow-2xl shadow-red-700 rounded-3xl  hover:p-[10px]  ' ><Mbl name={val.model}  image={val.image_url} price={val.price} id={val.id} description={val.description} route={val.model} replace={val.name}/></div>
    
    )}
    
    
        </div>
      )
}
// export const getStaticProps=async()=>{

// const oppodatas=await oppodata

// }

export default page