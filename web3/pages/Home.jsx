import { useState } from 'react';
import AdventureMode from '../components/AdventureMode';
import SkillTree from '../components/SkillTree';

const Home = ({ mode }) => {
  const [avatar, setAvatar] = useState(null);

  return (
    <div className="home-page">
      {!avatar ? (
        <AdventureMode onSelect={setAvatar} />
      ) : (
        <>
          <h1>Welcome, {avatar.name}!</h1>
          <p>You've chosen to focus on {avatar.focus}.</p>
          
          <section className="hero">
            <h2>I'm [Your Name], a Digital Adventurer</h2>
            <p>Scroll down or press SPACE for bullet time...</p>
          </section>
          
          <SkillTree />
        </>
      )}
    </div>
  );
};

export default Home;