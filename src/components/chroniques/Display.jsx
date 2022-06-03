import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import img1 from "../../images/img2.jpg";

const Display = () => {

    const {slug} = useParams();
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3001/chroniques/${slug}`)
            .then( response => response.json())
            .then( data => {setPosts(data)
            })
    }, )



    return (


        <div className="d-flex justify-content-center m-5">
           <div className="col-8">
               <div className="card shadow-sm">
                   <img src={img1}/>
                   <div className="card-body">
                       <h4>{posts.title}</h4>
                       <p>{posts.author}</p>
                       <p>{posts.gender}</p>
                       <p className="card-text">{posts.content}</p>
                   </div>
               </div>
           </div>

        </div>
    )
}

export default Display;