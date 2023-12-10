import React from 'react'
import Dashboard from '../componenets/Dashboard'
import Results from '../componenets/Results'
import OptPage from '../componenets/Opt'
import ServiceCom from '../componenets/ServiceCom'  
import DoctorSide from '../doctor/page'
export default function HomePage() {
  return (
    <div>  <br/> <br/><br/>
        <Dashboard/> <br/> <br/><br/>   
        <Results/> <br/> <br/><br/>
        <OptPage/><br/> <br/><br/>
        <ServiceCom/><br/> <br/><br/>
        <DoctorSide/>
       
    </div>
  )
}
