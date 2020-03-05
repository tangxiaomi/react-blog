import Head from 'next/head'
import Link from 'next/link';
import { Button } from 'antd'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div><Button>按钮</Button></div>
  </div>
)

export default Home
