import {useState} from "react";

function BoardForm({insertBoard}) {

    const[formData,setFormData]= useState({
        title : "",
        content : ""
    })



    const submitBoard = (e) =>{
        e.preventDefault()
        insertBoard(formData)
        // 입력 후 클리어 작업 > 공백으로 만들기
        setFormData({
            title : "",
            content : ""

        })
    }


    // 입력한 값으로 바꾸는 것
    const formChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div>
            <h3>BoardForm</h3>
            <input type="text" placeholder="제목" name="title" onChange={formChange}  value={formData.title}/>

            <br />
            <textarea cols={60} rows={5} placeholder="내용" name="content"
                      onChange={formChange} value={formData.content}/>
            <br /><br />
            <button onClick={submitBoard}>입력</button>

        </div>
    );
}
export default BoardForm;
