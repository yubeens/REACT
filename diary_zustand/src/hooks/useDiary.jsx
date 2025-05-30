import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDiaryStore from "../store/diaryStore";

const useDiary = (id) => {
    const data = useDiaryStore((state) => state.data);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            alert("삭제 되었습니다.");
            navigate("/", { replace: true });
        }
    }, [data, id, navigate]);

    return diary;
};

export default useDiary;
