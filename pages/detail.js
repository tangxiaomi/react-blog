import Head from 'next/head'
import Link from 'next/link';
import { Row, Col } from 'antd'
import Header from '../components/header';
import '../static/style/pages/common.css';

const Detail = () => (
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
          左侧
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
    </Row>
  </div>
)

export default Detail
