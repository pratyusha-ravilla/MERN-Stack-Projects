
// import {doctors} from './../../assets/data/doctors';
// import DoctorCard from './DoctorCard';

// const DoctorList = () => {
//   return (
//    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//     {doctors.map(doctor=> (
//     <DoctorCard key={doctor.id} doctor={doctor} />
//    ))}

//    </div>
//   );
// };

// export default DoctorList;

import React , {useEffect,useState } from 'react'
import {NavLink , Outlet} from 'react-router-dom'
import { getDoctors } from '../Services/DoctorServices'

const DoctorList = () => {

    const [doctors,setDoctors] = useState([])

    //mounting  , updating/re-rendering ,unmounting
    useEffect(()=>{
        getDoctors().then(data=>setDoctors(data))
    },[])
  return (
    <div>
    
      <div className='row mt-5'>
        <div className='col-md-3' style={{borderRight:'2px solid black'}}>

            <ul className='list-group list-group-flush'>
                {
                    doctors.length &&(
                        doctors.map(doctor=>(
                            <li key={doctor._id} 
                            className='list-group-item'>
                                <NavLink to={`/doctors/${doctor._id}`}><h1>{doctor.name}</h1></NavLink>
                            </li>
                        ))
                    )
                }
            </ul>
            <button>
                <NavLink className="nav-link" to ="/doctors/add">Add Doctor</NavLink>
            </button>
        </div>
      <div className='col-md-9'>
        <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default DoctorList
