import React, {Fragment} from "react";
import Slider from "../carousel/Slider";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {

    return (
       <Fragment>
           <div className="container">
               <div className="row">
                   <div className="col">
                       <Slider/>
                   </div>
                   <div className="col-lg-4">
                       <h1>
                           Bienvenue dans chroflix
                       </h1>
                       <p>
                           postez et lisez des
                           chroniques autant que vous voulez
                       </p>
                   </div>
               </div>
           </div>
       </Fragment>
    )
}

export default Home;