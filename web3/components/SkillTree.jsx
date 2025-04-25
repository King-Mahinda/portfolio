import { useState } from 'react';

const skills = {
  development: [
    { name: 'JavaScript', level: 95, projects: 42 },
    { name: 'React', level: 90, projects: 28 },
    { name: 'Node.js', level: 85, projects: 19 }
  ],
  design: [
    { name: 'UI/UX', level: 80, projects: 15 },
    { name: 'Figma', level: 75, projects: 12 },
    { name: 'Motion Design', level: 65, projects: 8 }
  ]
};

const SkillTree = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="skill-tree">
      <h2>Skill Power-Ups</h2>
      <div className="skill-categories">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category.toUpperCase()}</h3>
            <div className="skills-container">
              {skills.map(skill => (
                <div 
                  key={skill.name}
                  className={`skill ${activeSkill?.name === skill.name ? 'active' : ''}`}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div 
                    className="skill-level-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">Lv.{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {activeSkill && (
        <div className="skill-details">
          <h3>{activeSkill.name} Mastery</h3>
          <p>Applied in {activeSkill.projects} projects</p>
          <div className="skill-projects">
            {/* Would map through actual projects here */}
            <div className="project-badge">Project 1</div>
            <div className="project-badge">Project 2</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;