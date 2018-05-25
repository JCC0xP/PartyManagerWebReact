import React  from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Link } from 'react-router';

const { Content, Sider } = Layout;
const Dashboard = (props) => (
    <Layout>
        <Sider
            breakpoint="lg"
            collapsedWidth=""
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            style={{ zIndex: '1', height: '100vh' }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <Link to={'/home'} style={{ display: 'initial' }}>
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <Link to={'/cadastrar_decoracoes'} style={{ display: 'initial' }}>
                        <span className="nav-text">Cadastrar decoração</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <Link to={'/cadastrar_reservas'} style={{ display: 'initial' }}>
                        <span className="nav-text">Realizar uma reserva</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Layout>
                <Breadcrumb style={{ margin: '16px 45px' }}>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ padding: '20px' }}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default Dashboard;
