import {useRef, useState} from "react";
import {Button} from "react-bootstrap";

function PhoneForm({onCreate}) {
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    let [data, setData] = useState({
        name: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(data);

        // 초기화
        setData({ name: '', phone: '' });
        inputRef1.current.value = '';
        inputRef2.current.value = '';
        inputRef1.current.focus();
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="이름"
                    name="name"
                    onChange={handleChange}
                    ref={inputRef1}
                />
                <input
                    placeholder="전화번호"
                    name="phone"
                    onChange={handleChange}
                    ref={inputRef2}
                />
                <Button variant="primary" type="submit">추가</Button>
            </form>
        </div>
    );
}

export default PhoneForm;
