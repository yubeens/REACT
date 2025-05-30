import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import React, {useEffect, useReducer, useState} from "react";
import axios from "axios";

function reducer(state, action) {
    switch (action.type) {
        case "INIT": {
            return action.data
        }
        case "CREATE": {
            return [action.data, ...state];
        }
        case "UPDATE": {
            return state.map((it) =>
                String(it.id)===String(action.data.id)? {...action.data}  : it
            )
        }
        case "DELETE":{
            return state.filter((it)=>String(it.id)!==String(action.targetId))
        }
        default: return state;
    }

}
export const DiaryStateContext =  React.createContext();
export const DiaryDispatchContext =  React.createContext();

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data,dispatch] = useReducer(reducer,[])


    useEffect(() => {
        axios.get('api/diary/list')
            .then((resp) => {
                console.log('axios list : ', resp.data);
                dispatch({ type: 'INIT', data: resp.data });
                setIsDataLoaded(true);
            });
    }, []);

    //추가
    const onCreate = (date, content, emotionId) => {
        axios.post('api/diary/insert', {
            date, content, emotionId
        }).then((resp) => {
            console.log("onCreate response:", resp.data);
            dispatch({
                type: 'CREATE',
                data: resp.data
            })
        })
    };
    //수정
    const onUpdate = (targetId, date, content,emotionId) => {
        axios.put(`/api/diary/update/${targetId}`, {
            id: targetId, date, content, emotionId})
            .then((resp) => {
            dispatch({
                type: 'UPDATE',
                data: { id: targetId, date, content, emotionId }
            })
        })
    }
    //삭제
    const onDelete = (targetId) => {
        axios.delete(`api/diary/delete/${targetId}`)
            .then(() => {
                dispatch({
                    type: 'DELETE',
                    targetId
                });
            });
    };
    if(!isDataLoaded){
        return <div>데이터를 불러오는 중입니다.</div>
    }else{
        return (
            <DiaryStateContext.Provider value={ data }>
                <DiaryDispatchContext.Provider
                    value={{onCreate, onUpdate, onDelete}}>
                    <div className="App">
                        <Routes>
                            <Route path={'/'} element={<Home />} />
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
