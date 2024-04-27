
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import Appointment from '../pages/Appointment';

import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// import Doctor from '../components/Doctors/Doctors';
// import DoctorList from '../components/Doctors/DoctorList';
// import AddDoctor from '../components/Doctors/AddDoctor';


const Routers = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctors/:id" element={<DoctorDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />

     <Route path='/appointment'element={<Appointment/>} />

     {/* <Route path='/doctors' element={<DoctorList/>}   />
     <Route path='/doctors/:id' element={<Doctor/>}   />
     <Route path='/doctors/add' element={<AddDoctor/>}   /> */}
    
     
    

    <Route path="/contact" element={<Contact/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}> <MyAccount /> </ProtectedRoute> } />
    <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}> <Dashboard /> </ProtectedRoute>} />
    

  </Routes>
   
  );
};

export default Routers;