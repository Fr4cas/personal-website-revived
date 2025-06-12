import { useState } from "react";

function Home() {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <main>
            <div className="main-body">
                <h1>Hi! I'm Lucas</h1>
                <p>Developer</p>

                <div className="menu">
                    <div className="item" onClick={() => setShowAbout(true)}>About</div>
                    <div className="item">Projects</div>
                    <div className="item">Links</div>
                    <div className="item">Progress</div>
                </div>
            </div>


            {/* Pop up section for About */}
            {showAbout && (
                <div className="window">
                    <div className="window-header">
                        <span>About Me</span>
                        <button className="close-btn" onClick={() => setShowAbout(false)}>X</button>
                    </div>
                    <div className="window-body">
                        <div className="about-header">
                            <img
                                src="https://via.placeholder.com/80"
                                alt="Profile"
                                className="profile-pic"
                            />
                            <div className="about-text">
                                <h2>Fracas</h2>
                                <p>Just another dev that might end up on the streets...</p>
                            </div>
                        </div>

                        <div className="about-divider"></div>
                        <p>Hi! I am Lucas, forever a learner and gamer whilst occasionally being a developer.</p>
                    </div>
                </div>
            )}

        </main>
    );
}

export default Home;