import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import SelectValue from './components/SelectValue';
import { browserHistory } from 'react-router';



/*ES6*/
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: 'Email address',
            phoneValue: 'Phone number',
            passwordValue: 'Please input a password',
            comfirmPswValue: 'Please input a password agian',
            recomentWay: 'phone',
            recomentWayValue: 'please input who recoment!',
            selectValue: 'man'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkPasswork = this.checkPasswork.bind(this);
        this.handleRecoment = this.handleRecoment.bind(this);
        this.handleRecoVal = this.handleRecoVal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    checkPasswork(e) {
        let value = findDOMNode(this.refs.passwordInput).value;
        if(e.target.value !== value){
           alert('please check the passwork');
        }
    }

    handleRecoment(e) {
        this.setState({
            recomentWay: e.target.value
        })
    }

    handleRecoVal(e) {
        this.setState({
            recomentWayValue: e.target.value
        })
    }

    handleSelect(e) {
        this.setState({
            selectValue: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        let formData = {
            emailValue: this.refs.emailInput.value,
            phoneValue: this.refs.phoneInput.value,
            passwordValue: this.refs.passwordInput.value,
            recomentWay: this.state.recomentWay,
            recomentWayValue: this.refs.recomentWayValue.value,
            selectValue: this.state.selectValue
        };

        new Promise( (resolve, reject) => {
            var userList = !localStorage.userList ? [] : JSON.parse(localStorage.userList);
            userList.push( formData );

            localStorage.userList = JSON.stringify(userList);

            resolve();
        } ).then( () => {
            browserHistory.push('success');
        } ).catch( () => {
            browserHistory.push('error');
        } );

    }

    handleCheckbox (e) {
        e.target.disable = !e.target.disable;
        if(e.target.disable) {
            this.refs.submitBtn.disabled = false
        }
    }


    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit} className="form-signin">
                    <h2>Please Register</h2>
                    <input type="email" ref="emailInput" placeholder={this.state.emailValue} className="form-control" required />
                    <input type="tel" ref="phoneInput" placeholder={this.state.phoneValue} className="form-control" required />
                    <input type="password" ref="passwordInput" placeholder={this.state.passwordValue} className="form-control password" required />
                    <input type="password" ref="comfirmPsw" placeholder={this.state.comfirmPswValue} onBlur={this.checkPasswork} className="form-control resure" required />

                    <div className="recoment-way">
                        <label>
                            <input onChange={this.handleRecoment} name="recomentWay" type="radio" value="phone" defaultChecked/>phone
                        </label>
                        <label>
                            <input onChange={this.handleRecoment} name="recomentWay" type="radio" value="username"/>username
                        </label>
                        <label>
                            <input onChange={this.handleRecoment} name="recomentWay" type="radio" value="ID"/>ID
                        </label>
                        <label>
                            <input onChange={this.handleRecoment} name="recomentWay" type="radio" value="system"/>system
                        </label>
                        <input type="text" ref="recomentWayValue" placeholder={this.state.recomentWayValue} className="form-control" onChange={this.state.handleRecoVal}/>
                    </div>

                    <SelectValue  handleSelect={this.handleSelect} selectVal={this.state.selectValue}/>

                    <p>
                        <input onChange={this.handleCheckbox} name="agreement" type="checkbox" disabled={false}/>I agree the <Link to="/register/agreement">《民为天用户注册协议》</Link>
                    </p>



                    <br/>
                    <button type="submit" className="btn btn-block btn-success" onClick={this.handleSubmit} ref="submitBtn" disabled={true}>Register</button>
                </form>
            </div>
        )
    }

}

export default Register;