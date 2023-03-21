import GraphiQL from "graphiql";
import React from "react";
import {createGraphiQLFetcher} from "@graphiql/toolkit";
import {useParams} from "react-router-dom";

const ServicePlayground: React.FC = () => {
    let {name} = useParams()
    const fetcher = createGraphiQLFetcher({url: `http://localhost:8000/${name}/graphql`});

    return <GraphiQL fetcher={fetcher}/>
}

export default ServicePlayground