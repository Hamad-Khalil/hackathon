'use client'
import Image from "next/image"
import Link from "next/link"
import DoctorSide from "../doctor/page"

export default function Nav() {
    return (
        <div className='lg:flex justify-between items-center m-6'>
            <div className="w-[254px] h-[50px] justify-start items-center gap-1 inline-flex">
                <img className="w-[55px] h-[50px]" src="public\Assets\image 16.png  " />
                <div className="text-center"><span className="text-cyan-700 text-[26px] font-semibold font-['Lexend Tera'] capitalize">health</span><span className="text-lime-600 text-[26px] font-semibold font-['Lexend Tera'] capitalize">care</span>

                </div>
            </div>
            <div className="w-[532px] h-[25px] justify-start items-start gap-[26px] flex ">
    <div className="text-center text-cyan-700 text-xl font-normal font-['Lexend Tera'] capitalize">home</div>
    <div className="text-center text-black text-xl font-normal font-['Lexend Tera'] capitalize">service</div>
    <div className="text-center text-black text-xl font-normal font-['Lexend Tera'] capitalize">contact us</div>
    
</div>
<div className="text-center text-cyan-700 text-xl font-medium font-['Lexend Tera'] capitalize">sign up</div>
<div >
<div className="w-[167px] h-[51px] px-10 py-[13px] bg-cyan-700 rounded-lg justify-start items-start gap-2.5 inline-flex">
    <button className="text-center text-white text-xl font-bold font-['Lexend Tera'] capitalize">Log in</button>
</div></div>  
        </div>
    )
}