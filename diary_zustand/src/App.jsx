import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import React, { useEffect, useState } from "react";
import useDiaryStore from "./store/diaryStore";
import { mockData } from "./store/diaryStore";

const App = () => {
    const { data, setData, create, update, remove } = useDiaryStore();
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        localStorage.removeItem("diary");
        const localData = localStorage.getItem("diary");
        if (localData) {
            setData(JSON.parse(localData));
        } else {
            setData(mockData);
        }
        setIsDataLoaded(true);
    }, []);

    useEffect(() => {
        if (isDataLoaded) {
            localStorage.setItem("diary", JSON.stringify(data));
        }
    }, [data, isDataLoaded]);

    if (!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다.</div>;
    }

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/new'} element={<New />} />
                <Route path={'/diary/:id'} element={<Diary />} />
                <Route path={'/edit/:id'} element={<Edit />} />
            </Routes>
        </div>
    );
};

export default App;
