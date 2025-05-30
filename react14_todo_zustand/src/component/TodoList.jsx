import './TodoList.css'
import useTodoStore from "../store/store.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
    const todos = useTodoStore((state)=>state.todos)
    console.log('TodoList todos : ', todos)
    return (
        <div className={'TodoList'}>
            <h4>TodoList</h4>
            {
                todos.map((todo)=>(
                    <TodoItem key = {todo.id} todo={todo} />
                ))
                // todos.map((todo)=>(
                //     <div>{todo.id} / {todo.content} / {new Date(todo.createdDate).toLocaleDateString()}</div>
                // ))
            }
        </div>
    )
}
export default TodoList