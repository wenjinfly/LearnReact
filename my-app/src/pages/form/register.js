import React from 'react'
import { Card ,Form, Input, 
    Button,Message,Checkbox,
    InputNumber,Radio,Switch,
    Select,DatePicker,Upload,
    TimePicker} from 'antd';
import { UserOutlined,FormOutlined } from '@ant-design/icons';

const Option = Select.Option;
const { TextArea } = Input;

export default class Registers extends React.Component {

    state ={
           
    }

    onFinish=(values )=>{
       Message.success("hello " + values.username + " pwd is:" + values.password );
      console.log('Success:', values);
    }
    onFinishFailed=(errorInfo )=>{
        //Message.error("hello " + errorInfo.values.username + " pwd is:" + errorInfo.values.password );
       console.log('Failed:', errorInfo);
    }

    render(){
     
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:6
            },
            wrapperCol:{
                xs:24,
                sm:15
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const rowObject = {
            minRows: 4, maxRows: 6
        }
        const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
        return(
            
            <div>
                <Card title="注册表单" style={{marginTop:10}}>
                    <Form style={{width:600}}
                        validateMessages={validateMessages}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item label="用户名" {...formItemLayout}
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
                         ]}>
                            <Input placeholder="请输入用户名称" prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item label="密码" {...formItemLayout}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                            <Input.Password placeholder="请输入密码" prefix={<FormOutlined />}/>
                        </Form.Item>

                        <Form.Item name="radio-group" label="性别" {...formItemLayout}>
                            <Radio.Group>
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item name='age'  label="年龄"  {...formItemLayout}>
                            <InputNumber defaultValue={3} />
                        </Form.Item>

                        <Form.Item name="nowStatus" label="当前状态" {...formItemLayout}>
                           
                            <Select>
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">风华浪子</Option>
                                <Option value="3">北大才子一枚</Option>
                                <Option value="4">百度FE</Option>
                                <Option value="5">创业者</Option>
                            </Select>
                              
                        </Form.Item>
                        <Form.Item name="likes" label="爱好" {...formItemLayout}>
                            <Select mode="multiple">
                                <Option value="1">游泳</Option>
                                <Option value="2">打篮球</Option>
                                <Option value="3">踢足球</Option>
                                <Option value="4">跑步</Option>
                                <Option value="5">爬山</Option>
                                <Option value="6">骑行</Option>
                                <Option value="7">桌球</Option>
                                <Option value="8">麦霸</Option>
                            </Select>                           
                        </Form.Item>

                        <Form.Item name="isMarryed"  label="是否已婚" {...formItemLayout}>
                            <Switch checkedChildren="是" unCheckedChildren="否"></Switch>                         
                        </Form.Item>

                        <Form.Item name="adds" label="联系地址" {...formItemLayout}> 
                            <TextArea
                                autosize={rowObject}
                            />
                        </Form.Item>

                        <Form.Item name="timepick" label="早起时间" {...formItemLayout}>                
                            <TimePicker/>                             
                        </Form.Item>
                        
                        <Form.Item label="头像" {...formItemLayout}>
                            {
                               
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                   
                                    </Upload>
                               
                            }
                        </Form.Item>

                        <Form.Item {...offsetLayout}>   
                            <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                        </Form.Item>

                        <Form.Item {...offsetLayout}>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </Form.Item>

                    </Form>


                </Card>

     
            </div>
          

        );
    }
}