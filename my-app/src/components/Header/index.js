import React from 'react' 
import { Row, Col } from 'antd'

import './index.css'
export default class Header extends React.Component{

    componentWillMount(){
        this.setState({
            userName:"麦子"
        })
    };
    render(){
        return (

            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span>2020-05-1</span>
                        <span>hage</span>
                    </Col>
                </Row>
            </div>
        );
    }
}