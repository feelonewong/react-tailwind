import React from "react";
import Header from "../widgets/Header.jsx";
import Hero from "../widgets/Hero.jsx";
import Solutions from "../widgets/Solutions.jsx";
import WorkFlow from "../widgets/WorkFlow.jsx";
import Clients from "../widgets/Clients.jsx";
import Contact from "../widgets/Contact.jsx";
import Footer from "../widgets/Footer.jsx";
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
            <section className="mt-20 mx-auto md:w-3/5">
                <Clients/>
            </section>
            <section className="mt-20">
                <Contact/>
            </section>
        </main>
        <Footer/>
    </div>)
}


export default Index;