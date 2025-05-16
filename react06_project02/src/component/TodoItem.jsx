import './TodoItem.css'

function  TodoItem({id,isDone,content,
                       createdDate,onDelete,
                       onUpdate}) {
    //let {id,isDone,content, createdDate} = todo
    //삭제
    const  onDeleteClick = () => {
        onDelete(id)
    }
    //수정
    const onChangeCheckbox = () => {
        onUpdate(id)
    }
    return(
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type='checkbox' value={isDone}
                       onChange={onChangeCheckbox}/>
            </div>
            <div className='title_col'>{content}</div>

            <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onDeleteClick}>삭제</button>
            </div>

        </div>
    )
}
export  default  TodoItem