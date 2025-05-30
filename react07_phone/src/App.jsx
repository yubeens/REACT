import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import {useRef, useState} from "react";


const mockDatas =[
    {
        id : 0,
        name : '홍길동',
        phone : '010-1111-1111'
    },{
        id : 1,
        name : '이순신',
        phone : '010-2222-2222'
    }
]

function App() {
    const idRef = useRef(2);
    const [datas, setDatas] = useState(mockDatas);


    //추가 - 입력내용(newdata)을 가지고 와서 datas에 추가
    const handleCreate = (newdata) => {
        console.log('handleCreate : ' + newdata)
        newdata.id = idRef.current++;
        setDatas([...datas, newdata]);
    }
    //삭제
    const handleRemove = (id) => {
        setDatas(datas.filter(item => item.id !== id));
    }
    //수정
    const handleChange = (phone) => {
        setDatas(datas.map(item => item.id === phone.id ? phone : item));
    }

    return(
        <div>
            <PhoneForm onCreate={handleCreate}/>
            <PhoneList datas={datas} onRemove={handleRemove} onChange={handleChange}/>
        </div>
    )
}

export default App
