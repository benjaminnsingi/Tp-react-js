import React from "react";
import {useAuth} from "../../context/Auth";
//import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useAuth();
   return (
       <Route  {...rest}
               render={props =>
                   isAuthenticated ? (
                       <Component {...props} />
                   ) : (
                       <Redirect to="/login" />
                   )
               }
       />
   )
}

export default PrivateRoute;