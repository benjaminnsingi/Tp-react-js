import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import FlashMessage from "react-flash-message";


const Edite = () => {

    console.log('toto');

    const options = [
        {
            label: "Aventure",
            value: "Aventure",
        },
        {
            label: "Romance",
            value: "Romance",
        },
        {
            label: "Comedie",
            value: "Comedie",
        },
        {
            label: "Science-fiction",
            value: "Science-fiction",
        },
        {
            label: "Fantastique",
            value: "Fantastique",
        },
        {
            label: "Horreur",
            value: "Horreur",
        },
        {
            label: "Animation",
            value: "Animation",
        },
    ];

    console.log(options);



    const [inputTitle, setInputTitle ] = useState("");
    const [inputAuthor, setInputAuthor ] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputGender, setInputGender] = useState("");
    const [status, setStatus] = useState(false);


    const {slug} = useParams();
    console.log(slug);

    useEffect(()=> {
        fetch(`http://localhost:3001/chroniques/${slug}`)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                setInputTitle(data.title)
                setInputAuthor(data.author)
                setInputGender(data.gender)
                setInputDescription(data.content)
            })
    }, )

    const handleEdit = (e) => {
        e.preventDefault();
        setStatus(true)

        const chronique = {
            title: inputTitle,
            author: inputAuthor,
            gender: inputGender,
            content: inputDescription
        }

        fetch(`http://localhost:3001/chroniques/${slug}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chronique)

            })
            .then(response => {
                console.log(response)
            })

        //console.log(e)
    }





     return (<div>
         <h1>Page de modification de chronique</h1>
         <form onSubmit={handleEdit}>
             {status && (
                 <FlashMessage duration={5000}>
                     <div className="alert alert-success">Votre poste a bien été modifié</div>
                 </FlashMessage>
             )}
             <div className="mb-3">
                 <label htmlFor="title" className="form-label">Titre</label>
                 <input type="text" className="form-control" onChange={e => setInputTitle(e.target.value)} value={inputTitle}/>
             </div>
             <div className="mb-3">
                 <label htmlFor="title" className="form-label">Auteur</label>
                 <input type="text" className="form-control" onChange={e => setInputAuthor(e.target.value)} value={inputAuthor}/>
             </div>
             <div className="mb-3">
                 <select className="form-select" aria-label="Genre" onChange={e => setInputGender(e.target.value)}>
                     {options.map((option,index) => (
                         <option key={index} value={option.value}>{option.label}</option>
                     ))}
                 </select>
             </div>
             <div className="mb-3">
                 <label htmlFor="description" className="form-label">Description</label>
                 <textarea className="form-control" rows="3" onChange={e => setInputDescription(e.target.value)} value={inputDescription}></textarea>
             </div>
             <button type="submit" className="btn btn-primary">Modifier</button>
         </form>
     </div>)
}


export default Edite;
