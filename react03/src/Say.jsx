import {useState} from "react";

const Say = () => {
    const [message, setMessage] = useState('안녕')
    const [color, setColor] = useState('black')
    const onClickEnter = () => {
        setMessage('반갑습니다')
        setColor('green')
    }
    const onClickLeave = () => {
        setMessage('안녕히 가세요')
        setColor('yellow')
    }

    const changeColor2= (color)=>{
        setColor(color)
    }
    const changeColor =(e)=>{
        // switch (e.target.name) {
        //     case 'red' :  setColor(e.target.name); break
        //     case 'blue' :  setColor(e.target.name); break
        //     case 'pink' :  setColor(e.target.name); break
        //     case 'black' :  setColor(e.target.name); break
        // }
        setColor(e.target.name);
    }
    return(
        <div>
            {/*입장이면  message 에 반갑습니다.*/}
            {/*퇴장이면 message 에 안녕히 가세요*/}
            <h1 style={{color}}>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={()=>changeColor2('red')}>빨간색</button>
            <button onClick={()=>changeColor2('blue')}>파란색</button>
            <button onClick={()=>changeColor2('pink')}>핑크색</button>
            <button onClick={()=>changeColor2('black')}>검정색</button>
            {/*<button name='red' onClick={changeColor}>빨간색</button>*/}
            {/*<button name='blue' onClick={changeColor}>파란색</button>*/}
            {/*<button name='pink' onClick={changeColor}>핑크색</button>*/}
            {/*<button name='black' onClick={changeColor}>검정색</button>*/}
        </div>
    )

}
export  default  Say;