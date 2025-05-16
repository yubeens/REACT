function Viewer({count}){
    return(
        <div>
            <div>현재 카운트 : </div>
            <h1>{count}</h1>
            <div>{count%2 ===0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
        </div>
    )
}
export default Viewer;