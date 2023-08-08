import React from "react"

function Show(props) {
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {props.meat.name}</p>
            <p>State: {props.meat.state}</p>
            <p>Ready to eat: {props.meat.readyToEat ? 'yes' : 'no'}</p>
        </div>
    )
}

export default Show;