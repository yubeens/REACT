import { Component } from 'react';
import axios from "axios";

class Device extends Component {
    constructor(props) {
        super(props);
        console.log('in constructor');
        console.log('constructor props : ', props);
        console.log('constructor children : ', props.children);
    }

    state = {
        datas: []
    }

    getMyData = async () => {
        let data1 = await axios.get('https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/');
        console.log('data1 : ', data1);
        console.log('data1.data : ', data1.data);
        console.log('data1.myDeviceData : ', data1.data.myDeviceData);
        console.log('JSON.stringify(data1) : ', JSON.stringify(data1));
        console.log('JSON.stringify(data1.data.myDeviceData) : ', JSON.stringify(data1.data.myDeviceData));
        //this.setState({datas: data1.data.myDeviceData})
        ////
        const {
            data : {myDeviceData},
        } = await axios.get('https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/');
        console.log('data : ', myDeviceData)
        this.setState({datas: myDeviceData})
    }

    componentDidMount() {
        console.log('in componentDidMount');
        this.getMyData();
    }
    componentDidUpdate() {
        console.log('in componentDidUpdate');
        this.getMyData();
    }


    render() {
        return (
            <div>

                Device Class : {this.props.children}
                {
                    this.state.datas.map((item) => {
                        return <p key={item.key}> name : {item.name}</p>;
                    })
                }
            </div>
        );
    }
}

export default Device;
