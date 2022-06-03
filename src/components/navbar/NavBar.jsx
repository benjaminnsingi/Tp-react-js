import React from "react";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const NavBar = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div className="navbar">
            <Link to="/">Chroflix</Link>
            <Link to="/chroniques">Chroniques</Link>
            <Link to="/about">A propos</Link>
            {
                isAuthenticated && (
                  <>
                      <Link to="/profil">Profil</Link>
                      <Link to="/ajout">Ajout d'un chronique</Link>
                      <Link onClick={() => logout()} to={logout}>Deconnexion</Link>
                  </>
                )
            }
            {
                !isAuthenticated && (
                    <>
                        <Link onClick={() => loginWithRedirect()} to={loginWithRedirect}>Connexion</Link>
                    </>
                )
            }
        </div>
    )
}

export default NavBar;