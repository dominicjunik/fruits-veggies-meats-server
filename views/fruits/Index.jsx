import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            {props.fruits.map((fruit, i)=> <div key={i}><a href={`/fruits/${i}`}>{fruit.name}</a><br /></div>)}
        </div>
    )
}

export default Index;