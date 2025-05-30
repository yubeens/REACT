import './App.css'
import Header from "./component/Haeder.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <TodoEditor />
            <TodoList />
        </div>
    )
}
export default App
