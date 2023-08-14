import React from "react"
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {
    //props = { fruits }
    return(
        <DefaultLayout title='Index View'>
            <div>
                <h1>Index</h1>
                <p>Other foor catagories: <a href="/meats">Meats</a> <a href="/vegetables">Vegetables</a></p>
                
                {props.fruits.map((fruit)=> <div key={fruit._id}><a href={`/fruits/${fruit._id}`}>{fruit.name}</a><br /></div>)}

                <form action="/fruits/search">
                    <button>Search</button>
                </form>

                <form action="/fruits/new">
                    <button>New</button>
                </form><br />

                <form action="/fruits/seed" method='POST'>
                    <button>Seed</button>
                </form>

                <form action={`/fruits/clear?_method=DELETE`} method='POST'>
                    <button>Clear</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Index;