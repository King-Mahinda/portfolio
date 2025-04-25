import { useState } from 'react';

const ProjectQuests = ({ projects }) => {
  const [activeQuest, setActiveQuest] = useState(null);

  return (
    <div className="project-quests">
      <h2>Quest Log</h2>
      <div className="quests-grid">
        {projects.map(project => (
          <div 
            key={project.id}
            className={`quest-card ${activeQuest === project.id ? 'expanded' : ''}`}
            onClick={() => setActiveQuest(project.id === activeQuest ? null : project.id)}
          >
            <div className="quest-header">
              <span className="quest-icon">⚔️</span>
              <h3 className="quest-title">{project.title}</h3>
              <span className="quest-difficulty">{project.difficulty}</span>
            </div>
            
            {activeQuest === project.id && (
              <div className="quest-details">
                <div className="quest-section">
                  <h4>Challenge</h4>
                  <p>{project.challenge}</p>
                </div>
                <div className="quest-section">
                  <h4>Boss Fight</h4>
                  <p>{project.obstacle}</p>
                </div>
                <div className="quest-section">
                  <h4>Reward</h4>
                  <p>{project.impact}</p>
                </div>
                <div className="quest-tech">
                  {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectQuests;