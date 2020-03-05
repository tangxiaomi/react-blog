import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from '../components/header';
import Author from '../components/author';
import Advert from '../components/advert';
import Footer from '../components/footer';
import '../static/style/pages/common.css';
import '../static/style/pages/detail.css';
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'; // react专门的markdown解析组件
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const Detail = () => {
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  return (
    <div className="container">
      <Head>
        <title>List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 头部 */}
      <Header/>
      {/* 左侧 右侧列表 */}
      <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                  <Breadcrumb.Item><a href="/">生活</a></Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <div className="detailed-title">
                  React实战教程
                </div>
                <div className="list-icon center">
                  <span><CalendarOutlined /> 2019-06-28</span>
                  <span><FolderOpenOutlined /> 视频教程</span>
                  <span><FireOutlined /> 5868人</span>
                </div>
                <div className="detailed-content">
                  {/*使用markdown的解析插件，将markdown转换成正常的文字 */}
                  <ReactMarkdown
                   source={markdown}
                   // 不转换html标签
                   escapeHtml={false}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author/>
            <Advert/>
            {/* markdown的导航栏 */}
            <Affix offsetTop={60}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                <MarkNav
                className="article-menu"
                source={markdown}
                // 左侧移动时到最顶的距离
                headingTopOffset={0}
                // 是否带编号
                ordered={true}
                />
              </div>
            </Affix>
          </Col>
      </Row>
      <Footer/>
    </div>
  )
}

export default Detail
