import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Display = ({title, author, gender, content, index}) => {

     const {slug} = useParams();
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3001/chroniques/${slug}`)
            .then( response => response.json())
            .then( data => {setPosts(data)
            })
    }, )



    return (
        <div className="display__post">
            <ul className="chronique__content">
                <li>{posts.title}</li>
                <li>{posts.author}</li>
                <li>{posts.gender}</li>
                <li>{posts.content}</li>
            </ul>
        </div>
    )
}

export default Display;