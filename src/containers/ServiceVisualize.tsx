import {GraphQLVoyager, Voyager} from "graphql-voyager";
import React, {useState} from "react";

const ServiceVisualize: React.FC = () => {
    function introspectionProvider(introspectionQuery: any) {
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
                    return JSON.parse(responseBody);

                } catch (error) {
                    return responseBody;
                }
            });
    }

    return <Voyager introspection={introspectionProvider} />
}

export default ServiceVisualize