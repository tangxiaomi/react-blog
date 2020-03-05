import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined, UserOutlined } from '@ant-design/icons';
import '../static/style/components/author.css';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></div>
      <div className="author-introduction">
        程序媛,专注前端开发
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account"/>
        <Avatar size={28} icon={<QqOutlined />} className="account"/>
        <Avatar size={28} icon={<WechatOutlined />} className="account"/>
      </div>
    </div>
  )
}

export default Author;
