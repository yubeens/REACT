import './TodoEditor.css'
import {useState} from "react";
function TodoEditor({onCreate}){
    const [content, setContent] = useState('');
    //입력내용 초기화
    const onChangeContent = (e) => {
        console.log('onChangeContent : ' + e.target.value);
        setContent(e.target.value);
    }
    //추가
    const onSubmit = () => {
        onCreate(content);
        setContent('');
    }
    return  (
        <div className={'TodoEditor'}>
            <h4>새로운 Todo 작성하기</h4>
            <input type='text'
                   value={content}
                   placeholder={'새로운 Todo...'}
                   onChange={onChangeContent}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}
export default TodoEditor