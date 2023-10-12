import React from 'react';

interface AboutProps {
    title: string;
    description: string;
}

const About: React.FC<AboutProps> = ({ title, description }) => {
    return (
        <div className="about-section">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default About;
