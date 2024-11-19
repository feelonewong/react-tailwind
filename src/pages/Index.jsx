import React from "react";
import Header from "../widgets/Header.jsx";
import Hero from "../widgets/Hero.jsx";
import Solutions from "../widgets/Solutions.jsx";
import WorkFlow from "../widgets/WorkFlow.jsx";

function Index() {
    return (<div className="container mx-auto p-4">
        <Header/>
        <main className="mt-20">
            <Hero/>
            <section className="md:p-20">
                <Solutions/>
            </section>
            <section className="mt-20">
                <WorkFlow/>
            </section>

        </main>
    </div>)
}


export default Index;