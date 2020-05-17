import React from 'react'
import { Card, Button ,Radio} from 'antd';
import {PlusOutlined,DeleteOutlined ,EditOutlined,
    SearchOutlined,DownloadOutlined,
    LeftOutlined,RightOutlined} from '@ant-design/icons'
import "./ui.less"
export default class Buttons extends React.Component {

    state ={
        loading:true,
        size:"default"
    }
    handleCloseLoading=()=>{
        this.setState(
           { loading:false}
        )
    }

    handleOpenLoading=()=>{
        this.setState(
            {
                loading:true
            }
        )
    }

    handleChange=(e)=>{
        this.setState(
            {size:e.target.value}
        )
    }

    render() {
        return (
            <div>
               <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">主按钮</Button>
                    <Button >次按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="link">link按钮</Button>
                    <Button danger>危险按钮</Button>
                    <Button disabled>不可用按钮</Button>
               </Card>
               <Card title="图形按钮" className="card-wrap">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                    <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
               </Card>
               <Card title="loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={true}></Button>
                    <Button loading={true}>点击加载</Button>
                    <Button shape="circle" loading={true}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                    <Button type="primary" onClick={this.handleOpenLoading}>打开</Button>
               </Card>

               <Card title="按钮组" >
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />} >返回</Button>
                        <Button type="primary" icon={<RightOutlined />}>前进</Button>
                    </Button.Group>
                  
               </Card>

               <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group onChange={this.handleChange} value={this.state.size}>
                        <Radio value="large">大</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="small">小</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>点击加载</Button>
                    <Button type="dashed" size={this.state.size}>虚线按钮</Button>
                    <Button danger size={this.state.size}>危险按钮</Button>
                    <Button disabled size={this.state.size}>不可用按钮</Button>
               </Card>

            </div>
        );
    }
}