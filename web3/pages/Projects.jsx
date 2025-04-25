import ProjectQuests from '../components/ProjectQuests';

const Projects = ({ mode }) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      difficulty: 'Epic',
      challenge: 'Built a scalable e-commerce solution handling 10k+ concurrent users',
      obstacle: 'Optimizing checkout flow to reduce cart abandonment',
      impact: 'Increased conversion by 35%',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    // Add more projects...
  ];

  return (
    <div className="projects-page">
      <h1>Quest Log</h1>
      <ProjectQuests projects={projects} />
    </div>
  );
};

export default Projects;