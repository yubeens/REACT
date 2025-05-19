import { useState } from "react";

function PhoneForm({ onCreate }) {
    const [form, setForm] = useState({ name: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone) return;
        onCreate(form);
        setForm({ name: '', phone: '' }); // 입력 초기화
    };

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
    );
}

export default PhoneForm;
