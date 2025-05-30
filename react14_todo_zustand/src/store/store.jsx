import {create} from "zustand";

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
    },
];

const useTodoStore = create((set,)=>({
    todos : mockTodo,
    addTodo : (newTodo)=>set((state)=>({
        todos : [...state.todos, newTodo]
    })),
    removeTodo:(removeTodo)=>set((state)=>({
        todos : state.todos.filter((todo)=>todo!==removeTodo)
    }))
}))

export default useTodoStore