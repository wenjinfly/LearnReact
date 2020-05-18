import React from 'react'
import { Card ,Table,Message} from 'antd';
import axios from './../../axios/index'

export default class BasicTable extends React.Component {

    state ={
        dataSource2:[]
    }

    componentDidMount(){
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              sex: 1,
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '丽豪祖',
              sex: 0,
              age: 23,
              address: '西湖区湖底公园2号',
            },
            {
                key: '3',
                name: '高祖',
                sex: 1,
                age: 14,
                address: '西湖区湖底公园3号',
              },
          ]

        //   dataSource.map((item,index)=>{
        //     item.key = index;
        // })

          this.setState(
              {dataSource}
              
          )

          this.request();
         
    }
 
    request=()=>{
        let baseUrl= "https://www.easy-mock.com/mock/5ec1f9f82ec0011bc82b9c7e/example/";
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                },
                baseURL:baseUrl
                
            }
        }).then((res)=>{
            if(res.code == 0){
                this.setState(
                    {
                        dataSource2:res.result
                    }
                )
            }
        })
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
        const columns = [
            {
                title:'id',
                dataIndex:"key",
                key:'key'
            },
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex){
                    return sex ==1 ?'男':'女'
                }
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];
        
          onRowClick=(recod , index )=>{

          }
          
        return(
            
            <div>
                <Card title="基础表格">
                    <Table dataSource={this.state.dataSource} columns={columns}/>
                </Card>

                <Card title="Mock-在线获取" style={{margin:'10px 0'}}>
                    <Table 
                    dataSource={this.state.dataSource2} 
                    columns={columns}/>

                </Card>
                
                <Card title="表格-单选">
                    <Table 
                    rowSelection={{
                        type: "radio"
                      }}
                    
                      onRow={(record,index) => {
                        return {
                          onClick: ()=>{
                              this.onRowClick(record,index);
                          } // 点击行
                        };
                      }}

                    dataSource={this.state.dataSource} columns={columns}/>
                </Card>

                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                </Card>

            </div>
          

        );
    }
}