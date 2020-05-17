import React from 'react'
import { Card ,Row, Col, Modal} from 'antd';

export default class Gallerys extends React.Component {

    state ={
            visible:false
    }

    openNotification=(value,description)=>{

    } 
    openGallery = (imgSrc)=>{
        this.setState({
            visible:true,
            currentImg: '/gallery/'+imgSrc
        })
    }
    
    render(){
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png'],
            ['5.png', '6.png', '7.png', '8.png'], 
            ['9.png', '10.png','11.png', '12.png'],
            ['13.png', '14.png', '15.png','16.png',],
            ['17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png']
        ]
        let index = 1;
        const imgList = imgs.map((list)=>{
            return list.map((item)=>{
             return   <Card style={{marginBottom:10}}
                    cover={<img src={"/gallery/" + item}  onClick={()=>this.openGallery(item)}/> } 
                >
                    <Card.Meta 
                        title={"React admin:" + item}
                        description="good!!"
                    />
                </Card>
            })
        })

        return(
            <div className="card-wrap">
                <Row gutter={8}>
                    {imgList.map((list)=>(<Col md={4}> {list}</Col>))}
                </Row>
                <Modal 
                    width={300}
                    height={600}
                    visible={this.state.visible}
                    title="图片画廊"
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} style={{width:'100%'}}></img>}
                </Modal>
            </div>

        );
    }
}