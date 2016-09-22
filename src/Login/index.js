import React , {Component} from 'react'
import { browserHistory , Link } from 'react-router'
import Itemlist from './components/Itemlist'


export default class Login extends Component {
    constructor(props) {
        super(props);

        let itemsVal = JSON.parse( localStorage.userList );

        this.state = {
            items: itemsVal
        }

    }

    handleDelte = (index) => {
        let itemsVal = this.state.items.splice(index,1);

        localStorage.userList = JSON.stringify( itemsVal );

        this.setState({
            items: itemsVal
        })
    };

    render() {
        return (
            <div className="container-fluid login-table">
                <h1>USER MESSAGE</h1>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>PASSWORD</th>
                        <th>RECOMENTVALUE</th>
                        <th>GENDER</th>
                        <th>HOW TO DO</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.items.map( (item, index) => {
                            return <Itemlist item={item} key={index} index={index} handleDelte={this.handleDelte}/>
                        } )
                    }

                    </tbody>
                </table>
            </div>
        )
    }
}

