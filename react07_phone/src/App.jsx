import './App.css';
import { useState } from "react";
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

function App() {
    const [data, setData] = useState(datas); // 상태로 복사해서 사용
    const [nextId, setNextId] = useState(2);

    // 추가
    const handleCreate = (newData) => {
        setData([...data, { id: nextId, ...newData }]);
        setNextId(nextId + 1);
    };

    // 삭제
    const handleRemove = (id) => {
        setData(data.filter(item => item.id !== id));
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
