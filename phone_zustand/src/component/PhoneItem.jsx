function PhoneItem({ id, name, phone, onRemove }) {
    return (
        <div>
            <div><b>{name}</b></div>
            <div>{phone}</div><br/>
            <button onClick={() => onRemove(id)}>삭제</button><br/><br/>
        </div>
    );
}

export default PhoneItem;
