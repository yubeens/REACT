import {useState} from "react";

function PhoneForm({insertPhone}){
    const [formData,setFormData] = useState({
        name:'',
        phone:''
    });
    //추가
    const submitPhone = (e)=>{
        e.preventDefault()
        insertPhone(formData);
        setFormData({
            name:'',
            phone:''
        })
    }
    return(
        <div>
            <form>
                <input
                    placeholder='이름'
                    name="name"/> <br/>
                <input
                    placeholder='전화번호'
                    name="phone"/> <br/> <br/>
                <button onClick={submitPhone}>등록</button>
                <hr/>
            </form>
        </div>
    )
}
export default PhoneForm;