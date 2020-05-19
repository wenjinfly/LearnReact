import React from 'react'
import { Card ,Table,Message,Button,Modal,Badge} from 'antd';
import axios from './../../axios/index'

export default class HighTable extends React.Component {

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
              {
                key: '4',
                name: '马克',
                sex: 1,
                age: 24,
                address: '天花有缘',
              },
              {
                key: '5',
                name: '哈额',
                sex: 0,
                age: 28,
                address: '你你你',
              },
          ]

          dataSource.map((item,index)=>{
            item.id = index;
        })

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
                        dataSource2:res.result,
                        
                        selectedRowKeys:[],
                        selectedRows:null

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

    onRowClick=(record , index )=>{
        let selectKey = [index];
        Message.info(record.name +"***" + selectKey);
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }

       // 多选执行删除动作
       handleDelete = (()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
            ids.push(item.key)
        })
        Modal.confirm({
            title:'删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                Message.success('删除成功');
                this.request();
            }
        })
    })

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:"key",
                key:'key',
                sorter:(a,b)=>{
                    return a.key - b.key;
                }
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
                    let config = {
                        '1': <Badge color="blue" text="男"/>,
                        '2': <Badge color="red" text="女" />
                    }
                    return sex ==1 ?config[1]:config[2]
                }
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
              sorter:(a,b)=>{
                  return a.age - b.age;
              }
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];
        
          const selectedRowKeys = this.state.selectedRowKeys;
          const rowSelection2 = {
                type:'radio',
                selectedRowKeys,
                onChange: (selectedRowKeys, selectedRows) => {
                
                Message.info(selectedRows[0].name +"###" + selectedRowKeys);
                
                 this.setState({
                     selectedRowKeys,
                     
                 })
            }
          };

          const rowSelection3 = {
            type:'check',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
             this.setState({
                 selectedRowKeys,
                 selectedRows
             })
        }
      }
          
        return(
            
            <div>
                <Card title="头部固定">
                    <Table dataSource={this.state.dataSource} columns={columns}
                    scroll={{y:100}}/>
                </Card>

                <Card title="左侧固定" style={{margin:'10px 0'}}>
                    <Table 
                    dataSource={this.state.dataSource} 
                    columns={columns}
                    pagination={false}
                    scroll={{x:40}}
                    />

                </Card>
                
                <Card title="表格排序">
                    <Table 
                    rowKey ={record=>record.id}

                    onRow={(record,index) => {
                        return {
                          onClick: ()=>{
                              this.onRowClick(record,index);
                          } // 点击行
                        };
                      }}    
                    
                    dataSource={this.state.dataSource} columns={columns}/>
                </Card>

                <Card title="操作按钮">

                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>

                    <Table 
                    rowKey ={record=>record.id}
                    rowSelection={
                        rowSelection3
                    }

                    onRow={(record,index) => {
                        return {
                          onClick: ()=>{
                              this.onRowClick(record,index);
                          } // 点击行
                        };
                      }}    
                    
                    dataSource={this.state.dataSource} columns={columns}/>
                </Card>

            </div>
          

        );
    }
}