import "./ProjectsSection.css";

import sudokuIcon from "../../assets/images/sudoku.jpg";
import gameIcon from "../../assets/images/gameEngine.jpg";
import onIcon from "../../assets/images/complexity.png";

export interface ProjectsSectionProps {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  const render = (): React.ReactElement => {
    return (
      <div className="projects" id="projects">
        <h2 className="projects-title">Recent Projects</h2>
        <div className="projects-container">
          <div className="project-container project-card">
            <img
              src={sudokuIcon}
              alt="sudokuIcon"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Sudoku</h3>
            <p className="project-details">
              A application to play sudoku online. Constantly improving the
              logical solving process to optimize difficulty scaling and
              guarantee humanly solvable puzzles.
            </p>
            <p>
              <a
                href="https://my5ud0ku-app.herokuapp.com/"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Live-Demo
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com/OliKue/sudoku-backend"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Backend
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com/OliKue/sudoku-frontend"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Frontend
              </a>
            </p>
          </div>
          <div className="project-container project-card">
            <img
              src={gameIcon}
              alt="gameIcon"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">2DGameEngine</h3>
            <p className="project-details">
              A 2D game engine build from scratch to understand principles of
              game development and important aspects of game design in java.
            </p>
            <p>
              <a
                href="https://github.com/OliKue/2DGameEngine"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Check it Out
              </a>
            </p>
          </div>
          <div className="project-container project-card">
            <img
              src={onIcon}
              alt="komplexity"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Algorithms</h3>
            <p className="project-details">
              In this project, I implemented a variety of algorithms to
              understand their complexity, genius and the problems they solve.
            </p>
            <p>
              <a
                href="https://github.com/OliKue/Algorithms"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Check it Out
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return render();
};
