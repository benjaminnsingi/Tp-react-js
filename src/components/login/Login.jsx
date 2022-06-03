import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const Login = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <a onClick={() => loginWithRedirect()} className="text-primary">
                Se connecter
            </a>
        )
    )
}

export default Login;