
import React, { Component, PropTypes } from 'react'

class SelectValue extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <label>Gender：
                <select onChange={this.props.handleSelect} ref="genderSelect" className="select" defaultValut={this.props.selectVal}>
                    <option value="man">man</option>
                    <option value="women">women</option>
                    <option value="ladyboy">ladyboy</option>
                </select>
            </label>
        )
    }
}

SelectValue.PropTypes = {
    handleSelect: PropTypes.func,
    selectVal: PropTypes.string
};

export default SelectValue;