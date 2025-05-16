import {useRef, useState} from "react";

function Body({children}){
    const [state,setState] = useState({
        name: '',
        gender: '',
        birth: '',
        bio: ''
    })
    const handleOnChange2 = (e) => {
        console.log("현재 수정 대상 :", e.target.name)
        console.log("현재 수정 값 :", e.target.value)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    let {name,gender,birth,bio} = state
    /////
    const [text,setText] = useState('aaaaa')
    const textRef = useRef()
    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleOnClick = () => {
        if(text.length < 5){
            //alert('5보다 작음')
            textRef.current.focus()
        }else{
            alert(text)
            setText('')
        }
    }
    /////

    return(
        <div>
            <div>
                <input name="name" placeholder='이름'
                        onChange={handleOnChange2}/>
            </div>
            <div>
                <select name="gender" onChange={handleOnChange2}>
                    <option></option>
                    <option>남성</option>
                    <option>여성</option>
                </select>
            </div>
            <div>
                <input name='birth' type='date' onChange={handleOnChange2}/>
            </div>
            <div>
                <textarea name='bio' onChange={handleOnChange2}></textarea>
            </div>
            {/*<h3>{state.name} // {state.gender} // {state.birth} //{state.bio}</h3>*/}
            <h4>{name} // {gender} // {birth} // {bio}</h4>
            <button onClick={handleOnClick}>작성완료</button><p/>
            <input onChange={handleOnChange} ref={textRef}/>
            <div>{text}</div>
            <hr/>
            <div>{children}</div>
        </div>
    )
}
export default Body