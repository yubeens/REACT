import {DiaryStateContext} from "../App.jsx";
import Header from "../component/Header.jsx";
import {useContext, useState} from "react";
import Button from "../component/Button.jsx";
import DiaryList from "../component/DiaryList.jsx";

function Home(){
    const data = useContext(DiaryStateContext)
    const [pivotDate, setPivotDate] = useState(new Date());
    const haederTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }
    return (
        <div>
            <Header title={haederTitle}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}/>
            <DiaryList data={data}/>
        </div>
    )
}
export default Home