import "./HeroSection.css";
import heroImage from "../../assets/images/hero_round.jpg";
import backgroundImage from "../../assets/images/space_1.jpg";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const render = (): React.ReactElement => {
    return (
      <div className="hero-container">
        <div className="hero" id="about">
          <img
            src={heroImage}
            className="hero-img"
            alt="oliver"
            loading="lazy"
          />
          <div className="bio animate__animated animate__shakeX">
            <h2 className="bio-title">About Me</h2>
            <p className="bio-text">
              I'm Oliver, a software developer and technology enthusiast from
              Berlin. Always motivated to advance and expand my skill set I'm
              looking for the next opportunity or project to improve. I am
              currently getting into front-end development to join the
              full-stack team.
            </p>
          </div>
        </div>
      </div>
    );
  };
  return render();
};
