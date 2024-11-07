import '../styles/Features.css';

function Features() {
  return (
        <section className="features">
            <div className="feature-card">
            <svg className="feature-icon" viewBox="0 0 60 60">
                <rect x="10" y="10" width="40" height="40" rx="5" fill="#4A90E2"/>
                <path d="M20 30h20M30 20v20" stroke="white" stroke-width="4"/>
            </svg>
            <h3>Create Custom Flashcards</h3>
            <p>Build your own study decks with our easy-to-use creator</p>
            </div>
            <div className="feature-card">
            <svg className="feature-icon" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="25" fill="#67B26F"/>
                <path d="M20 30l8 8 16-16" stroke="white" stroke-width="4" fill="none"/>
            </svg>
            <h3>Track Your Progress</h3>
            <p>Monitor your learning journey with detailed statistics</p>
            </div>
            <div className="feature-card">
            <svg className="feature-icon" viewBox="0 0 60 60">
                <rect x="10" y="20" width="40" height="25" rx="5" fill="#FF7B6B"/>
                <circle cx="30" cy="32.5" r="8" fill="white"/>
            </svg>
            <h3>Easy to Use</h3>
            <p>Intuitive interface designed for efficient learning</p>
            </div>
        </section>
  );
}

export default Features;
