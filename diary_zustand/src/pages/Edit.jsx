import Header from "../component/Header.jsx";
import Editor from "../component/Editor.jsx";
import Button from "../component/Button.jsx";
import { useNavigate, useParams } from "react-router-dom";
import useDiaryStore from "../store/diaryStore";
import useDiary from "../hooks/useDiary";

const Edit = () => {
    const { update, remove } = useDiaryStore();
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useDiary(id);

    const goBack = () => navigate(-1);

    const onClickDelete = () => {
        if (confirm("정말 삭제할까요? 복구되지 않아요!")) {
            remove(id);
            navigate("/");
        }
    };

    const onSubmit = ({ date, content, emotionId }) => {
        if (confirm("일기를 정말 수정할까요?")) {
            update(id, date, content, emotionId);
            navigate("/", { replace: true });
        }
    };

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
                rightChild={
                    <Button type={"negative"} text={"삭제"} onClick={onClickDelete} />
                }
            />
            <Editor initData={data} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;
