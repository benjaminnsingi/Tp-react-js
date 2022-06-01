import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import img1 from "../../images/img2.jpg";
import {Link, useParams} from "react-router-dom";

const Chronique = ({title, author, gender, content, index}) => {

    const handleDelete = () => {

        console.log(index);

        fetch(`http://localhost:3001/chroniques/${index}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },

            })
            .then(response => {
                response.text()
                location.reload()})
            .then(response => console.log(response))
    }



    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card shadow-sm">
                    <img src={img1}/>
                    <div className="card-body">
                        <h4>{title}</h4>
                        <p>{author}</p>
                        <p>{gender}</p>
                        <p className="card-text">{content}</p>
                        <button className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
                        <Link to={`/display/${index}`} className="btn btn-primary">Afficher</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chronique;