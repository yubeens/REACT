import './App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [datas, setDatas] = useState([]);
    // 추가하기
    const handleCreate = (newdata) => {
        console.log("handleCreate : " + newdata)
        axios.post('/api/phone/insert',newdata)
            .then((res) => {
            console.log("handleCreate res : " + res)
            alert('등록완료')
            setDatas([...datas, res.data])
        })
    }
    //전체보기
    const listPhone = () => {
        console.log('listPhone')
        axios.get('/api/phone/list')  // 주소를 백엔드에 맞게 수정
            .then((res) => {
                console.log("listPhone res:", res.data);
                setDatas(res.data);
            })
            .catch(err => {
                console.error("listPhone error:", err);
                alert("데이터를 불러오지 못했습니다.");
            });
    }
    useEffect(() => {
        listPhone();
    }, [])

    //삭제하기
    const deletePhone = (targetId) => {
        console.log('removePhone : ', targetId);
        axios.delete(`/api/phone/delete/${targetId}`)
            .then((res)=> {
                alert('삭제완료');
                setDatas(datas.filter((data) => data.id !== targetId));
            })
    }

    return (
        <div>
            <PhoneForm onCreate={handleCreate} />
            <PhoneList phoneList={datas} deletePhone={deletePhone} />
        </div>
    )
}

export default App
