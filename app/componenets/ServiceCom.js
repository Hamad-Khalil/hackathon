import Image from "next/image"
import Bones from "../../public/Asessts/Bones.jpeg"
import Dental from "../../public/Asessts/Dental.jpeg"
import Eyes from "../../public/Asessts/Eyes.jpeg"
import Operation from "../../public/Asessts/Operation.jpeg"
import Diagnoe from "../../public/Asessts/Diagnose.jpeg"
import Heart from "../../public/Asessts/Heart.jpeg"

import ImgCard from "./Card"
export default function ServiceCom() {
  return (
    <div className="mx-20">
        <div className="text-center text-cyan-700 text-4xl font-bold font-['DM Sans'] leading-[46px]">Services we provide </div> <br/>  
       <div className="flex justify-between items-center">
       <div className="w-[613.67px] text-center text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px] mx-[370px]">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </div>
       </div> <br/> <br/>
<div className="flex justify-between items-center">
<div className="w-[391.79px] h-[506px] bg-neutral-50 rounded-3xl">
       <div>
             <Image
      src={Eyes}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="w-[324px] text-cyan-700 text-2xl font-bold font-['DM Sans'] leading-[34px]">Eye care</div>
        <div className="w-[340.60px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</div> <br/>
        <div className="text-center text-cyan-700 text-lg font-bold font-['DM Sans'] leading-[18px]">Learn more</div>
       </div>

       <div className="w-[391.79px] h-[506px] bg-neutral-50 rounded-3xl">
       <div>
             <Image
      src={Bones}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="w-[324px] text-cyan-700 text-2xl font-bold font-['DM Sans'] leading-[34px]">Bones treatments</div>
        <div className="w-[340.60px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</div>
        <div className="text-center text-cyan-700 text-lg font-bold font-['DM Sans'] leading-[18px]">Learn more</div>
       </div>

       <div className="w-[391.79px] h-[506px] bg-neutral-50 rounded-3xl">
       <div>
             <Image
      src={Heart}
      width={600}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="w-[324px] text-cyan-700 text-2xl font-bold font-['DM Sans'] leading-[34px]">Cadiology</div>
        <div className="w-[340.60px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</div>
        <div className="text-center text-cyan-700 text-lg font-bold font-['DM Sans'] leading-[18px]">Learn more</div>
       </div>

</div>
<div className="flex justify-between items-center">
<div className="w-[391.79px] h-[506px] bg-neutral-50 rounded-3xl">
       <div>
             <Image
      src={Operation}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="w-[324px] text-cyan-700 text-2xl font-bold font-['DM Sans'] leading-[34px]">Surgery</div>
        <div className="w-[340.60px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</div>
        <div className="text-center text-cyan-700 text-lg font-bold font-['DM Sans'] leading-[18px]">Learn more</div>
       </div>

       <div className="w-[391.79px] h-[506px] bg-neutral-50 rounded-3xl">
       <div>
             <Image
      src={Dental}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="w-[324px] text-cyan-700 text-2xl font-bold font-['DM Sans'] leading-[34px]">Dental treatments</div>
        <div className="w-[340.60px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</div>
        <div className="text-center text-cyan-700 text-lg font-bold font-['DM Sans'] leading-[18px]">Learn more</div>
       </div>
       <div className="w-[391.79px] h-[506px] bg-neutral-50 rounded-3xl">
       <div>
             <Image
      src={Diagnoe}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
        <div className="w-[324px] text-cyan-700 text-2xl font-bold font-['DM Sans'] leading-[34px]">Diagnosis</div>
        <div className="w-[340.60px] text-neutral-600 text-lg font-normal font-['DM Sans'] leading-[30px]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</div>
        <div className="text-center text-cyan-700 text-lg font-bold font-['DM Sans'] leading-[18px]">Learn more</div>
       </div>

</div> <br/> <br/> <br/>
       </div>
  )
}
