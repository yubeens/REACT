import usePhoneStore from "../store/usePhoneStore.jsx";
import {useState} from "react";

function PhoneForm(){
    const [form, setForm] = useState({name: '', phone: ''});
    const create = usePhoneStore((state)=> state.create)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form,[name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone) return;
        create(form);
        setForm({ name: '', phone: ''})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='이름'
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                /><br/>
                <input
                    placeholder='전화번호'
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                /><br/><br/>
                <button type='submit'>등록</button>
            </form>
        </div>
    )
}
export default PhoneForm;