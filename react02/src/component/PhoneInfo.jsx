import {Component} from "react";

class PhoneInfo extends  Component{
    render() {
        const {id, name, phone} = this.props.info
        return(
            <div>
                <div>id : {id}</div>
                <div>name : {name}</div>
                <div>phone : {phone}</div>
            <button>삭제</button>
            </div>
        )
    }
}
export  default  PhoneInfo;