import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Redux",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Flask",
    "Dagger2"
];

const labelsSecond = [
    "Git",
    "AWS Lambdas",
    "AWS Step Functions",
    "AWS API Gateway",
    "AWS DynamoDB",
    "AWS SageMaker",
    "AWS CDK",
    "Cypress",
    "Selenium",
    "JUnit"
];

const labelsThird = [
    "Python",
    "LangChain",
    "DynamoDB",
    "AutoGen",
    "TensorFlow",
    "Pandas"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed robust and scalable web applications using a wide range of modern technologies, including React, Spring Boot, and Node.js. With a deep understanding of both frontend and backend development, I focus on building efficient, responsive, and secure web applications. I am experienced in the entire SDLC, from design to deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud Computing & Automation</h3>
                    <p>Once applications are built, I ensure smooth and reliable deployments through automation and CI/CD pipelines. I have hands-on experience managing infrastructure and integrating services on AWS, along with testing and deployment automation using tools like Cypress and Selenium, ensuring robust systems and minimal downtime.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLMs</h3>
                    <p>I specialize in Generative AI (GenAI) and Large Language Models (LLMs), focusing on integrating these technologies into enterprise applications. With experience using LangChain and AutoGen, I build scalable AI-driven workflows that enhance decision-making and user engagement. My expertise includes optimizing AI performance through efficient data handling and dynamic caching strategies for real-time solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;