import React from "react"

function Show(props) {
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {props.vegetable.name}</p>
            <p>Color: {props.vegetable.color}</p>
            <p>Ready to eat: {props.vegetable.readyToEat ? 'yes' : 'no'}</p>
        </div>
    )
}

export default Show;