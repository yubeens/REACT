import './TodoItem.css'
function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete}){
    const onRemove = () => {
        onDelete(id)
    }
    const onChangeCheckBox = () => {
        onUpdate(id)
    }

    return (
        <div className={'TodoItem'}>
            <div className={'checkbox_col'}>
                {/*<input type='checkbox' checked={isDone}*/}
                {/*       onChange={()=>onUpdate(id)}/>*/}
                <input type='checkbox' checked={isDone}
                onChange={onChangeCheckBox}/>
            </div>
            <div className={'title_col'}>{content}</div>
            <div className={'date_col'}>
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className={'btn_col'}>
                <button onClick={()=>onDelete(id)}>삭제</button>
                <button onClick={onRemove}>book삭제</button>
            </div>
        </div>
    )
}
export default TodoItem;