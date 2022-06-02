import React, {useState} from "react";
import Login from "../login/Login";
import {Alert} from "react-bootstrap";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("john-doe@gmail.com", JSON.stringify(email));
            localStorage.setItem(
                "johndoe",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }

    }

    const handleClick = () => {

        setLogin(!login)
    }

    return(
        <div className="container">
            {" "}
            {
                login ? (
                    <>
                        <h1>Inscrivez-vous</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="login" className="form-label">Nom d'utilisateur</label>
                                <input type="text" className="form-control" name="name"    onChange={(event) => setName(event.target.value)} placeholder="Nom d'utilisateur"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="login" className="form-label">Email</label>
                                <input type="email" className="form-control"  onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <input type="password" className="form-control"    onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe"/>
                            </div>
                            <button className="btn btn-primary">S'inscrire</button>

                            <p onClick={handleClick} className="forgot-password text-right">
                               Dejà inscrit{" "}connectez-vous?

                            </p>
                            {flag && (
                                <Alert color="primary" variant="danger">
                                    J'ai compris que vous êtes pressé ! Mais chaque champ est important !
                                </Alert>
                            )}
                        </form>
                    </>
                ) : (
                    
                    <Login/>
                )
                
            }

        </div>
    )
}

export default Register;