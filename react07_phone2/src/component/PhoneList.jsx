import PhoneItem from "./PhoneItem.jsx";

function PhoneList({datas,onDelete,onUpdate}) {
    return(
        <div>
            <h3>[PhoneList]</h3>
            {
                datas.map((data)=>{
                   return(
                       <PhoneItem  key={data.id}
                                   {...data}
                                   onDelete = {onDelete}
                                    onUpdate = {onUpdate}/>
                   )
                })
            }
        </div>
    )
}
export  default  PhoneList