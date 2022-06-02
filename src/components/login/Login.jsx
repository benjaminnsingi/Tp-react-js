import React, {useState} from "react";
import Home from "../home/Home";
import Profile from "../profil/Profile";
import {Alert} from "react-bootstrap";

const Login = () => {

    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");

    const [profile, setProfile] = useState(true);

    const [flag, setFlag] = useState(false);

    const handleLoginAuthenticator = (e) => {
        e.preventDefault();

        let pass = localStorage
            .getItem("johndoe")
            .replace(/"/g,"");
        let mail = localStorage.getItem("john-doe@gmail.com").replace(/"/g,"");


        if (!email || !password) {
            setFlag(true);
        } else if(password !== pass || email !== mail) {
            setFlag(true)
        } else {
            setProfile(!profile);
            setFlag(false);
        }
    }

    return (
       <div className="container">
           {
               profile ? (
                   <>
                       {flag && (
                           <Alert color="primary" variant="warning">
                               Fill correct Info else keep trying.
                           </Alert>
                       )}
                       <h1>Connectez-vous</h1>
                       <form onSubmit={handleLoginAuthenticator}>
                           <div className="mb-3">
                               <label htmlFor="login" className="form-label">Email</label>
                               <input type="text" className="form-control"
                                      onChange={(event) => setEmail(event.target.value)}
                                      placeholder="Email"/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="password" className="form-label">Mot de passe</label>
                               <input type="password" className="form-control"
                                      onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe"/>
                           </div>
                           <button className="btn btn-primary">Se connecter</button>
                       </form>
                   </>
               ) : (
                   <Profile/>
               )
           }
       </div>
    )
}

export default Login;