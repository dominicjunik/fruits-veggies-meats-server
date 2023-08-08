import React from "react"

function Filter({filtered}) {
    //props = { fruits }
    return(
        <div>
            <h1>Filter</h1>
            {filtered.map((meat, i)=> <div key={i}><hr /><h1>{meat.name}</h1><p>{meat.state}</p><p>{meat.readyToEat ? 'ready to eat' : 'not ready to eat'}</p><hr /></div>)}
        </div>
    )
}

export default Filter;