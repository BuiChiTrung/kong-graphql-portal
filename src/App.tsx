import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    CodeSandboxCircleFilled,
    ControlFilled,
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.min.css';
import {createGraphiQLFetcher} from "@graphiql/toolkit";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const {Header, Sider, Content} = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const fetcher = createGraphiQLFetcher({url: 'http://localhost:8000/country/graphql'});


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
                    items={[
                        {
                            key: '1',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'Schema Manager',
                        },
                        {
                            key: '2',
                            icon: <ControlFilled />,
                            label: 'RBAC',
                        },
                    ]}
                />
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
                    <GraphiQL fetcher={fetcher}/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;