import React from "react";

export default function New() {
    return (
        <div>
            <h1>New</h1>
            <form action="/fruits" method="POST">

{/* ?name=bob&color=red&ready=true */}
{/* id matches the htmlFor in the label - name matches the key we send the data as  */}

                <label htmlFor="name">Name</label>
                <input type='text' id='name' name='name'></input>

                <label htmlFor='color'>Color</label>
                <input type='text' id='color' name='color'></input>

                <label htmlFor='ready'>Ready to Eat</label>
                <input type='checkbox'id='ready' name='ready'></input>

                <button>Submit</button>
            </form>
        </div>
    )
}