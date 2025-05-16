import './App.css'
import BoardForm from "./BoardForm.jsx";
import BoardList from "./BoardList.jsx";
import {useRef, useState} from "react";
import BoardItem from "./BoardItem.jsx";

function App() {
    const [boards, setBoard] = useState([])
    let idRef = useRef(1)
    // 추가
    const insertBoard = (formData) =>{
        console.log('app insertBoard :', formData)
        setBoard([...boards, {id:idRef.current, ...formData}])
        idRef.current +=1;
    }

    //삭제
    const removeBoard = (targetId) => {
        setBoard(boards.filter((board)=> board.id !== targetId))
        //     아이디값이 있어야함 그래야 board에서 그 값을 없앰
    }


    return (
        <div>
            <h1>React10 Board</h1>
            <hr/>
            <BoardForm insertBoard = {insertBoard}/>
            <BoardList boards = {boards}
            removeBoard = {removeBoard}/>

        </div>

    )
}

export default App
