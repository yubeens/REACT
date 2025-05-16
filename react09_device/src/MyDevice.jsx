export default function MyDevice({mydata}) {
    return (
        <div>
            {
                mydata.myDeviceData.map((item, index) => (
                    <div key={index}>
                        name : {item.name}<br/>
                        RAM : {item.RAM}<br/>
                        HomeButton : {item.HomeButton ? 'Yes' : 'No'}<br/>
                        TouchID : {item.TouchID}<br/>
                        FaceID : {item.FaceID}<br/><br/>
                    </div>
                ))
            }
        </div>
    );
}
