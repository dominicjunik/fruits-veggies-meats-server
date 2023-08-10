import React from "react"

function Show({fruit, index}) {
    let { name, color, readyToEat } = fruit
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>Ready to eat: {readyToEat ? 'yes' : 'no'}</p> <br />

            <form action={`/fruits/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>   
            </form>            
        </div>
    )
}

export default Show;