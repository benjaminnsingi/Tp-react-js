import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ChroniquesPage from "./pages/ChroniquesPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/navbar/NavBar";
import Display from "./components/chroniques/Display";
import PrivateRoute from "./components/profil/PrivateRoute";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";


function App() {

      return (
        <div className="App">
            <Router>
                <NavBar/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<HomePage/>} />
                        <Route path="/chroniques" element={<ChroniquesPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/display/:slug"  element={ <Display />} />
                        <Route path="/ajout" element={<PrivateRoute component={AddPage}/>} />
                        <Route path="/edit/:slug" element={<EditPage/>} />
                        <Route path="/profil" element={<PrivateRoute component={ProfilePage}/>} />
                    </Routes>
                </div>

            </Router>
        </div>
      )
}

export default App
