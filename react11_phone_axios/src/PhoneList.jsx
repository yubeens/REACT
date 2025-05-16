import PhoneItem from "./PhoneItem.jsx";

export default function PhoneList({datas}){
    return(
        <div>
            <h3>PhoneList</h3>
            {
                datas.map(data =>(
                    <div key={data.id}>
                        <PhoneItem {...data}/>
                    </div>
                ))
            }
        </div>
    )
}