import React from 'react'
import { Link } from 'react-router-dom'
export default class Home extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main">Home1</Link>
                    </li>
                    <li>
                        <Link to="/about">About1</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics1</Link>
                    </li>
                    <li>
                        <Link to="/nomatch">nomatch</Link>
                    </li>
                </ul>
                <hr />
                <h1 >home 1</h1>
                {this.props.children}
                <h1 >home 2</h1>

            </div>
        );
    }
}