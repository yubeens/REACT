import {useState} from "react";


const Counter = () => {
    const [number,setNumber] = useState(0)
    const onIncrease = () => {
        setNumber(number+1)
    }
    const onDecrease = () => {
        setNumber(number-1)
    }
    const Change = (num) => {
        setNumber(number+num)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={()=>Change(2)}> 2증가</button>
            <button onClick={()=>Change(-2)}> 2감소</button>
        </div>
    )
}
export default Counter;