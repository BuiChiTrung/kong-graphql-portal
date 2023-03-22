// import {GraphQLVoyager, Voyager} from "graphql-voyager";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ServiceVisualize: React.FC = () => {
    let {name} = useParams()

    useEffect(() => {
        const script = document.createElement('script');

        script.async = true;
        script.text = "function introspectionProvider(introspectionQuery) {\n" +
            "        // This example expects a GraphQL server at the path /graphql.\n" +
            "        // Change this to point wherever you host your GraphQL server.\n" +
            `        return fetch('http://localhost:8000/${name}/graphql', {\n` +
            "            method: 'post',\n" +
            "            headers: {\n" +
            "                Accept: 'application/json',\n" +
            "                'Content-Type': 'application/json',\n" +
            "            },\n" +
            "            body: JSON.stringify({ query: introspectionQuery }),\n" +
            "            credentials: 'include',\n" +
            "        })\n" +
            "            .then(function (response) {\n" +
            "                return response.text();\n" +
            "            })\n" +
            "            .then(function (responseBody) {\n" +
            "                try {\n" +
            "                    return JSON.parse(responseBody);\n" +
            "                } catch (error) {\n" +
            "                    return responseBody;\n" +
            "                }\n" +
            "            });\n" +
            "    }\n"+
            " GraphQLVoyager.init(document.getElementById('voyager'), {\n" +
            "        introspection: introspectionProvider,\n" +
            "    });"

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [name]);

    return <div id="voyager"></div>
}

export default ServiceVisualize