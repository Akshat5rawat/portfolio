import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            title: 'AI-Powered-Personal-Cloud-Storage',
            description: 'A cloud storage application that allows users to store and manage their files in the cloud.',
            image: '☁️',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Supabase', 'Docker'],
            category: 'fullstack',
            github: 'https://github.com/Akshat5rawat/Ai-Powered-Personal-Cloud-Storage',
            demo: 'https://ai-powered-personal-cloud-storage.vercel.app',
        },
        // {
        //     title: 'AI Chatbot',
        //     description: 'Intelligent chatbot using natural language processing to provide customer support and answer queries.',
        //     image: '🤖',
        //     tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
        //     category: 'ai',
        //     github: 'https://github.com',
        //     demo: 'https://demo.com',
        // },
        // {
        //     title: 'Task Management App',
        //     description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
        //     image: '✅',
        //     tags: ['React', 'Firebase', 'Material-UI'],
        //     category: 'frontend',
        //     github: 'https://github.com',
        //     demo: 'https://demo.com',
        // },
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather application with forecasts, interactive maps, and location-based alerts.',
            image: '🌤️',
            tags: ['JavaScript', 'API', 'HTML','CSS'],
            category: 'frontend',
            github: 'https://github.com/Akshat5rawat/weather2',
            demo: 'https://akshat5rawat.github.io/weather2/',
        },
        {
            title: 'Blog Web application',
            description: 'A blog web application that allows users to create and manage their blog posts.',
            image: '📱',
            tags: ['Node.js', 'Express', 'EJS'],
            category: 'backend',
            github: 'https://github.com/Akshat5rawat/blog',
            demo: 'https://blogbyakshat.vercel.app',
        },
        // {
        //     title: 'Portfolio Generator',
        //     description: 'Dynamic portfolio website generator with customizable themes and easy content management.',
        //     image: '🎨',
        //     tags: ['React', 'Next.js', 'Tailwind'],
        //     category: 'fullstack',
        //     github: 'https://github.com',
        //     demo: 'https://demo.com',
        // },
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        // { id: 'ai', label: 'AI/ML' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid grid grid-3">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card card">
                            <div className="project-image">
                                <span className="project-emoji">{project.image}</span>
                                <div className="project-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
