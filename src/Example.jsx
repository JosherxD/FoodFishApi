import { useEffect } from "react";

export const Example = () => {

    useEffect(() => {
        console.log('my Component is mounted');        
    });

    return (
        <>
            <h1>Example</h1>
        </>
    )
};