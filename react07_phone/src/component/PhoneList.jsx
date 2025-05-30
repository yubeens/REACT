import PhoneItem from "./PhoneItem.jsx";

function PhoneList({datas, onRemove, onChange}){
    return(
        <div>
            <h1>PhoneList</h1>
            {datas.map((data) => {
                return (
                    <PhoneItem key={data.id}
                               {...data}
                               onRemove={onRemove}
                               onChange={onChange}/>)}
            )}
        </div>
    )
}
export default PhoneList