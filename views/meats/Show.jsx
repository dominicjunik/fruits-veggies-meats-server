import React from "react"

function Show({meat, index}) {
    let { name, state, readyToEat } = meat
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>State: {state}</p>
            <p>Ready to eat: {readyToEat ? 'yes' : 'no'}</p> <br />

            <form action={`/meats/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>   
            </form>

             <form action={`/meats/${index}/edit`}>
                <button>Edit</button>
            </form>   

            <form action="/meats">
                <button>Back</button>
            </form>             
        </div>
    )
}

export default Show;