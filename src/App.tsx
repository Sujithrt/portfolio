import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const appTheme = createTheme({
        palette: {
            mode: mode === "light" ? 'light' : 'dark',
        },
    });

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <ThemeProvider theme={appTheme}>
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation mode={mode} modeChange={handleModeChange} />
                <FadeIn transitionDuration={700}>
                    <Main />
                    <Expertise />
                    <Timeline />
                    <Project />
                    <Contact />
                </FadeIn>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;