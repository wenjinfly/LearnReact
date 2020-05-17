import React from 'react'
import { Card ,Switch,Spin,Alert} from 'antd';

import "./ui.less"
export default class Loading extends React.Component {

    state ={
        loadding:false
    }

    switchChange=(value)=>{
        this.setState(
            {loadding:value}
        )
    } 
    render(){
        return(
           <div>
               <Card titile="Spin的用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <br/>
                    <Spin></Spin>
                    <br/>
                    <Spin size="large"></Spin>
               </Card>

               <Card titile="内容遮罩" className="card-wrap">
                    <Spin spinning={this.state.loadding}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>

                    <Spin spinning={this.state.loadding} tip="加载中...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>

                    <Alert             
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="warning">
                    </Alert>

                    <Alert             
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="error">
                    </Alert>

                    <Switch checked={this.state.loadding} onChange={this.switchChange}></Switch>
               </Card>
           </div>

        );
    }
}