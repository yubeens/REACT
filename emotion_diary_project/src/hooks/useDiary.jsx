import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext)
    const [diary,setDairy] = useState()
    const navigate = useNavigate();
    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id))
        if (matchDiary) {
            setDairy(matchDiary)
        }else{
            alert("일기가 존재하지 않습니다.")
            navigate("/", {replace : true})
        }
    },[])
    return diary
}
export default useDiary;