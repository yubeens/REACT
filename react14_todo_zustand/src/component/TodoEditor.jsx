import './TodoEditor.css'
import useTodoStore from "../store/store.jsx";
import {useRef, useState} from "react";

const TodoEditor = () => {
    const addTodo = useTodoStore((state)=>state.addTodo)
    const [content, setContent] = useState('')
    const inputRef = useRef(3);
    const onChangeContent = (e) => {
      setContent(e.target.value)
    }

    //추가버튼 클릭
    const onSubmit = () => {
        if(!content) { //내용이 비어있다면...
            inputRef.current.focus()
            return
        }
        const newItem = {
          id: inputRef.current,
          isDone: false,
          content: content,
          createdDate: new Date().getTime()
        }
        inputRef.current += 1
        addTodo(newItem)
        setContent('')
    }
    //엔터키 누르면 추가
    const onKeyDown = (e) => {
        if(e.keyCode == 13){
            onSubmit()
        // if (e.key === 'Enter') {
        //     onSubmit()
        }
    }

    return (
        <div className={'TodoEditor'}>
            <h4>새로운 Todo 작성하기</h4>
            <div className={'editor_wrapper'}>
                <input placeholder={'새로운 Todo...'}
                ref={inputRef}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                value={content}/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
export default TodoEditor