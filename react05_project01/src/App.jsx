import './App.css'
import Viewer from "./Componnet/Viewer.jsx";
import Controller from "./Componnet/Controller.jsx";
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    // 얘 이름은 state인데 function안에선 hook이라 부름
    // 얘에 값을 담아야 컴포넌트끼리 값을 주고받을 수 있음
    let handleSetCount = (num) => {
        setCount(count + num)
    //     얘가 setter임 setter만 써댜댐
    }
    let randomSetCount = () => {
        setCount(Math.floor(Math.random()*1000)-500)
    }
    const [text, setText] = useState("")
    const handleChangeText = (e) => {
        setText(e.target.value)

    }

    //useEffent(콜백함수, 배열)
    useEffect(() => {
        console.log('업데이터:', text, count)
    }, [count,text]);

    return(
        <div>
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleChangeText}/>
            </section>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller handleSetCount={handleSetCount}
                randomSetCount={randomSetCount}/>
            </section>

        </div>
    )
}

export default App
