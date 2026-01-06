import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Development Intern',
            company: 'Tech Startup Inc.',
            period: 'Jun 2025 - Aug 2025',
            description: 'Developed responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features.',
            achievements: [
                'Built 5+ reusable React components',
                'Improved page load time by 40%',
                'Implemented RESTful APIs',
            ],
            icon: '💼',
        },
        {
            role: 'Open Source Contributor',
            company: 'Various Projects',
            period: '2024 - Present',
            description: 'Contributing to open-source projects on GitHub, focusing on web development and developer tools.',
            achievements: [
                'Contributed to 10+ repositories',
                'Fixed critical bugs and added features',
                'Improved documentation',
            ],
            icon: '🌟',
        },
        {
            role: 'Technical Team Lead',
            company: 'College Tech Club',
            period: '2024 - Present',
            description: 'Leading a team of students in organizing hackathons, workshops, and technical events.',
            achievements: [
                'Organized 3 successful hackathons',
                'Conducted workshops for 200+ students',
                'Mentored junior developers',
            ],
            icon: '🎓',
        },
    ];

    const achievements = [
        {
            title: 'Hackathon Winner',
            description: 'Won 1st place in Inter-College Hackathon 2025',
            icon: '🏆',
        },
        {
            title: 'Coding Competition',
            description: 'Top 10 in National Level Coding Competition',
            icon: '🥇',
        },
        {
            title: 'Research Paper',
            description: 'Published research paper on AI/ML applications',
            icon: '📄',
        },
        {
            title: 'Certification',
            description: 'AWS Certified Cloud Practitioner',
            icon: '🎖️',
        },
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Experience & Achievements</h2>

                <div className="experience-content">
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-icon">
                                    <span>{exp.icon}</span>
                                </div>
                                <div className="timeline-content card">
                                    <div className="timeline-header">
                                        <div>
                                            <h3>{exp.role}</h3>
                                            <h4>{exp.company}</h4>
                                        </div>
                                        <span className="timeline-period">{exp.period}</span>
                                    </div>
                                    <p>{exp.description}</p>
                                    <ul className="achievement-list">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="achievements-grid">
                        <h3 className="text-gradient achievements-title">Notable Achievements</h3>
                        <div className="grid grid-2">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="achievement-card card">
                                    <div className="achievement-icon">{achievement.icon}</div>
                                    <div className="achievement-content">
                                        <h4>{achievement.title}</h4>
                                        <p>{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
