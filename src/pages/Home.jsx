import { useState } from "react";

// Assets
import AboutIcon from "../assets/icons/about.svg";
import ProjectsIcon from "../assets/icons/projects.svg";
import ProgressIcon from "../assets/icons/progress.svg"
import LinksIcon from "../assets/icons/links.svg"

function Home() {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <main>
            <div className="main-body">
                <h1>Hi! <span className="highlight">I'm Lucas</span></h1>
                <p>Developer</p>

                <div className="menu">
                    <div className="item" onClick={() => setShowAbout(true)}>
                        <div className="item-inner">
                            <img src={AboutIcon} alt="About icon" className="icon" />
                            <span>About</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-inner">
                            <img src={ProjectsIcon} alt="Projects icon" className="icon" />
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-inner">
                            <img src={LinksIcon} alt="Links icon" className="icon" />
                            <span>Links</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-inner">
                            <img src={ProgressIcon} alt="Progress icon" className="icon" />
                            <span>Progress</span>
                        </div>
                    </div>
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