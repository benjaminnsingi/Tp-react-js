import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {useAuth0} from "@auth0/auth0-react";
const Profile = () => {

   const {user,isAuthenticated} = useAuth0();
   console.log(user);

    return (
       isAuthenticated && (
           <div className="container">
               <h1>Profile</h1>
               <div className="d-flex justify-content-center">
                   <div className="col-lg-4">
                       {user ?.picture && <img src={user.picture} alt={user?.name}/>}
                       <h2 className="text-center">Bonjour {user?.name}</h2>
                       <p>{user.email}</p>
                   </div>

               </div>
           </div>
       )
    )
}

export default Profile;