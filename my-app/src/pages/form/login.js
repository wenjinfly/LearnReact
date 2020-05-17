import React from 'react'
import { Card ,Form, Input, Button,Message,Checkbox} from 'antd';
import { UserOutlined,FormOutlined } from '@ant-design/icons';
const FormItem = Form.Item
export default class FormLogin extends React.Component {

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
                <Card title="登录行内表单">
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

                <Card title="登录水平表单">
                    <Form style={{width:300}}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: 'Please input your username!' },
                                {
                                    min:5,max:10,
                                    message:'长度不在范围内'
                                },
                                {
                                    pattern:new RegExp('^\\w+$','g'),
                                    message:'用户名必须为字母或者数字'
                                }
                            ]}
                        >
                            <Input placeholder="请输入用户名称" prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item
                           
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="请输入密码" prefix={<FormOutlined />}/>
                        </Form.Item>

                        <FormItem name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
          

        );
    }
}