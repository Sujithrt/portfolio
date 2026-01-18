import { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel';
import fakeNewsDetector from '../assets/images/Fake-News-Detector.png';
import promptopia from '../assets/images/Promptopia.png';
import healthcareChatBot from '../assets/images/Healthcare-Chat-Bot.png';
import chatApp from '../assets/images/Real-Time-Chat-App.png';
import pnams from '../assets/images/pnams.png';
import ballTracking from '../assets/images/ball-tracking.jpeg';
import prepify from '../assets/images/Prepify.png';
import emotionRecognition from '../assets/images/emotion-recognition.png';
import elasticVision from '../assets/images/elastic-vision.png';
import snapdrobe from '../assets/images/snapdrobe.png';
import edgeComputing from '../assets/images/edge-computing.png';
import coreCoach from '../assets/images/ai-fitness-tracking-insight.jpeg';
import supplySight from '../assets/images/supply-chain-intelligence.png';
import '../assets/styles/Project.scss';

function Project() {
    const [carouselKey, setCarouselKey] = useState(0);

    useEffect(() => {
        setCarouselKey(1);
    }, []);

    const projects = [
        {
            image: prepify,
            title: "Prepify (AI Innovation Award at SunHacks 2024)",
            description: "Developed an AI powered mock interview tool built with React.js, Node.js, AWS Transcribe and Polly, and WebSockets to deliver real-time, voice-based interview simulations and personalized feedback.",
            link: "https://devpost.com/software/prepify-io"
        },
        {
            image: snapdrobe,
            title: "SnapDrobe (2nd Place in the Snap Inc. Challenge at LAHacks 2025)",
            description: "Developed SnapDrobe, an AI-powered AR wardrobe assistant for Snap Spectacles using Lens Studio, TypeScript, and Python to voice-capture garments and recommend context-aware outfits.",
            link: "https://devpost.com/software/snapdrobe"
        },
        {
            image: elasticVision,
            title: "Elastic Face Recognition System",
            description: "Developed an elastic face recognition system using AWS and deep learning, dynamically scaling compute resources to process images on demand and significantly enhancing real-time application efficiency.",
            link: "https://github.com/Sujithrt/ElasticVision"
        },
        {
            image: edgeComputing,
            title: "Edge Computing using AWS IoT Services",
            description: "Implemented an on‑device face detection pipeline using AWS IoT Greengrass V2 and MTCNN, decoding Base64 images over MQTT and dispatching results to Amazon SQS for scalable downstream processing.",
            link: "https://github.com/Sujithrt/EdgeComputing"
        },
        {
            image: coreCoach,
            title: "AI Fitness Tracking & Insights",
            description: "Built a secure, microservices-based AI fitness platform using Spring Boot, Keycloak, and OpenAI for personalized tracking and insights.",
            link: "https://github.com/Sujithrt/ai-fitness-tracking-insights"
        },
        {
            image: supplySight,
            title: "Supply Chain Intelligence & Risk Insights",
            description: "Built an interactive supply-chain intelligence platform combining Neo4j graph analytics, Snowflake, and AI-powered risk and demand forecasting with AWS Bedrock.",
            link: "https://github.com/Sujithrt/supply-chain-intelligence"
        },
        {
            image: healthcareChatBot,
            title: "Healthcare Chat Bot",
            description: "Built an AI-powered chatbot using LangChain and OpenAI for healthcare-related queries, integrated with AstraDB for scalable document storage and intelligent querying.",
            link: "https://github.com/Sujithrt/healthcare_mining"
        },
        {
            image: chatApp,
            title: "Real-Time Chat Application",
            description: "Built a real-time chat application using NodeJS, ReactJS, MongoDB, and Socket.IO, allowing secure user messaging and authentication with MongoDB.",
            link: "https://github.com/Sujithrt/Real-Time-Chat-App"
        },
        {
            image: promptopia,
            title: "Promptopia",
            description: "Created a full-stack CRUD platform for AI prompt sharing using Next.js, MongoDB, and NextAuth for authentication, with TailwindCSS for responsive design.",
            link: "https://github.com/Sujithrt/share-prompts"
        },
        {
            image: fakeNewsDetector,
            title: "Fake News Detection with RNNs",
            description: "Developed a fake news detection system using LSTM-based RNNs and Flask. Achieved 92% accuracy in detecting fake news through a curated dataset and balanced training techniques.",
            link: "https://github.com/Sujithrt/FakeNewsDetector"
        },
        {
            image: ballTracking,
            title: "Ball Tracking in Tennis",
            description: "Developed a solution to track tennis balls and players using a pre-trained YOLOv5 model. Features include image and video processing, speed calculation, and real-time annotation of the tennis ball’s movement.",
            link: "https://github.com/Sujithrt/ball_tracking_in_tennis"
        },
        {
            image: emotionRecognition,
            title: "Neurosymbolic AI - Rule Based Emotion Recognition",
            description: "Developed an interpretable emotion recognition system using MediaPipe for facial feature extraction and rule-based algorithms (RIPPER, Decision Trees, Apriori) for transparent classification.",
            link: "https://github.com/Sujithrt/Neurosymbolic-AI-Rule-Based-Emotion-Detection"
        },
        {
            image: pnams,
            title: "Prescription and Allergies Management System",
            description: "Developed a full-stack system using React.js, Spring Boot, and MySQL for managing patient prescriptions and allergies, improving workflow efficiency for healthcare professionals.",
            link: "https://github.com/Sujithrt/Prescription-and-Allergies-Management-System"
        },
    ];

    const projectPairs = [];
    for (let i = 0; i < projects.length; i += 2) {
        projectPairs.push(projects.slice(i, i + 2));
    }

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <Carousel 
                key={carouselKey}
                indicators={true}
                animation="slide"
                fullHeightHover={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: '#666666'
                    }
                }}
            >
                {projectPairs.map((pair, index) => (
                    <div key={index} className="projects-grid">
                        {pair.map((project, idx) => (
                            <div key={idx} className="project">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <img src={project.image} className="zoom" alt="thumbnail" style={{ width: '100%', height: 'auto' }} />
                                </a>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <h2>{project.title}</h2>
                                </a>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Project;