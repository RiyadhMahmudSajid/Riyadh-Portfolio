import React from 'react';
import Navbar from '../Componrnt/Navbar';
import { Outlet } from 'react-router';

import AnimatedBackground from '../Componrnt/particlesInit/Particles';
import Footer from '../Componrnt/Footer';


const RootLayOut = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-x-hidden transition-colors duration-500'>
            <div className="relative z-10">
                <AnimatedBackground></AnimatedBackground>

            </div>
            <main>
                <Navbar></Navbar>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default RootLayOut;