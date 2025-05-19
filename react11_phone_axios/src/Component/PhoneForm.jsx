import {useState} from "react";

function PhoneForm({onCreate}){

    let [data, setData] = useState({
        name: '',
        phone: '',
        addr: ''
    })

    const handleChange = (e) => {
        console.log("PhoneForm handleChange : " + e.target.name + " : " + e.target.value)
        e.preventDefault();
        setData ({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log("PhoneForm handleSubmit : " + data)
        e.preventDefault();
        onCreate(data);
        setData(
            {
                name: '',
                phone: '',
                addr: ''
            }
        )

    }

    return(
        <div>
            <h1>Phone</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder={'이름'}
                       name={'name'}
                       onChange={handleChange}
                       value={data.name}
                /><br/>
                <input placeholder={'전화번호'}
                       name={'phone'}
                       onChange={handleChange}
                       value={data.phone}
                /><br/>
                <input placeholder={'주소'}
                       name={'addr'}
                       onChange={handleChange}
                       value={data.addr}
                /><br/><br/>
                <button type={'submit'} >등록</button>
            </form>
        </div>
    )
}
export default PhoneForm
