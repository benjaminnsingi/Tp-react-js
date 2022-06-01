import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

const Ajout = () => {

    const [inputTitle, setInputTitle ] = useState("");
    const [inputAuthor, setInputAuthor ] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputGender, setInputGender] = useState("");

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
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputTitle("");
        setInputAuthor("");
        setInputGender("")
        setInputDescription("");

        console.log(e)
    }

    return (
        <div className="container">
            <h1>Ajout de chronique</h1>
            <p>Titre: {inputTitle}</p>
            <p>Auteur: {inputAuthor}</p>
            <p>Genre: {inputGender}</p>
            <p>Description: {inputDescription}</p>
            <form onSubmit={handleSubmit}>
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
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" rows="3" onChange={e => setInputDescription(e.target.value)} value={inputDescription}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Sauvegarder</button>
            </form>
        </div>
    )
}

export default Ajout;