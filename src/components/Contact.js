import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';
class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked : false
        }
    }

    onClick= (check)=>{
        this.setState({
            isChecked : check
        })
    }
    render() {
        return (
            <div>        
                Liên hệ <br/>
                
                <button type="button" className="btn btn-info" onClick={()=> this.onClick(false)}>Cho phep</button>
                <br/>
                <br/>
                <button type="button" className="btn btn-danger" onClick={()=> this.onClick(true)}>Khong cho phep</button>
                <br/> 
                <Prompt 
                    when={this.state.isChecked}
                    message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default Contact;
