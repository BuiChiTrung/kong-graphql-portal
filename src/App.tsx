import React, {useState} from 'react';
import {CodeSandboxCircleFilled, ControlFilled, MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import 'graphiql/graphiql.min.css';
import { Link, Outlet} from "react-router-dom";

const {Header, Sider, Content} = Layout;

const items = [
    {
        key: '1',
        path: "/",
        icon: <CodeSandboxCircleFilled/>,
        label: 'Schema Manager',
    },
    {
        key: '2',
        path: "/rbac",
        icon: <ControlFilled/>,
        label: 'RBAC',
    }
]


const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{"height": "100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <img src={"logo.png"} style={{"width": "50px"}}/>
                    <span>GraphQL Portal</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    // items={items}
                >
                    {
                        items.map(item => {
                            return (
                                <Menu.Item key={item.key}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header style={{padding: 0, background: colorBgContainer}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;