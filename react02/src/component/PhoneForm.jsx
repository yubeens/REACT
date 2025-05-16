import {Component} from "react";

class PhoneForm extends  Component{
    state = {
        name : '',
        phone : ''
    }
    //추가
    handleSubmit = (e) =>{
        e.preventDefault()
        //부모의  handleCreate  호출
        this.props.onCreate(this.state)

        this.setState(
            {
                name : '',
                phone : ''
            }
        )
    }
    //이름, 전화번호 입력시 호출
    handleChange = (e) =>{
        console.log(e.target.name + ":" + e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="이름" name ="name"
                           value={this.state.name}
                    onChange={this.handleChange}/>
                    <input placeholder="전화번호" name ="phone"
                           value={this.state.phone}
                    onChange={this.handleChange}/>
                    <button type="submit">등록</button>
                </form>
            </div>
        )
    }
}
export  default  PhoneForm;