import {useState} from "react";


function Viewer({number}){
    return <div>{number%2 ===0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
}

function Body1(){
    const[number, setNumber]=useState(0) //초기값

    const onIncrease = () => {
        setNumber(prev => prev + 1);
    }

    const onDecrease = () => {
        setNumber(prev => prev - 1);
    }

    const onRandom = (num) => {
        setNumber(num)
    }

    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number}/>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
                <button onClick={()=>onRandom(parseInt(Math.random()*100) + 1)}>랜덤</button>
            </div>
        </div>
    )
}
export default Body1;