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
        </div>
    )
}

export default NavBar;