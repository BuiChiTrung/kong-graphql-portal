// import {GraphQLVoyager, Voyager} from "graphql-voyager";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Voyager} from "graphql-voyager";

const ServiceVisualize: React.FC = () => {
    let {name} = useParams()

    function introspectionProvider(query: any) {
        return fetch(`http://localhost:8000/${name}/graphql`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query }),
        })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err);
            });
    }

    return <Voyager introspection={introspectionProvider}/>
}

export default ServiceVisualize