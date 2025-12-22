//This page is a wrapper for the About component
import React from 'react';
import Hero from './Hero';
import Team from './Team';

function AboutPage() {
    return (
        <>
            <h1>AboutPage</h1>
            <Hero />
            <Team/>
        </>
    );
}

export default AboutPage;