import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://myawsbucket-sujith.s3.us-west-2.amazonaws.com/IMG_1122.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Sujithrt" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sujithrt/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:sujithramprasad@gmail.com" rel="noreferrer"><EmailIcon /></a>
          </div>
          <Typography variant="h2" gutterBottom>
            <strong>Sujith Ramprasad Tellakula</strong>
          </Typography>
          <p>Passionate software developer with expertise in full-stack development, cloud computing, and AI integration. Seeking to apply my skills in building scalable and efficient solutions to drive innovation and enhance user experience.</p>
          <a href="https://myawsbucket-sujith.s3.us-west-2.amazonaws.com/Resume_SDE.pdf?v=latest" download="Sujith_Tellakula_Resume.pdf" target="_blank" rel="noreferrer">
            <Button variant="contained" startIcon={<DownloadIcon />}>
              Resume
            </Button>
          </a>
          <div className="mobile_social_icons">
            <a href="https://github.com/Sujithrt" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sujithrt/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:sujithramprasad@gmail.com" rel="noreferrer"><EmailIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;