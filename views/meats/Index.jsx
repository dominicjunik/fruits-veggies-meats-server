import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            {props.meats.map((meat, i)=> <div key={i}><a href={`/meats/${i}`}>{meat.name}</a><br /></div>)}
        </div>
    )
}

export default Index;