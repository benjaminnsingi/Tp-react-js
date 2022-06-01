import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState} from "react";
import "../../App.css"
import Chronique from "./Chronique";

const Chroniques = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:3001/chroniques")
            .then(response => {
                return response.json()
            })
            .then(data => {
                //console.log(data);
                setPosts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
            <div>
                <h1>Chroniques</h1>
                {
                    posts.map(
                        (post, index) => (
                            <Chronique key={index} index={post.id} title={post.title} author={post.author} gender={post.gender} content={post.content}/>
                        )
                    )
                }
            </div>
    )
}

export default Chroniques;