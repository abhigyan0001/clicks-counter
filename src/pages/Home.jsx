import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Homepage - Clicks Counter";
    });

    function navigateToTest(){
        navigate("/test");
    }
    return (
        <>
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h3>Battle of Clicks!</h3>
                <button type="button" class="btn btn-primary btn-lg" onClick={navigateToTest}>Test ➝</button>
            </div>
        </>
    )
}
