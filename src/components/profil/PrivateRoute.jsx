import React from "react";
import { withAuthenticationRequired} from "@auth0/auth0-react";
import HomePage from "../../pages/HomePage";


const PrivateRoute = ({ component}) => {

    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <HomePage/>
    })

    return <Component/>;

}

export default PrivateRoute;