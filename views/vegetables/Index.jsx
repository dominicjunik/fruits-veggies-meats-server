import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            {props.vegetables.map((vegetable, i)=> <div key={i}><a href={`/vegetables/${i}`}>{vegetable.name}</a><br /></div>)}
        </div>
    )
}

export default Index;