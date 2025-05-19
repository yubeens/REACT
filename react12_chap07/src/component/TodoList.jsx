import './TodoList.css'
import TodoItem from "./TodoItem.jsx";
function TodoList({todo, onUpdate,onDelete}) {
    return (
        <div className={'TodoList'}>
            <h4>Todo List</h4>
            <div className={'list-wrapper'}>
                {
                    todo.map((item)=>(
                        <TodoItem key={item.id}
                            {...item}
                            onUpdate={onUpdate}
                            onDelete={onDelete}/>
                        // <div className={'list_item'} key={item.id}>{item.content}</div>
                    ))
                }

            </div>
        </div>
    )
}
export default TodoList;