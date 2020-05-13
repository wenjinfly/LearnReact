import React from 'react' 
import {Row, Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import 'antd/dist/antd.css'
import './style/common.less'
export default class Admin extends React.Component{

    render(){
        return (

            <Row className="container">  
                <Col span="3" className="nav-left">
                    <NavLeft>ddfdfs</NavLeft>
                </Col>
                <Col span="21" className="main">
                    <Header>
                        Headerl 
                    </Header>
                    <Row className="content"> 
                        CCCCC
                    </Row>
                </Col>
            </Row>
        );
    }
}