
import './App.css'
import Header from "./component/Header.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";
import {useRef, useState} from "react";
const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime(),
    }
];
function App() {
    const [todos, setTodo] = useState(mockTodo)
    const idRef = useRef(3)
    console.log('app : ', todos)
    //추가
    const onCreate = (content) => {
        //추가할 내용인 content setTodo를 이용해서 todos 내용 변경
        console.log('app onCreate 추가될 내용 : ',content)
        const  newItem = {
            id: idRef.current,
            isDone: false,
            content: content,
            createdDate: new Date().getTime(),
        }
        console.log('app onCreate 추가될 newItem : ',newItem)
        setTodo([newItem,...todos])
        idRef.current +=1
    }
    //삭제 ===> 삭제할  id(targetId)를 받아와서
    //      그  id의 내용을 보여주지 않기
    const onDelete = (targetId) => {
        console.log("app  onDelete targetId :", targetId)
        setTodo(todos.filter((todo)=> todo.id !== targetId))
    }
    //수정==>수정할 id(targetId)를 받아와서
    //       그 해당 체크박스 체크여부 변경
    const onUpdate = (targetId) => {
        console.log("app  onUpdate targetId :", targetId)
        setTodo(
            todos.map((it)=>(
                it.id === targetId ? {...it, isDone: !it.isDone} : it
            ))
        )
    }
    return(
        <div className='App'>
            <Header />
            <TodoEditor onCreate = {onCreate}/>
            <TodoList  todos = {todos}
                       onDelete={onDelete}
                       onUpdate = {onUpdate}/>
        </div>
    )
}
export default App
