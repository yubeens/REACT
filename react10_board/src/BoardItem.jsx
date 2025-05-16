import BoardList from "./BoardList.jsx";

function BoardItem({ board,removeBoard }) {
    const deleteBoard = () => {
        removeBoard(board.id)
    }
    return (
        <div>
            <p>title:{board.title}</p>
            <p>content:{board.content}</p>
            <button onClick={deleteBoard}>삭제</button>
            <button onClick={()=>removeBoard(board.id)}>삭제(직접호출)</button>
        </div>
    );
}

export default BoardItem;