import React from 'react'

export default function Appointment() {
  return (
    <div>
       <div className='flex justify-between items-center'>
       <h1 className=' text-4xl text-b '>Book Your Appointment
        </h1>
       </div> <br/> <br/> <br/> <br/>
        <div className='flex align-middle'>
        <div>
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        <div>
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        <div>
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        </div>  
        <div>
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        </div>
    </div>
  )
}
