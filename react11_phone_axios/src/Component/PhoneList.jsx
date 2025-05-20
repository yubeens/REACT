import PhoneItem from "./PhoneItem.jsx";

export default function PhoneList({ phoneList = [], deletePhone, updatePhone }) {
    if (!Array.isArray(phoneList)) {
        return <div>잘못된 데이터 형식입니다.</div>
    }

    return (
        <div>
            <h3>List</h3>
            {phoneList.map((phone) => (
                <PhoneItem key={phone.id} {...phone}
                           deletePhone={deletePhone}
                           updatePhone={updatePhone}/>
            ))}
        </div>
    );
}