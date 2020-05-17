import React from 'react'
import { Card ,Tabs,message} from 'antd';
import { AppleOutlined, PieChartOutlined,AreaChartOutlined } from '@ant-design/icons';
import "./ui.less"

const { TabPane } = Tabs;
export default class Tabss extends React.Component {

    constructor(props){
        super(props);
        this.newTabIndex = 4;
        const panes=[
            {title:"tab-1", key:"1", content:"内容1"},
            {title:"tab-2", key:"2", content:"内容2"},
            {title:"tab-3", key:"3", content:"内容3",closable:false}
        ];

        this.state={
            activeKey: panes[0].key,
            panes
        }
    }
  

    onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };

    callBack=(activeKey)=>{
        this.setState({ activeKey });
        message.info("你选择了页签:"+ activeKey)
    }
    render(){
        return(
            <div>
                <Card title="Tabs页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callBack}>
                        <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
         
                <Card title="带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callBack}>
                        <TabPane tab={<span><AreaChartOutlined /> 页签1</span>} key="1">
                        Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={<span><PieChartOutlined /> 页签2</span>} key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab={<span><AppleOutlined /> 页签3</span>} key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>

                <Card title="可编辑页签" className="card-wrap">
                    <Tabs defaultActiveKey="1"      
                    onChange={this.callBack}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel)=>{
                              return  <TabPane tab={panel.title} key={panel.key} closable={panel.closable}>
                                    {panel.content}
                                </TabPane>
                            }

                            )
                        }
                    </Tabs>
                </Card>


            </div>

        );
    }
}