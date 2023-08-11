import React from "react"

function Index(props) {
    //props = { fruits }
    return(
        <div>
            <h1>Index</h1>
            <p>Other foor catagories: <a href="/meats">Meats</a> <a href="/vegetables">Vegetables</a></p>
            
            {props.fruits.map((fruit)=> <div key={fruit._id}><a href={`/fruits/${fruit._id}`}>{fruit.name}</a><br /></div>)}

            <form action="/fruits/search">
                <button>Search</button>
            </form>

            <form action="/fruits/new">
                <button>New</button>
            </form>
        </div>
    )
}

export default Index;