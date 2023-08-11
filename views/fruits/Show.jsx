import React from "react"

function Show({fruit}) {
    let { name, color, readyToEat, _id } = fruit
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>Ready to eat: {readyToEat ? 'yes' : 'no'}</p> <br />

            <form action={`/fruits/${_id}?_method=DELETE`} method='POST'>
                <button>Remove</button>   
            </form>

            <form action={`/fruits/${_id}/edit`}>
                <button>Edit</button>
            </form>   

            <form action="/fruits">
                <button>Back</button>
            </form>            
        </div>
    )
}

export default Show;