import Link from 'next/link'
import React from 'react'

const Header = () => {
  let headerdata=[

    {name:"home",
      route:'/'
    },{name:"contact",
      route:'/Contact'
    },{name:"TechTrove",
      route:'/mobiledetails'
    },{name:"Cart",
      route:'/Cart'
    }
  ]


  return (
    <div className='bg-white text-black tracking-tighter overflow-x-hidden flex justify-between px-10 py-5 fixed top-0 left-0 right-0'>
      <div className='font-bold text-2xl '><span className='font-bold text-3xl uppercase text-red-600'>t</span>he unique</div>
      <div className='flex justify-evenly gap-5'>
        {headerdata.map((val,ind)=><Link key={ind} href={val.route}><h3 className='font-[500] tracking-tighter uppercase pb-3  hover:underline  hover:decoration-6 hover:underline-offset-4'>{val.name}</h3></Link>)}
      </div>


    </div>
  )
}

export default Header