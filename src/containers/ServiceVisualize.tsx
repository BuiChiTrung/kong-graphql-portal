import {GraphQLVoyager, Voyager} from "graphql-voyager";
import React, {useState} from "react";

const ServiceVisualize: React.FC = () => {
    function introspectionProvider(introspectionQuery: any) {
        // This example expects a GraphQL server at the path /graphql.
        // Change this to point wherever you host your GraphQL server.
        return fetch('http://localhost:8000/country/graphql', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: introspectionQuery }),
            credentials: 'include',
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (responseBody) {
                try {
                    // setA(JSON.parse(responseBody))
                    return JSON.parse(responseBody);

                } catch (error) {
                    return responseBody;
                }
            });
    }

    return <Voyager introspection={introspectionProvider} />
}

export default ServiceVisualize