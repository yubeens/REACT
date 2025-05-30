import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import {useRef, useState} from "react";

const mockDatas = [
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
    const [datas, setDatas] =useState(mockDatas)
    const idRef = useRef(2)
    //추가 - 입력 내용(newdata)을 가지고 와서 datas에 추가
    const handleCreate = (newdata) =>{
        newdata.id = idRef.current++;
        console.log('handleCreate : ', newdata)
        setDatas([newdata, ...datas])
    }
//삭제  ==> 전달받은  id 객체를 삭제
    const handleRemove =(targetId) =>{
        setDatas(
            datas.filter(it=>it.id  !==targetId  )
        )
    }
//수정 ==>
    const handleUpdate = (updateData) => {
        console.log("app handleUpdate data :" ,updateData)
        setDatas(
            datas.map((data)=>(
                (data.id === updateData.id)? updateData :  data
            ))
        )
    }

    return(
        <div>
            <PhoneForm onCreate = {handleCreate} />
            <PhoneList  datas = {datas}
                        onDelete = {handleRemove}
                        onUpdate = {handleUpdate}/>

        </div>
    )
}

export default App
