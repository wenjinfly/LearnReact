import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {

    render() {
        return (
            <div>
                <h1 color="red">main begin</h1>
                this is main page.
                <br/>
                <Link to="/main/test-id">嵌套路由1</Link>
                <br/>
                <Link to="/main/456">嵌套路由2</Link>
                <hr/>
                
                {this.props.children}
                <h1 color="red">main end</h1>
            </div>
        );
    }
}