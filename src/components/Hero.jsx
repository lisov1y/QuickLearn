import '../styles/Hero.css';

function Hero() {
  return (
<section className="Hero d-flex justify-content-center align-items-center">
    <div className="hero-content col-4">
      <h1>Learn Faster, Remember Longer</h1>
      <p>Master any subject with our intuitive flashcard learning system. Create, study, and track your progress all in one place.</p>
      <a href="https://quicklearn.com/get-started" className="cta-button">Start Learning Now</a>
    </div>
    <div className="col-4">
        <svg class="hero-illustration" width="400" height="400" viewBox="0 0 400 400">
        <rect x="100" y="100" width="200" height="250" rx="10" fill="#4A90E2" opacity="0.1"/>
        <g class="floating-card">
            <rect x="120" y="120" width="160" height="30" rx="5" fill="#67B26F" opacity="0.3"/>
            <text x="200" y="140" text-anchor="middle" fill="#67B26F" font-size="14">Biology</text>
        </g>
        <g class="floating-card">
            <rect x="120" y="170" width="160" height="30" rx="5" fill="#FF7B6B" opacity="0.3"/>
            <text x="200" y="190" text-anchor="middle" fill="#FF7B6B" font-size="14">Mathematics</text>
        </g>
        <g class="floating-card">
            <rect x="120" y="220" width="160" height="30" rx="5" fill="#4A90E2" opacity="0.3"/>
            <text x="200" y="240" text-anchor="middle" fill="#4A90E2" font-size="14">Languages</text>
        </g>
        <circle cx="300" cy="150" r="5" fill="#4A90E2" opacity="0.2"/>
        <circle cx="320" cy="180" r="3" fill="#67B26F" opacity="0.2"/>
        <circle cx="280" cy="200" r="4" fill="#FF7B6B" opacity="0.2"/>
        </svg>
    </div>

</section>
  );
}

export default Hero;


