import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onLogin = (event) => {
        event.preventDefault();
        var { txtUsername, txtPassword } = this.state;

        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user',JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }

    }


    render() {
        var { txtUsername, txtPassword } = this.state;
        var LoggedUser = localStorage.getItem('user');
        if(LoggedUser!==null){
            return <Redirect to="/products"/>
        }
        var {location} = this.props;
        return (

            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <form onSubmit={this.onLogin}>
                        <legend>Đăng nhập</legend>

                        <div className="form-group">
                            <label >UserName : </label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtUsername"
                                value={txtUsername}
                                onChange={this.onChange}
                            />
                            <label >PassWord : </label>
                            <input
                                type="password"
                                className="form-control"
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange}
                            />
                        </div>



                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                    </form>

                </div>
            </div>

        );
    }
}

export default Login;
