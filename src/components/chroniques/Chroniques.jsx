import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const Chroniques = () => {
    return (
        <div className="container">
            <h1>Chroniques</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">

                    <div className="card shadow-sm">
                        <img src={img1}/>
                        <div className="card-body">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">Publié le 31 Mai 2022</small>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <img src={img2}/>
                        <div className="card-body">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">Publié le 31 Mai 2022</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card shadow-sm">
                        <img src={img3}/>
                        <div className="card-body">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">Publié le 31 Mai 2022</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chroniques;