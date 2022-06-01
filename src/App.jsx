import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Fragment} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import ChroniquesPage from "./pages/ChroniquesPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/navbar/NavBar";
import AddPage from "./pages/AddPage";

function App() {

  return (
    <div className="App">
       <Router>
           <NavBar/>
           <div className="container">
               <Routes>
                   <Fragment>
                       <Route path="/" element={<HomePage/>} />
                       <Route path="/chroniques" element={<ChroniquesPage/>} />
                       <Route path="/about" element={<AboutPage/>} />
                       <Route path="/profil" element={<ProfilePage/>} />
                       <Route path="/ajout" element={<AddPage/>} />
                   </Fragment>
               </Routes>
           </div>

       </Router>
    </div>
  )
}

export default App
