import './App.css';
import { useReducer,useRef } from "react";
import PhoneList from "./component/PhoneList.jsx";
import PhoneForm from "./component/PhoneForm.jsx";

// datas는 그대로 유지
const datas = [
    {
        id: 0,
        name: '홍길동',
        phone: '010-1111-1111'
    }, {
        id: 1,
        name: '이순신',
        phone: '010-2222-2222'
    }
];
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.newItem];
        case 'REMOVE':
            return state.filter(item => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, datas);
    const nextId = useRef(2);

    const handleCreate = (newData) => {
        dispatch({
            type: 'CREATE',
            newItem: {
                id: nextId.current,
                ...newData
            }
        });
        nextId.current += 1;
    };

    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE',
            targetId: id
        });
    };

    return (
        <div>
            <h2>전화번호부</h2>
            <PhoneForm onCreate={handleCreate} />
            <PhoneList data={data} onRemove={handleRemove} />
        </div>
    );
}


export default App;
