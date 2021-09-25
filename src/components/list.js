import React from 'react'
function List(){
    const li=["hi","this","is","ismail"]
    const Li1=[{
        id:1,
        name:"ismail",
        roll:45
    },
    {
        id:2,
        name:"ismail 2",
        roll:46
    }]
    const hi=Li1.map(Li1=><h1>
        reddy = {Li1. id}
        re = {Li1. name}
        r = {Li1. roll}
    </h1>)
    const list=li.map(li=><h1>{li}</h1>)
return(
    <div>
        {list}
        {hi}
    </div>
)
}
export default List