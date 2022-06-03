import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import img1 from "../../images/img2.jpg";
import {Link} from "react-router-dom";
import Delete from "../delete/Delete";
import {useAuth0} from "@auth0/auth0-react";

const Chronique = ({title, author, gender, content, index}) => {

    const {isAuthenticated} = useAuth0();

    console.log("toto");

    return (
        <div className="col-lg-4">
            <div className="card shadow-sm">
                <img src={img1}/>
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{author}</p>
                    <p>{gender}</p>
                    <p className="card-text">{content}</p>
                    <Link to={`/display/${index}`} className="btn btn-primary">Afficher</Link>
                    <Link to={`/edit/${index}`} className="btn btn-primary">Modifier</Link>
                    {
                        isAuthenticated && (
                            <Delete index={index}/>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Chronique;