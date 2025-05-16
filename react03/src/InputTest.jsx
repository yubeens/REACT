import {useState} from "react";


const InputTest = () => {
    const [inputText, setText] = useState('')
    const textChange = (e)=>{
        setText(e.target.value)
    }
    const onReset = () =>{
        setText('')
    }
    return(
        <div>
            <input placeholder="내용입력"
                   onChange={textChange}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>{inputText} </b>
            </div>
        </div>
    )
}

export  default  InputTest;