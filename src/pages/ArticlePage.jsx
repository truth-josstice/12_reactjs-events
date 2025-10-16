import { Outlet } from "react-router";

export function ArticlePage(){
    return (
        <>
            <h1>Articles Here</h1>
            <Outlet />
        </>
    )
}