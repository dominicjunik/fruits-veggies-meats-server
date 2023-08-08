import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            {props.vegetables.map((vegetable, i)=> <p key={i}>{vegetable.name}</p>)}
        </div>
    )
}

export default Index;