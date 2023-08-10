import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            <p>Other foor catagories: <a href="/meats">Meats</a> <a href="/fruits">Fruits</a></p>
            {props.vegetables.map((vegetable, i)=> <div key={i}><a href={`/vegetables/${i}`}>{vegetable.name}</a><br /></div>)}

            <form action="/vegetables/new">
                <button>New</button>
            </form>
        </div>
    )
}

export default Index;