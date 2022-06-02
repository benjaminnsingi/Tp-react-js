import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import ChroniquesPage from "./pages/ChroniquesPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/navbar/NavBar";
import AddPage from "./pages/AddPage";
import Display from "./components/chroniques/Display";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";


function App() {

    const [user, setUser] = useState()
    useEffect( () => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[])

  return (
    <div className="App">
        <Router>
            <NavBar/>
            <div className="container">
                <Routes>
                    <>
                        <Route exact path="/" element={<HomePage/>} />
                        <Route path="/chroniques" element={<ChroniquesPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/display/:slug"  element={ <Display />} />
                        <Route path="/register"  element={ <RegisterPage />} />
                        <Route path="/login"  element={ <LoginPage />} />
                        <Route path="/profil" element={<ProfilePage/>} />
                        <Route path="/ajout" element={<AddPage/>} />
                    </>
                </Routes>
            </div>

        </Router>
    </div>
  )
}

export default App
