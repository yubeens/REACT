import './DiaryList.css'
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem.jsx";

const sortOptionList = [
    {value : "latest", name : "최신순"},
    {value : "oldest", name : "오래된 순"}
]
const DiaryList = ({data}) => {
    const navigate = useNavigate();
    const onClickNew = () => {
        navigate("/new");
    }
    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select>
                        {
                            sortOptionList.map((item,index) => (
                                <option key={index} value={item.value}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew} />
                </div>
            </div>
            <div className={'list_wrapper'}>
                {
                    data.map(item => (
                        <DiaryItem key={item.id} {...item}/>
                        // <div key={index}>{item.id}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default DiaryList