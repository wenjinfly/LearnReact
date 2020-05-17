import React from 'react'
import { Card ,Form, Input, Button,Message,Checkbox} from 'antd';
import { UserOutlined,FormOutlined } from '@ant-design/icons';
const FormItem = Form.Item
export default class BasicTable extends React.Component {

    state ={
           
    }

    onFinish=(values )=>{
       Message.success("hello " + values.username + " pwd is:" + values.password );
      //console.log('Success:', values);
    }
    onFinishFailed=(errorInfo )=>{
        Message.error("hello " + errorInfo.values.username + " pwd is:" + errorInfo.values.password );
       // console.log('Failed:', errorInfo);
    }

    render(){
     
        return(
            
            <div>
                <Card title="基础表格">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="Mock-单选">

                </Card>
                
                <Card title="Mock-单选">

                </Card>

                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                </Card>

            </div>
          

        );
    }
}