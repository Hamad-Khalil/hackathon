import Image from "next/image"
import Male from "../../public/Asessts/Male.jpeg"

export default function Dashboard () {
  return (
    <div className='lg:flex justify-between items-center mx-20'>
        
        <div>
        <div className="w-[657px]"><span className="text-zinc-800 text-[40px] font-semibold font-['Lato'] capitalize">Providing Quality </span><span className="text-cyan-700 text-[40px] font-semibold font-['Lato'] capitalize">Healthcare</span><span className="text-zinc-800 text-[40px] font-semibold font-['Lato'] capitalize"> for a </span><span className="text-lime-600 text-[40px] font-semibold font-['Lato'] capitalize">Brighter</span><span className="text-zinc-800 text-[40px] font-semibold font-['Lato'] capitalize"> and </span><span className="text-lime-600 text-[40px] font-semibold font-['Lato'] capitalize">Healthy</span><span className="text-zinc-800 text-[40px] font-semibold font-['Lato'] capitalize"> Future</span></div>
        
        <div className="w-[587px] text-black text-opacity-70 text-xl font-normal font-['Lato'] capitalize tracking-wide">At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</div> <br/> <br/>
        <button className=" bg-cyan-700 text-2xl w-max p-3 text-white rounded-2xl">Book Appointment </button>
        </div> <br/> <br/>
        <Image
      src={Male}
      width={500}
      height={500}
      alt="Picture of the author"
    />
         </div>
    
  )
}
