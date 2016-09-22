import React  from 'react'
import { browserHistory , Link } from 'react-router'


const Success = React.createClass({

    getInitialState: function() {
        return {
            leftTime: 3
        }
    },

    timer:null,

    componentDidMount: function() {
        let self = this;
        self.timer = setInterval(function() {
            self.setState({
                leftTime: self.state.leftTime-1
            });
            if(self.state.leftTime <=0 ){
                clearInterval(self.timer);
                window.location.href = '/';
            }
        },1000);
    },

    componentWillUnmount: function() {
        clearInterval(this.timer);
        console.log(1);
    },


    render: function() {
        return (
            <div className="jumbotron main">
                <h1 className="text-success text-center">SUCCESS!!!</h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at deleniti,
                </p>
                <div className="row">
                    <div className="col-sm-3 col-sm-offset-1">
                        <Link to="/" className="btn btn-default"> To home </Link>
                    </div>
                </div>
                <p className="text-right mb10">
                    剩余时间:<span className="leftTime">{this.state.leftTime}</span>
                </p>
            </div>
        )
    }

});

export default Success;