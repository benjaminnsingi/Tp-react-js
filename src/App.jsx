import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ChroniquesPage from "./pages/ChroniquesPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/navbar/NavBar";
import AddPage from "./pages/AddPage";
import Display from "./components/chroniques/Display";
import {useAuth0} from "@auth0/auth0-react";


function App() {

    const { isLoading, error } = useAuth0();

      return (
        <div className="App">
            {error && <p className="text-danger">Erreur d'authentification</p>}
            {error && isLoading && <p>Chargement en cours...</p>}
            <Router>
                <NavBar/>
                <div className="container">
                    <Routes>
                        <>
                            <Route exact path="/" element={<HomePage/>} />
                            <Route path="/chroniques" element={<ChroniquesPage/>} />
                            <Route path="/about" element={<AboutPage/>} />
                            <Route path="/display/:slug"  element={ <Display />} />
                            {!error && !isLoading && (
                                <>
                                    <Route path="/profil" element={<ProfilePage/>} />
                                    <Route path="/ajout" element={<AddPage/>} />
                                </>
                            )}
                        </>
                    </Routes>
                </div>

            </Router>
        </div>
      )
}

export default App
