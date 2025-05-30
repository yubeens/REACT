import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import Editor from "../component/Editor.jsx";
import { useNavigate } from "react-router-dom";
import useDiaryStore from "../store/diaryStore";

function New() {
    const { create } = useDiaryStore();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const onSubmit = ({ date, content, emotionId }) => {
        create(date, content, emotionId);
        navigate("/", { replace: true });
    };

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
}

export default New;
