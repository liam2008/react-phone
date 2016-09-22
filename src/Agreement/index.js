import React , {Component} from 'react'
import { browserHistory , Link } from 'react-router'


export default class Agreement extends Component {
    render() {
        return (
            <div className="jumbotron main">
                <h1>The agreement</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur distinctio doloremque,
                    earum eius enim eos illo inventore ipsa obcaecati officia placeat praesentium quia quibusdam unde. Architecto
                    distinctio doloremque ipsum!
                    <Link to="/" className="btn btn-default">返回</Link>
                </p>
            </div>
        )
    }
}

