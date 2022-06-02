import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/">Chroflix</Link>
            <Link to="/chroniques">Chroniques</Link>
            <Link to="/about">A propos</Link>
            <Link to="/profil">Profil</Link>
            <Link to="/ajout">Ajout d'un chronique</Link>
            <Link to="/register">Inscription</Link>
            <Link to="/login">Se connecter</Link>
        </div>
    )
}

export default NavBar;