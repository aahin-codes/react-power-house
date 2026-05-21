
import Button from '../button/Button'
import './_HeroSection.scss';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="home-small"><span className="dot"></span>React Custom Hooks Library</div>
            <h1 className="home-title">A collection of<br /><span className="bg-gradient">modern React hooks</span><br />ready to ship</h1>
            <p>Production-ready, well-documented hooks for everyday React challenges. Copy, import, and ship — zero configuration needed.</p>
            <div className="hero-buttons">
                <Button label="Explore Hooks" className="primary" />
                <Button label="Github" />
            </div>
        </div>
    )
}

export default HeroSection;
