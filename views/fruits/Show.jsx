import React from "react"

function Show(props) {
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {props.fruit.name}</p>
            <p>Color: {props.fruit.color}</p>
            <p>Ready to eat: {props.fruit.readyToEat ? 'yes' : 'no'}</p>
        </div>
    )
}

export default Show;