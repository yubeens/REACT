import './TodoList.css'
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";
function  TodoList({todos, onDelete,onUpdate}) {
    console.log('TodoList  todos: ',todos)
    const [search,setSearch] = useState('')

    const onChangeSearch = (e) => {
        console.log('search : ', search)
        setSearch(e.target.value)
    }
    const getSearchResult = () => {
        return search ===""? todos
            :todos.filter((todo)=> todo.content.toLowerCase().includes(search.toLocaleLowerCase()))
    }
    return(
        <div className='TodoList'>
            <h4> Todo List</h4>
            <input className='searchbar'
                   placeholder='검색어를 입력하세요' value={search} onChange={onChangeSearch}/>
            <div className='list_wrapper'>
                <div>todolist</div>
                {
                    getSearchResult().map((todo)=>{
                        return(
                            <TodoItem key = {todo.id} {...todo}
                                        onDelete={onDelete}
                                        onUpdate={onUpdate}
                            />
                        )
                    })
                    /*todos.map((todo)=>{
                        return(
                            <TodoItem  key ={todo.id}
                                       {...todo}
                                       onDelete={onDelete}
                                       onUpdate={onUpdate}
                            />
                        )
                    })*/
                }
            </div>
        </div>
    )

}
export  default  TodoList