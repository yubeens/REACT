function Controller({handleSetCount,randomSetCount}){
    return(
        <div>
            <button onClick={()=>handleSetCount(-1)}>-1</button>
            <button onClick={()=>handleSetCount(-10)}>-10</button>
            <button onClick={()=>handleSetCount(-100)}>-100</button>
            <button onClick={()=>handleSetCount(100)}>+100</button>
            <button onClick={()=>handleSetCount(10)}>+10</button>
            <button onClick={()=>handleSetCount(1)}>+1</button>
            <button onClick={randomSetCount}>random</button>
        </div>

    )
}
export default Controller;