import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Navbar, Home, About, Teacher, Contact, Courses, Footer, MoreInfo } from "./components/index"
import FirstPage from "./FirstPage"
import CoursesS from "./CoursesS";
import Tutors from "./Tutors"
import ContactUs from "./ContactUs";
import { MoreInfo, Navbar, Footer } from "./components";

function App () {
  return (
  <div className="font-Poppins bg-Solitude">
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<FirstPage/>} />
      <Route path = "about" element = {<MoreInfo/>}/>
      <Route path = "/courses" element = {<CoursesS/>} />
      <Route path = "tutors" element = {<Tutors/>} />
      <Route path = "contactus" element = {<ContactUs/>} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
  </div>
  )
}

export default App;

