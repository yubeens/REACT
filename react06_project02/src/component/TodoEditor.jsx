import './TodoEditor.css'
import {useRef, useState} from "react";

function TodoEditor({onCreate}) {
    const [content, setContent] = useState('')
    const  inputRef = useRef()
    //input  에 value 입력
    const  onChangeContent = (e)=>{
        setContent(e.target.value)
    }
    //추가버튼 클릭
    const  onSubmit = () =>{
        if(!content){//내용이 비어있다면 입력안됨
            inputRef.current.focus()
            return
        }
        onCreate(content)
        setContent('')
    }
    // 내용을 입력하고 엔터키를 누르면 추가가 되도록
    const onKeyDown = (e) => {
        if(e.keyCode === 13) { //엔터키면
            onSubmit()
        }
    }
    return(
        <div className='TodoEditor'>
            <h4> 새로운 Todo 작성하기</h4>
            <div className='editor_wrapper'>
                <input placeholder='새로운 Todo...'
                       ref={inputRef}
                       onChange={onChangeContent}
                       onKeyDown={onKeyDown}
                       value={content} />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )

}
export  default  TodoEditor