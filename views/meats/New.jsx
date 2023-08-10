import React from "react";


// data is sent as ?name=bob&color=red&ready=true
// id matches the htmlFor in the label - name matches the key we send the data as 

export default function New() {
    return (
        <div>
            <h1>New</h1>
            <form action="/meats" method="POST">

                <label htmlFor="name">Name:</label> <br />
                <input type='text' id='name' name='name'></input> <br /><br /><br />

                <label htmlFor='state'>State:</label><br />
                <input type='text' id='state' name='state'></input> <br /><br /><br />

                <label htmlFor='ready'>Ready to Eat:</label>
                <input type='checkbox'id='ready' name='readyToEat'></input><br /><br /><br />

                <button>Submit</button>
            </form>
            
            <form action="/meats">
                <button>Back</button>
            </form>  
        </div>
    )
}