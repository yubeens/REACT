import './App.css'
import BoardForm from "./BoardForm.jsx";
import BoardList from "./BoardList.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const[boards,setBoard]=useState([]);
    //받아 온 내용 추가하기
    const insertBoard = (formData) => {
        console.log("추가할 내용 : ", formData)
        axios.post("/api/insert", {
            title: formData.title,
            content: formData.content,
        }).then(res=>{
            console.log('등록 완료 : ',res);
            setBoard([...boards,res.data])
        })
    }
    //전체보기
    const listBoard = () => {
        //DB로 부터 데이터를 가져와 boards에 넣기
        axios.get('/api/list')
            .then((res)=>{
                console.log('전체보기 :',res);
                setBoard(res.data);

            })
    }
    //삭제
    const removeBoard = (targetNum) => {
        axios.delete(`/api/delete/${targetNum}`)
            .then(()=>{
                alert('삭제성공')
                setBoard(boards.filter(board=>board.num !==targetNum))
            })

    }

    //시작하자마자 부르기
    useEffect(()=>{
        listBoard()
    },[]) //바뀔때마다 부르기 []

  return (
    <div className="App">
        <h2>react10_board_axios</h2>
        <BoardForm insertBoard={insertBoard}/>
        <BoardList boards={boards} removeBoard={removeBoard}/>

    </div>
  )
}

export default App
