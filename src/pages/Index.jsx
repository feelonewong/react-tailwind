import React from "react";
import Header from "../widgets/Header.jsx";
import Hero from "../widgets/Hero.jsx";
function Index() {
    return (<div className="container mx-auto p-4">
        <Header/>
        <main className="mt-20">
            <Hero/>
        </main>
    </div>)
}


export default Index;