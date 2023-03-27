import {Space, Table} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface Service {
    id: string
    name: string,
    host: string,
    tags: string[],
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <strong>{text}</strong>
    },
    {
        title: 'Host',
        dataIndex: 'host',
        key: 'host',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: any, record: Service) => (
            <Space size="middle">
                <Link to={`${record.name}/playground`}>Playground</Link>
                <Link to={`${record.name}/visualize`}>Visualize</Link>
            </Space>
        ),
    },
];

const graphQLServiceTag = "graphql"

const ServiceList: React.FC = () => {
    const [services, setServices] = useState<Service[]>([])

    useEffect(() => {
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/services',
        };

        axios(config)
            .then(function (response: { data: any; }) {
                return response.data
            })
            .then(({data}) => {
                data = data.filter((service: Service) => (service.tags != null && service.tags.includes(graphQLServiceTag)))
                setServices(data)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, [])

    return (
        <Table dataSource={services} columns={columns}/>
    );
}

export default ServiceList