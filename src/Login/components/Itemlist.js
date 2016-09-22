import React , {Component, PropTypes} from 'react'
import { Link } from 'react-router'


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.emailValue}</td>
                <td>{this.props.item.phoneValue}</td>
                <td>{this.props.item.passwordValue}</td>
                <td>{this.props.item.recomentWayValue}</td>
                <td>{this.props.item.selectValue}</td>
                <td>
                    <button className="btn btn-danger btn-sm"
                            onClick={ () => {
                                   this.props.handleDelte(this.props.index)
                            } }
                    >DELETE</button>

                    <Link to={{ pathname:'/change', query: {index: this.props.index} }} className="btn text-success">change</Link>

                </td>
            </tr>
        )
    }
}

Item.PropTypes = {
    emailValue: PropTypes.string,
    phoneValue: PropTypes.string,
    passwordValue: PropTypes.string,
    recomentWayValue: PropTypes.string,
    selectValue: PropTypes.string,
    index: PropTypes.number,
    handleDelet: PropTypes.func
};

export default Item;