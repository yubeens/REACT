import useCountStore from "./store/useCountStore.jsx";
import CountPage from "./CountPage.jsx";

const Counter = () => {
    const { count, setCount, upCount, downCount } = useCountStore();
    // const state_count = useCountStore(state =>state.count);
    const resetCount = useCountStore(state => state.resetCount);
    // const changeCount = useCountStore(state =>state.changeCount);
    const addCount = useCountStore(state => state.addCount);
    const countChange = (e) =>{
        setCount(e.target.value)
    }
    return (
        <div className={'border border-2 border-primary-subtle rounded m-5 p-5'}>
            <button type={'button'} className={'btn btn-success'} onClick={upCount}>+</button>
            <button type={'button'} className={'btn btn-outline-primary ms-2'} onClick={downCount}>-</button>
            <button type={'button'} className={'btn btn-danger ms-2'} onClick={resetCount}>RESET</button>
            {/*<button type={'button'} className={'btn btn-info ms-2'} onClick={()=>changeCount(count)}>Num_Count</button>*/}
            <button type={'button'} className={'btn btn-secondary ms-2'} onClick={()=>addCount(count)}>ADD_Count</button>
            <div className={'my-5'}>
                <label className={'form-label'} htmlFor={'num'}>숫자 입력</label>
                <input type='number' className={'form-control'} min={0} id={'num'} value={count} onChange={countChange}/>
                {/*<div>count : {state_count}</div>*/}
                <CountPage />
            </div>
        </div>
    )
}
export default Counter