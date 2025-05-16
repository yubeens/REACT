import {useEffect, useState} from "react";
import axios from "axios";

function Device_fun(){
    const [datas, setDatas] = useState([])
    const getMydata = async () => {
        const {
            data: {myDeviceData},
        } = await axios.get('https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/');
            setDatas(myDeviceData)
    }
    useEffect(()=>{
        getMydata()
    },[]);
    return (
        <div>
            <h3>Device fun</h3>
            {
                datas.map((item) => (
                    <p key={item.key}>
                        name : {item.name} <br/>
                        HomeButton : {item.HomeButton ? 'Yes' : 'No'} <br/>
                        RAM : {item.RAM} <br/>
                        TouchID : {item.TouchID} <br/>
                        FaceID : {item.FaceID} <br/>
                    </p>
                ))
            }
        </div>
    )
}
export default Device_fun;