import {Component} from "react";
import PhoneInfo from "./PhoneInfo.jsx";


class PhoneList extends  Component{
    render() {
        const {data} = this.props
        return(
            <div>
                <h3>[[PhoneList]]</h3>
                {
                    data.map((info)=>{
                        return(
                          <PhoneInfo info = {info} key ={info.id}/>
                        )
                    })
                }
            </div>
        )
    }
}
export  default  PhoneList;