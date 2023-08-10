import React from "react";


// data is sent as ?name=bob&color=red&ready=true
// id matches the htmlFor in the label - name matches the key we send the data as 

export default function Edit({ fruit, index }) {
    let { name, color, readyToEat } = fruit
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/fruits/${index}?_method=PUT`} method="POST">

                <label htmlFor="name">Name:</label> <br />
                <input type='text' id='name' name='name' value={name}></input> <br /><br /><br />

                <label htmlFor='color'>Color:</label><br />
                <input type='text' id='color' name='color' value={color}></input> <br /><br /><br />

                <label htmlFor='ready'>Ready to Eat:</label>
                <input type='checkbox'id='ready' name='readyToEat' checked={readyToEat}></input><br /><br /><br />

                <button>Update</button>
            </form>

            <form action={`/fruits/${index}`}>
                <button>Back to Item</button>
            </form>

            <form action="/fruits">
                <button>Back to Index</button>
            </form>

            
        </div>
    )
}