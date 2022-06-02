import React, {useState} from "react";

/**
 * Stockage d'un Token d'utilisateur avec sessionStorage et localStorage
 */
const useToken = () => {

    /**
     * On recupère le token d'utilisateur
     */
    const getToken = () => {
        const tokenString = localStorage.getItem('token'); //On enregistre le token de l'utilisateur
        const userToken = JSON.parse(tokenString); // On place notre token
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    /**
     * On sauveagarde le token de l'utilisateur
     */
    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;