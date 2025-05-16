import {useState} from "react";

export default function BoardForm({insertBoard}) {
    const [formData,setFormData]=useState({
        title:'',
        content:''
    })
    //입력
    const formChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    //추가
    const submitBoard = (e) => {
        e.preventDefault()
        insertBoard(formData)
        setFormData({
            title:'',
            content:''
        })
    }

    return(
        <div>
            <h3>BoardForm</h3>
            <input type={"text"} placeholder="제목" name="title" onChange={formChange}  value={formData.title}/>
            <br /><br />
            <textarea name={'content'} cols={60} rows={5} placeholder="내용"
                      onChange={formChange} value={formData.content}/>
            <br /><br />
            <button onClick={submitBoard}>입력</button>
            <br/><br/>
            <hr/>

        </div>
    )
}