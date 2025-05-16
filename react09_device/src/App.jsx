import './App.css'
import MyDevice from "./MyDevice.jsx";
import Device from "./Device.jsx";
import Device_fun from "./Device_fun.jsx";

const mydataApp = {
    "myDeviceData":[
        {
            "name":"iPad Pro3",
            "RAM":6,
            "HomeButton":false,
            "TouchID":"No",
            "FaceID":"Yes"
        },{
            "name":"iPhone Xs3",
            "RAM":4,
            "HomeButton":false,
            "TouchID":"No",
            "FaceID":"Yes"
        },{
            "name":"iPhone 63",
            "RAM":1,
            "HomeButton":true,
            "TouchID":"Yes",
            "FaceID":"No"
        }
    ]
};

function App() {
  return (
      <div>
          <Device_fun>Device_fun(함수형)</Device_fun>
          <hr/>
          <h3>MyDevice</h3>
          <MyDevice mydata={mydataApp}/>
          <hr/>
          <Device>Device class : children content</Device>
      </div>
  )
}
export default App
