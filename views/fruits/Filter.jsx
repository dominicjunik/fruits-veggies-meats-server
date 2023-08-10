import React from "react"

function Filter({filtered}) {
    //props = { fruits }
    return(
        <div>
            <h1>Filter</h1>
            {filtered.map((fruit, i)=> <div key={i}><hr /><h1>{fruit.name}</h1><p>{fruit.color}</p><p>{fruit.readyToEat ? 'ready to eat' : 'not ready to eat'}</p><hr /></div>)}

            <form action="/fruits/search">
                <button>Back</button>
            </form>  
        </div>
    )
}

export default Filter;