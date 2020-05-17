import React from 'react'
import { Card ,notification, Button} from 'antd';

import "./ui.less"
export default class Notice extends React.Component {

    state ={
        loadding:false
    }

    openNotification=(value,description)=>{

        if(description){
              notification[value](
                {
                    message:"发工资了",
                    description:"上个月22天，迟到1天",
                    placement: description
                }
            );
        }
        else{
            notification[value](
                {
                    message:"发工资了",
                    description:"上个月22天，迟到1天"
                }
            );
        }



    } 
    render(){
        return(
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>error</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>warning</Button>
                </Card>

                <Card title="通知提醒框+位置" className="card-wrap">   
                    <Button type="primary" onClick={()=>this.openNotification("success","topLeft")}>success 左上</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error","topRight")}>error 右上</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info","bottomLeft")}>info 左下</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning","bottomRight")}>warning 右下</Button>
                </Card>
            </div>

        );
    }
}