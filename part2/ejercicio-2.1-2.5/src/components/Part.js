import React from "react";

const Part = ({parts}) => {
    return (
        <div>
            {parts.map(p => <p key={p.id}>{p.name} {p.exercises}</p>)}
        </div>
    )
}

export default Part