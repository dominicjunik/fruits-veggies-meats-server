import React from "react"

function Show({vegetable, index}) {
    let { name, color, readyToEat } = vegetable
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>Ready to eat: {readyToEat ? 'yes' : 'no'}</p> <br />

            <form action={`/vegetables/${index}?_method=DELETE`} method='POST'>
                <button>Remove</button>   
            </form>            
        </div>
    )
}

export default Show;