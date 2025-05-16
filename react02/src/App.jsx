import {Component } from 'react'

import './App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";

class App extends  Component{
    id = 2;
    state = {
        information : [
            {
                id : 0,
                name : '홍길동',
                phone : '010-1111-1111'
            },{
                id : 1,
                name : '이순신',
                phone : '010-2222-2222'
            }
        ]
    }
    //추가(기존 값에 추가)
    handleCreate = (data) =>{
        const  {information} = this.state
        this.setState({
            information: information.concat({
                id:this.id++, ...data
            })
        })
    }
    render() {
        return(
            <div>
             <PhoneForm onCreate ={this.handleCreate} />
             <PhoneList
                 data = {this.state.information} />

            </div>
        )
    }
}
export default App
