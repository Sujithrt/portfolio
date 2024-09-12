import React from "react";
import fakeNewsDetector from '../assets/images/Fake-News-Detector.png';
import promptopia from '../assets/images/Promptopia.png';
import healthcareChatBot from '../assets/images/Healthcare-Chat-Bot.png';
import chatApp from '../assets/images/Real-Time-Chat-App.png';
import pnams from '../assets/images/pnams.png';
import ballTracking from '../assets/images/ball-tracking.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/Sujithrt/Prescription-and-Allergies-Management-System" target="_blank" rel="noreferrer">
                        <img src={pnams} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Sujithrt/Prescription-and-Allergies-Management-System" target="_blank" rel="noreferrer">
                        <h2>Prescription and Allergies Management System</h2>
                    </a>
                    <p>Developed a full-stack system using React.js, Spring Boot, and MySQL for managing patient prescriptions and allergies, improving workflow efficiency for healthcare professionals.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/Sujithrt/Real-Time-Chat-App" target="_blank" rel="noreferrer">
                        <img src={chatApp} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Sujithrt/Real-Time-Chat-App" target="_blank" rel="noreferrer">
                        <h2>Real-Time Chat Application</h2>
                    </a>
                    <p>Built a real-time chat application using NodeJS, ReactJS, MongoDB, and Socket.IO, allowing secure user messaging and authentication with MongoDB.</p>
                </div>

                <div className="project">
                    <a href="https://healthcare-chatbot-sujith.streamlit.app/" target="_blank" rel="noreferrer">
                        <img src={healthcareChatBot} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Sujithrt/healthcare_mining" target="_blank" rel="noreferrer">
                        <h2>Healthcare Chat Bot</h2>
                    </a>
                    <p>Built an AI-powered chatbot using LangChain and OpenAI for healthcare-related queries, integrated with AstraDB for scalable document storage and intelligent querying.</p>
                </div>

                <div className="project">
                    <a href="https://share-prompts-sujith-ramprasad-tellakulas-projects.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={promptopia} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Sujithrt/share-prompts" target="_blank" rel="noreferrer">
                        <h2>Promptopia</h2>
                    </a>
                    <p>Created a full-stack CRUD platform for AI prompt sharing using Next.js, MongoDB, and NextAuth for authentication, with TailwindCSS for responsive design.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/Sujithrt/FakeNewsDetector" target="_blank" rel="noreferrer">
                        <img src={fakeNewsDetector} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/Sujithrt/FakeNewsDetector" target="_blank" rel="noreferrer">
                        <h2>Fake News Detection with RNNs</h2>
                    </a>
                    <p>Developed a fake news detection system using LSTM-based RNNs and Flask. Achieved 92% accuracy in detecting fake news through a curated dataset and balanced training techniques.</p>
                </div>

                <div className="project">
                    <video className="zoom" width="100%" height="63%" controls>
                        <source src="https://myawsbucket-sujith.s3.us-west-2.amazonaws.com/output_video.mov" type="video/mp4" />
                        <a href="https://github.com/Sujithrt/ball_tracking_in_tennis" target="_blank" rel="noreferrer">
                            <img src={ballTracking} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                    </video>
                    <a href="https://github.com/Sujithrt/ball_tracking_in_tennis" target="_blank" rel="noreferrer">
                        <h2>Ball Tracking in Tennis</h2>
                    </a>
                    <p>Developed a solution to track tennis balls and players using a pre-trained YOLOv5 model. Features include image and video processing, speed calculation, and real-time annotation of the tennis ball’s movement.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;