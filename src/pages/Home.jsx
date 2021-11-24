import React, { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = "Homepage - Clicks Counter";
    });

    return (
        <>
            <h1>Home page</h1>
        </>
    )
}
