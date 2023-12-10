import Doctor from "../../public/Asessts/Doc.jpeg"
import Image from "next/image"


export default function OptPage () {
  return (
    <div className='flex justify-between items-center mx-20'>
        <div >
        <div className="w-[455.12px] text-cyan-700 text-4xl font-bold font-['DM Sans'] leading-[46px]">You have lots of reasons to choose us</div> <br/> <br/> <br/>
        <div className="w-[455.12px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</div> <br/> <br/><br/> 
        <div className='flex justify-between items-center' >
        <div className="w-[173px] h-[66px] px-9 py-6 bg-cyan-700 rounded-[40px] justify-start items-center gap-2 inline-flex">
    <div className="text-center text-white text-lg font-bold font-['DM Sans'] leading-[18px]">Get started</div>


</div>
        </div>
        </div>
        <Image
      src={Doctor}
      width={500}
      height={500}
      alt="Picture of the author"
    />   
         </div>
  )
}
