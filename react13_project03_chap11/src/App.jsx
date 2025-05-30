
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import React, {useEffect, useReducer, useRef, useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INIT": {
            return action.data
        }
        case "CREATE": {
            const newState = [action.data,...state];
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        case "UPDATE": {
            const newState = state.map((it)=>
                String(it.id)===String(action.data.id)? {...action.data}  : it
            );
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        case "DELETE":{
            const newState = state.filter(
                (it)=>String(it.id)!==String(action.targetId)
            );
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        default: return state;
    }

}
export const DiaryStateContext =  React.createContext();
export const DiaryDispatchContext =  React.createContext();
function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data,dispatch] = useReducer(reducer,[])
    const  idRef = useRef(0);
    useEffect(() => {
        const rawData = localStorage.getItem("diary");
        if(!rawData){
            setIsDataLoaded(true);
            return;
        }
        const localData = JSON.parse(rawData);
        if (localData.length ===0){
            setIsDataLoaded(true);
            return;
        }
        localData.sort((a,b)=>Number(b.id) -Number(a.id)); //id로 내림차순
        idRef.current = localData[0].id + 1;
        dispatch({type: "INIT", data:localData});
        setIsDataLoaded(true);
    },[])
    //추가
    const onCreate = (date, content, emotionId) => {
        console.log("app onCreate content : ", content)
        console.log("app onCreate date : ", date)
        console.log("app onCreate emotionId : ", emotionId)
        dispatch({
            type: "CREATE",
            data : {
                id : idRef.current,
                date : new Date(date).getTime(),
                content,
                emotionId
            }
        })
        idRef.current += 1;
    }
    //수정
    const onUpdate = (targetId,date, content,emotionId) => {
        dispatch({
            type: "UPDATE",
            data : {
                id:targetId,
                date : new Date(date).getTime(),
                content,
                emotionId
            }
        })
    }
    //삭제
    const onDelete = (targetId) => {
        console.log("app onDelete id : ", targetId);
        dispatch({
            type : "DELETE",
            targetId
        })
    }
    if(!isDataLoaded){
        return <div>데이터를 불러오는 중입니다.</div>
    }else{
        return (
            <DiaryStateContext.Provider value={ data }>
                <DiaryDispatchContext.Provider
                    value={{onCreate, onUpdate, onDelete}}>
                    <div className="App">
                        <Routes>
                            <Route  path={'/'} element={<Home />} />
                            <Route path={'/new'} element={<New />} />
                            <Route path={'/diary/:id'} element={<Diary />} />
                            <Route path={'/edit/:id'} element={<Edit />} />
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>

        )
    }
}
export default App
