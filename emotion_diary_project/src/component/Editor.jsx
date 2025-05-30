import './Editor.css';
import {useCallback, useEffect, useState} from "react";
import {emotionList, getFormattedDate} from "../Util.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import EmotionItem from "./EmotionItem.jsx";

const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(initData.date)),
            });
        }
    }, [initData]);
    //사용자가 입력한 날짜 전달
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        })
    }
    //사용자가 작성한 일기를 state.content 프로퍼티에 저장
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        })
    }
    //작성완료 버튼기능
    const handleSubmit = () => {
        onSubmit(state);
    };
    //뒤로가기
    const handleOnGoBack = () => {
        navigate(-1);
    }
    //감정이미지 전달
    const handleChangeEmotion = useCallback((emotionId) => {
        setState((state)=> ({
            ...state,
            emotionId
        }))
    },[])

    return (
        <div className="Editor">
            <div className="editor_section">
                {/*날짜*/}
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                {/*감정*/}
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it)=>(
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id}/>
                    ))}
                </div>
            </div>
            <div className="editor_section">
                {/*일기*/}
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘은 어땠나요?"
                        value={state.content}
                        onChange={handleChangeContent}/>
                 </div>
            </div>
            <div className="editor_section bottom_section">
                {/*작성 완료, 취소*/}
                <Button text={"취소하기"} onClick={handleOnGoBack}/>
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
    )
}
export default Editor;