import { useParams } from "react-router";

export function ArticlePage(){

    let {id} = useParams();

    return (
        <>
            <h1>Article ID {id}</h1>
        </>
    )
}