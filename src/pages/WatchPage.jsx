import { useSearchParams } from "react-router";

export function WatchPage(){
    let [searchParamsObj] = useSearchParams();

    return (
        <h1>Watch video ID {searchParamsObj.get("video")}</h1>
    )
}