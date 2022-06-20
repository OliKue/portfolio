import "./TopSection.css";
import ReactTypingEffect from "react-typing-effect";

export interface TopSectionProps {}

export const TopSection: React.FC<TopSectionProps> = ({}) => {
  const render = (): React.ReactElement => {
    return (
      <div className="top-container" id="top">
        <h1>Oliver Kütemeier</h1>
        <ReactTypingEffect
          className="typing"
          text={["Software Developer", "Problem Solver", "Team Player"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={50}
          eraseDelay={2000}
        />
      </div>
    );
  };
  return render();
};
