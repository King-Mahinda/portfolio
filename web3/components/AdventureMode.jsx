import { useEffect, useRef } from 'react';
import './../styles/animations.scss';

const AdventureMode = ({ onSelect }) => {
  const avatars = [
    { id: 'recruiter', name: 'Recruiter', icon: '👔', focus: 'projects' },
    { id: 'investor', name: 'Investor', icon: '💰', focus: 'metrics' },
    { id: 'collab', name: 'Collaborator', icon: '🤝', focus: 'process' }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    // Parallax effect initialization
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="adventure-mode" ref={containerRef}>
      <h2>Choose Your Adventure</h2>
      <div className="avatar-grid">
        {avatars.map(avatar => (
          <div 
            key={avatar.id}
            className="avatar-card"
            onClick={() => onSelect(avatar)}
            data-focus={avatar.focus}
          >
            <span className="avatar-icon">{avatar.icon}</span>
            <span className="avatar-name">{avatar.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventureMode;