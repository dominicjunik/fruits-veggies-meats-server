import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            <p>Other foor catagories: <a href="/fruits">Fruits</a> <a href="/vegetables">Vegetables</a></p>
            {props.meats.map((meat, i)=> <div key={i}><a href={`/meats/${i}`}>{meat.name}</a><br /></div>)}

            <form action="/meats/new">
                <button>New</button>
            </form>
        </div>
    )
}

export default Index;