import './App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";

function App() {
    return (
        <div>
            <h2>전화번호부</h2>
            <PhoneForm />
            <PhoneList />
        </div>
    )
}
export default App;