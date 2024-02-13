import { BrowserRouter, Routes, Route } from "react-router-dom";
import Receptionist from './components/receptionist/Receptionist';
import Nurse from './components/nurse/Nurse';
import Doctor from './components/doctor/Doctor';
import Patient_details from './components/patient_details/Patient_details';
import Edit_description from "./components/edit_description/Edit_description";
import './App.css';
// import Patient_list from './components/patient_list/Patient_list';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Receptionist />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patients/:id" element={<Patient_details />} />
        <Route path="/patients/:id/edit-description" element={<Edit_description />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
