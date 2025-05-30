import './TodoItem.css'
import useTodoStore from "../store/store.jsx";
const TodoItem = ({todo}) => {
    const removeTodo = useTodoStore((state)=>state.removeTodo)
  return(
      <div className={'TodoItem'}>
          <div className={'title_col'}>{todo.content}</div>
          <div className={'date_col'}>{new Date(todo.createdDate).toLocaleDateString()}</div>
          <div className={'btn_col'}>
              <button onClick={()=>removeTodo(todo)}>삭제</button>
              <button>수정</button>
          </div>
      </div>
  )
}
export default TodoItem;