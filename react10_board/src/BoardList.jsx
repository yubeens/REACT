import BoardItem from "./BoardItem.jsx";

function BoardList({boards,removeBoard}) {


    return (

        <div>
            <h3>Board List</h3>
            <div>
                {
                    boards.map((board)=>(
                        <BoardItem key={board.id} board={board} removeBoard={removeBoard}/>
                    ))
                }
            </div>
        </div>
    );
}

export default BoardList;