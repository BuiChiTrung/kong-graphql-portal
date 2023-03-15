import {GraphiQLProvider, HeaderEditor, ResponseEditor, VariableEditor} from '@graphiql/react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { QueryEditor } from '@graphiql/react';
import React from "react";


const fetcher = createGraphiQLFetcher({
    url: 'https://countries.trevorblades.com/graphql',
});

const MyGraphQLIDE: React.FC = () => {
    return (
        <GraphiQLProvider fetcher={fetcher} query={"query"}>
            <div className="graphiql-container">
                <QueryEditor />
                <HeaderEditor/>
                <ResponseEditor/>
                <VariableEditor/>
            </div>
        </GraphiQLProvider>
    );
}

export default MyGraphQLIDE