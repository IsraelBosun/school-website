import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/container/Header';
import About from "./assets/About.jpeg"

const semesters = [
  { level: '100 Level', semester: 'First Semester', resumptionDate: 'September 1, 2023', isActive: true, link: "" },
  { level: '100 Level', semester: 'Second Semester', resumptionDate: 'January 1, 2024', isActive: false, link: "https://paystack.com/buy/100l-second-semester-registration" },
  { level: '200 Level', semester: 'First Semester', resumptionDate: 'September 1, 2023', isActive: true, link: "" },
  { level: '200 Level', semester: 'Second Semester', resumptionDate: 'January 1, 2024', isActive: false, link: "https://paystack.com/buy/200l-secons-semester-registration" },
  { level: '300 Level', semester: 'First Semester', resumptionDate: 'September 1, 2023', isActive: true, link: "" },
  { level: '300 Level', semester: 'Second Semester', resumptionDate: 'January 1, 2024', isActive: false, link: "https://paystack.com/buy/300l-second-semester-registration" },
  // { level: '400 Level', semester: 'First Semester', resumptionDate: 'September 1, 2023', isActive: false },
  // { level: '400 Level', semester: 'Second Semester', resumptionDate: 'January 1, 2024', isActive: true }
];

const Registration = () => {
  return (
    <div>
      <Header title="Register Here" image={About}>
      Register for semesters that are not currently in session.
      </Header>
    <div className='section'>
    <div className="grid sm:grid-cols-2 gap-4">
      {semesters.map((semester, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">{semester.level}</h2>
          <p className="text-gray-500 mb-2">{semester.semester}</p>
          <p className="text-gray-500 mb-2">Resumption Date: {semester.resumptionDate}</p>
          {semester.isActive ? (
            <p className="text-red-500 font-bold">Not in session</p>
          ) : (
            <button className="bg-green-500 hover:bg-white text-white hover:text-green-600 border font-bold py-2 px-4 rounded">
              <a href = {semester.link} target="_blank" rel="noopener noreferrer">Register</a>
            </button>
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Registration;






























// import {useState} from "react"; 
 
// const PasswordErrorMessage = () => { 
//  return ( 
//    <p className="FieldError">Password should have at least 8 characters</p> 
//  ); 
// }; 
 
// function Testing() { 
//  const [firstName, setFirstName] = useState(""); 
//  const [lastName, setLastName] = useState(""); 
//  const [email, setEmail] = useState(""); 
//  const [password, setPassword] = useState({ 
//    value: "", 
//    isTouched: false, 
//  }); 
//  const [role, setRole] = useState("role"); 

//  const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//  const getIsFormValid = () => { 
//    return ( 
//      firstName && 
//      validateEmail(email) && 
//      password.value.length >= 8 && 
//      role !== "role" 
//    ); 
//  }; 
 
//  const clearForm = () => { 
//    setFirstName(""); 
//    setLastName(""); 
//    setEmail(""); 
//    setPassword({ 
//      value: "", 
//      isTouched: false, 
//    }); 
//    setRole("role"); 
//  }; 
 
//  const handleSubmit = (e) => { 
//    e.preventDefault(); 
//    alert("Account created!"); 
//    clearForm(); 
//  }; 
 
//  return ( 
//    <div className="App"> 
//      <form onSubmit={handleSubmit}> 
//        <fieldset> 
//          <h2>Sign Up</h2> 
//          <div className="Field"> 
//            <label> 
//              First name <sup>*</sup> 
//            </label> 
//            <input 
//              value={firstName} 
//              onChange={(e) => { 
//                setFirstName(e.target.value); 
//              }} 
//              placeholder="First name" 
//            /> 
//          </div> 
//          <div className="Field"> 
//            <label>Last name</label> 
//            <input 
//              value={lastName} 
//              onChange={(e) => { 
//                setLastName(e.target.value); 
//              }} 
//              placeholder="Last name" 
//            /> 
//          </div> 
//          <div className="Field"> 
//            <label> 
//              Email address <sup>*</sup> 
//            </label> 
//            <input 
//              value={email} 
//              onChange={(e) => { 
//                setEmail(e.target.value); 
//              }} 
//              placeholder="Email address" 
//            /> 
//          </div> 
//          <div className="Field"> 
//            <label> 
//              Password <sup>*</sup> 
//            </label> 
//            <input 
//              value={password.value} 
//              type="password" 
//              onChange={(e) => { 
//                setPassword({ ...password, value: e.target.value }); 
//              }} 
//              onBlur={() => { 
//                setPassword({ ...password, isTouched: true }); 
//              }} 
//              placeholder="Password" 
//            /> 
//            {password.isTouched && password.value.length < 8 ? ( 
//              <PasswordErrorMessage /> 
//            ) : null} 
//          </div> 
//          <div className="Field"> 
//            <label> 
//              Role <sup>*</sup> 
//            </label> 
//            <select value={role} onChange={(e) => setRole(e.target.value)}> 
//              <option value="role">Role</option> 
//              <option value="individual">Individual</option> 
//              <option value="business">Business</option> 
//            </select> 
//          </div> 
//          <button type="submit" disabled={!getIsFormValid()}> 
//            Create account 
//          </button> 
//        </fieldset> 
//      </form> 
//    </div> 
//  ); 
// } 

// export default Testing; 