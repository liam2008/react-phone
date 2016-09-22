import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { Link, browserHistory } from 'react-router';


/*ES6*/
class Change extends Component {
    constructor(props) {
        super(props);

        let initData = JSON.parse(localStorage.userList)[+ this.props.location.query.index];

        this.state = {
            emailValue: initData.emailValue,
            phoneValue: initData.phoneValue,
            passwordValue: initData.passwordValue,
            recomentWayValue: initData.recomentWayValue,
            selectValue: initData.selectValue
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRecoment = this.handleRecoment.bind(this);
        this.handleRecoVal = this.handleRecoVal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            recomentWayValue: this.refs.recomentWayValue.value,
            selectValue: this.state.selectValue
        };

        new Promise( (resolve,reject) => {
            let userList = JSON.parse( localStorage.userList );
            userList[+this.props.location.query.index] = formData;

            /*Object.assign(userList[+this.props.location.query.index],formData);*/

            localStorage.userList =JSON.stringify(userList);
            resolve();
        } ).then(
            () => {
                browserHistory.push('/');
            }
        )
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit} className="form-signin form-change">
                    <h2>Change Message</h2>
                    <div>
                        <p>
                            <label>
                                Email:<input type="email" ref="emailInput" defaultValue={this.state.emailValue} className="form-control"/>
                            </label>
                        </p>

                        <p>
                            <label>
                                TelePhone: <input type="tel" ref="phoneInput" defaultValue={this.state.phoneValue} className="form-control"/>
                            </label>
                        </p>

                        <p>
                            <label>
                                Password: <input type="password" ref="passwordInput" defaultValue={this.state.passwordValue} className="form-control password"/>
                            </label>
                        </p>

                        <p>
                            <label>
                                recoment:<input type="text" ref="recomentWayValue" defaultValue={this.state.recomentWayValue} className="form-control" onChange={this.state.handleRecoVal}/>
                            </label>
                        </p>

                        <p>
                            <label>Gender：
                                <select onChange={this.handleSelect} ref="genderSelect" defaultValue="select" defaultValue={this.state.selectValue}>
                                    <option value="man">man</option>
                                    <option value="women">women</option>
                                    <option value="ladyboy">ladyboy</option>
                                </select>
                            </label>
                        </p>

                        <p>
                            <button type="submit" className="btn btn-block btn-success" onClick={this.handleSubmit} ref="submitBtn">comfirm</button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Change;