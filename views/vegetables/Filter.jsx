import React from "react"

function Filter({filtered}) {
    //props = { fruits }
    return(
        <div>
            <h1>Filter</h1>
            {filtered.map((vegetable, i)=> <div key={i}><hr /><h1>{vegetable.name}</h1><p>{vegetable.color}</p><p>{vegetable.readyToEat ? 'ready to eat' : 'not ready to eat'}</p><hr /></div>)}
        </div>
    )
}

export default Filter;