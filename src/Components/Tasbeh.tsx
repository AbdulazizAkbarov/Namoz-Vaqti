
import Ong from '../assets/ong'
import { Link } from 'react-router'
import touch from"../assets/touch-screen.png"
import { useState } from 'react'

function Tasbeh() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <Link to={"/"}>
        <p className='text-2xl  text-white pt-2'><Ong/></p>
        </Link>


         <div className=' mt-20 h-[100px] bg-[#00254783] rounded-xl text-center w-[96%] mx-auto'>
            <p className='text-white text-5xl font-bold pt-6'>{count}</p>
        </div>   


        <div className=' border-1 border-[#002547] transition ease-in active:bg-[#00254780] active:border-1 acttive:border-transparent p-6 w-[100px] h-[100px] rounded-full mt-[200px] mx-auto'
        onClick={()=>{
            setCount(count+1)
        }}
        >
            <img className=' object-cover ' src={touch} alt="" />
        </div>
    </div>
  )
}

export default Tasbeh