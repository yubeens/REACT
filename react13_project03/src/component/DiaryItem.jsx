import './DiaryItem.css'
import {getEmotionImgById} from "../Util.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
const DiaryItem = ({id, emotionId, content, date}) => {
    const navigate = useNavigate();
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div className='DiaryItem'>
            <div>
                <img src={getEmotionImgById(emotionId)} alt={`emotioin${emotionId}`}/>
            </div>
            <div className="info_section">
                <div className={'date_wrapper'}>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className={'content_wrapper'}>
                    {content.slice(0,25)}
                </div>
            </div>
            <div className="button_wrapper">
                <Button text={'수정하기'} onClick={goEdit}/>
            </div>
        </div>
    )
}
export default DiaryItem