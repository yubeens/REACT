import useCountStore from "./store/useCountStore.jsx";

const CountPage = () => {
    const state_count = useCountStore(state => state.count);
    return (
        <div className={'border border-2 border-danger-subtle rounded m-5 p-3'}>
            <h4>COUNT : {state_count}</h4>
        </div>
    )
}
export default CountPage;