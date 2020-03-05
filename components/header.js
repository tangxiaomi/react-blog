import React from 'react';
import '../static/style/components/header.css';
import { Row, Col, Menu, Icon } from 'antd'; // ?用什么就引什么吗？
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons'; // ?

const Header = () => (  //小括号是自带返回值的， 大括号需要手动添加返回值
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">技术米</span>
        <span className="header-text">专注前端开发，每天学习新知识</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
       <Menu mode="horizontal">
         <Menu.Item key="home">
            <HomeOutlined />
            首页
         </Menu.Item>
         <Menu.Item key="video">
            <YoutubeOutlined />
            视频
         </Menu.Item>
         <Menu.Item key="life">
            <SmileOutlined />
            生活
         </Menu.Item>
       </Menu>
      </Col>
    </Row>
  </div>
)

export default Header;
