function PhoneItem({ id, name, phone, onRemove }) {
    return (
        <div>
            <div><b>{name}</b></div>
            <div>{phone}</div>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

export default PhoneItem;
