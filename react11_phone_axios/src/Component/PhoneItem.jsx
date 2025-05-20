import { useState } from "react";

export default function PhoneItem({ id, name, phone, addr, deletePhone, updatePhone }) {
    const [isEdit, setIsEdit] = useState(false);
    const [editData, setEditData] = useState({ name, phone, addr });

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateSubmit = () => {
        updatePhone({ id, ...editData });
        setIsEdit(false);
    };

    return (
        <div>
            {isEdit ? (
                <div>
                    <input name="name" value={editData.name} onChange={handleChange} /><br/>
                    <input name="phone" value={editData.phone} onChange={handleChange} /><br/>
                    <input name="addr" value={editData.addr} onChange={handleChange} /><br/>
                    <button onClick={handleUpdateSubmit}>완료</button>
                    <button onClick={() => setIsEdit(false)}>취소</button>
                </div>
            ) : (
                <div>
                    <div>id : {id}</div>
                    <div>name : {name}</div>
                    <div>phone : {phone}</div>
                    <div>addr : {addr}</div>
                    <button onClick={() => deletePhone(id)}>삭제</button>
                    <button onClick={() => setIsEdit(true)}>수정</button>
                </div>
            )}
            <hr />
        </div>
    );
}
