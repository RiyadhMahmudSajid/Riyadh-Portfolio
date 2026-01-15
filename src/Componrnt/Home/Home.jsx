import React from 'react';
import Hero from '../Hero';
import AnimatedBackground from '../particlesInit/Particles';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;