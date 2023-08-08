import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            {props.meats.map((meat, i)=> <p key={i}>{meat.name}</p>)}
        </div>
    )
}

export default Index;