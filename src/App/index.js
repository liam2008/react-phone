import React , {Component} from 'react'
import { browserHistory , Link } from 'react-router'


export default class Home extends Component {
    render() {
        return (
        <div className="jumbotron main">
            <h1>The main page!!!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur distinctio doloremque,
                    earum eius enim eos illo inventore ipsa obcaecati officia placeat praesentium quia quibusdam unde. Architecto
                    distinctio doloremque ipsum!
                </p>
                <div className="row">
                    <div className="col-sm-3 col-sm-offset-1">
                        <Link to="/login" className="btn btn-info"> login </Link>
                    </div>
                    <div className="col-sm-3">
                        <Link to="/register" className="btn btn-success">register</Link>
                    </div>
                </div>
        </div>
        )
    }
}
