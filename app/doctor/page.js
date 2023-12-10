import { doctorModel } from "@/model/doctors"
import dbConnect from "@/config/db";
dbConnect()
const getDocs =async()=>{
  try {
    const data = await doctorModel.find();
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export default async function page() {
  const data = await getDocs()
  return (
    <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Patient Name</th>
        <th> Contacts</th>
        <th>Patients History</th>
      </tr>
    </thead> </table> </div>
    
      {
        data?.map((item)=>{
          return(
            <>
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <tbody>
   
      <tr className="bg-base-200">
        <th></th>
        <td>{item.title}</td>
        <td>{item.Number}</td>
        <td>{item.history}</td>
      </tr>
     
    </tbody>
  </table>
</div>
            </>
          )
        })
      }
      {/* {
        data?.map((item)=>{
          return(
            <>
              <table>
                <th>name</th>
                <tbody>
                  <td>{item.title}</td>
                </tbody>
              </table>
            </>
          )
        })
      } */}
    </div>
  )
}
