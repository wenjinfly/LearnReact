import React from 'react'
import { Card ,message, Button} from 'antd';

import "./ui.less"
export default class Messages extends React.Component {

    state ={
        
    }

    showMessage=(type, txt)=>{
       // message.success(content, [duration], onClose)
       message[type](txt)
    }
   
    render(){
        return(
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.showMessage("success","恭喜你学会了")}>success</Button>
                    <Button type="primary" onClick={()=>this.showMessage("error","恭喜你学会了error")}>error</Button>
                    <Button type="primary" onClick={()=>this.showMessage("info","恭喜你学会了info")}>info</Button>
                    <Button type="primary" onClick={()=>this.showMessage("warning","恭喜你学会了warning")}>warning</Button>
                </Card>

 
            </div>

        );
    }
}