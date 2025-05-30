import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function PhoneForm({ initData, onCreate, onUpdate }) {
    const [data, setData] = useState({
        name: '',
        phone: ''
    });

    useEffect(() => {
        if (initData) {
            setData({ ...initData });
        }
    }, [initData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit : ', data);

        // 수정 모드
        if (initData && onUpdate) {
            onUpdate(data);
        }
        // 등록 모드
        else if (onCreate) {
            onCreate(data);
        }

        // 폼 초기화 (등록용일 때만)
        if (!initData) {
            setData({
                name: '',
                phone: ''
            });
        }
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="이름"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <input
                placeholder="전화번호"
                name="phone"
                value={data.phone}
                onChange={handleChange}
            />
            <Button variant="primary" type="submit">
                {initData ? "수정" : "추가"}
            </Button>
        </form>
    );
}

export default PhoneForm;
