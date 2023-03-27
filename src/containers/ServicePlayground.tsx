import GraphiQL from "graphiql";
import React from "react";
import {createGraphiQLFetcher} from "@graphiql/toolkit";
import {useParams} from "react-router-dom";

const ServicePlayground: React.FC = () => {
    let {name} = useParams()
    const fetcher = createGraphiQLFetcher({url: `http://localhost:8000/${name}/graphql`});

    return <div id="graphiql" style={{"height": "100vh"}}>
        <GraphiQL fetcher={fetcher}/>
    </div>
}

export default ServicePlayground