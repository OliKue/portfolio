import "./SkillsSection.css";

import javaIcon from "../../assets/icons/java-original.svg";
import springIcon from "../../assets/icons/spring-original.svg";
import postgresIcon from "../../assets/icons/postgresql-original.svg";
import mongodbIcon from "../../assets/icons/mongodb-original-wordmark.svg";
import gitIcon from "../../assets/icons/git-original.svg";
import elkIcon from "../../assets/icons/logo-elastic-vertical-reverse.svg";
import mavenIcon from "../../assets/icons/maven-logo-black-on-white.png";
import reactIcon from "../../assets/icons/postgresql-original.svg";

export interface SkillsSectionProps {}

export const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  const render = (): React.ReactElement => {
    return (
      <div className="skills-container">
        <div className="skills section" id="skills">
          <h2 className="skill-header">My Top Skills</h2>

          <div className="skills-wrapper">
            <div className="first-set animate__animated animate__pulse">
              <img
                src={javaIcon}
                alt="java"
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={springIcon}
                alt="spring"
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={postgresIcon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={mongodbIcon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
            </div>

            <div className="second-set animate__animated animate__pulse">
              <img
                src={elkIcon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={gitIcon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
              <img
                src={mavenIcon}
                alt=""
                loading="lazy"
                className="icon icon-card"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return render();
};
