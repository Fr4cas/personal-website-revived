import React from "react";

function Home() {
    return (
        <main className="landing-page">
            <section className="intro">
                <h1>Hi! I'm Lucas</h1>
                <p>Developer</p>
            </section>

            <section className="menu">
                <div className="menu-grid">
                    <div className="menu-item">
                        {/* Replace with icon or image */}
                        <div className="icon-slot" />
                        <span>About</span>
                    </div>
                    <div className="menu-item">
                        <div className="icon-slot" />
                        <span>Projects</span>
                    </div>
                    <div className="menu-item">
                        <div className="icon-slot" />
                        <span>Links</span>
                    </div>
                    <div className="menu-item">
                        <div className="icon-slot" />
                        <span>Progress</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;