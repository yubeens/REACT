import './App.css'
import PhoneForm from "./PhoneForm.jsx";
import PhoneList from "./PhoneList.jsx";
import axios from "axios";
import {useState} from "react";

function App() {
    const[datas,setData] = useState([]);

    //추가하기
    const insertPhone = (formData)=>{
        console.log("추가할 내용 : ", formData)
        axios.post("/api/insert", {
            name: formData.name,
            phone:formData.phone,
        }).then(res=>{
            console.log('등록 완료 : ',res);
            setData([...datas,res.data]);
        })
    }

  return (
      <div className="App">
          <h2>react11_phone_axios</h2>
          <PhoneForm insertPhone={insertPhone}/>
          <PhoneList datas={datas}/>
      </div>
  )
}
export default App
