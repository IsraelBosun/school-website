import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Navbar, Home, About, Teacher, Contact, Courses, Footer, MoreInfo } from "./components/index"
import FirstPage from "./FirstPage"
import { MoreInfo, Navbar, Footer } from "./components";

function App () {
  return (
  <div className="font-Poppins bg-Solitude">
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<FirstPage/>} />
      <Route path = "/MoreInfo" element = {<MoreInfo/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  </div>
  )
}

export default App;

