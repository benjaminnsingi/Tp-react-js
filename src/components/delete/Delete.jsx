import React from "react";

const Delete = ({index}) => {

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
        <>
            <button className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
        </>
    )
}

export default Delete;