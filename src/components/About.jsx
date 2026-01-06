import './About.css';

const About = () => {
    const stats = [
        { number: '4th', label: 'Year Student' },
        { number: '5+', label: 'Projects' },
        { number: '6', label: 'CGPA' },
        { number: '5+', label: 'Technologies' },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <h3 className="text-gradient">Passionate Developer & Problem Solver</h3>
                            <p>
                                I'm a final year BTech Computer Science Engineering student with a deep passion
                                for technology and innovation. My journey in computer science has been driven by
                                curiosity and a desire to create impactful solutions.
                            </p>
                            <p>
                                Throughout my academic career, I've developed a strong foundation in software
                                development, data structures, algorithms, and modern web technologies. I love
                                tackling complex problems and turning ideas into reality through code.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to
                                open-source projects, or participating in hackathons. I believe in continuous
                                learning and staying updated with the latest industry trends.
                            </p>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎓</div>
                                <div className="highlight-content">
                                    <h4>Education</h4>
                                    <p>BTech in Computer Science Engineering</p>
                                    <span className="highlight-detail">2022- 2026</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">💡</div>
                                <div className="highlight-content">
                                    <h4>Interests</h4>
                                    <p>Full-Stack Development</p>
                                    <span className="highlight-detail">Always learning new things</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">🚀</div>
                                <div className="highlight-content">
                                    <h4>Goal</h4>
                                    <p>Building innovative solutions that make a difference</p>
                                    <span className="highlight-detail">Impact through technology</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card card">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; export const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 50 },
                { name: 'JavaScript', level: 70 },
                { name: 'HTML/CSS', level: 70 },
                // { name: 'TypeScript', level: 75 },
                // { name: 'Tailwind CSS', level: 50 },
            ],
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 60 },
                { name: 'Express', level: 55 },
                { name: 'Python', level: 60 },
                { name: 'MongoDB', level: 75 },
                { name: 'PostgreSQL', level: 70 },
            ],
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git & GitHub', level: 80 },
                { name: 'Docker', level: 65 },
                { name: 'AWS', level: 40 },
                { name: 'Linux', level: 55 },
                // { name: 'Figma', level: 50 },
            ],
        },
        // {
        //     title: 'Core CS',
        //     icon: '💻',
        //     skills: [
        //         { name: 'Data Structures', level: 75 },
        //         { name: 'Algorithms', level: 75 },
        //         { name: 'OOP', level: 75 },
        //         { name: 'DBMS', level: 75 },
        //         { name: 'OS', level: 75 },
        //     ],
        // },
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid grid grid-2">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category card">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${skillIndex * 0.1}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="skills-additional">
                <h3 className="text-gradient">Additional Competencies</h3>
                <div className="competencies">
                    <span className="competency-tag">Problem Solving</span>
                    <span className="competency-tag">Team Collaboration</span>
                    <span className="competency-tag">Agile Methodology</span>
                    <span className="competency-tag">RESTful APIs</span>
                    <span className="competency-tag">Responsive Design</span>
                    <span className="competency-tag">Version Control</span>
                    <span className="competency-tag">CI/CD</span>
                    <span className="competency-tag">Testing & Debugging</span>
                    <span className="competency-tag">Code Review</span>
                    <span className="competency-tag">Technical Writing</span>
                </div>
            </div> */}
            </div>
        </section>
    );
};

