import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PULKIT
              <br />
              <span>ROHILLA</span>
            </h1>
            <h3 className="intro-role">Co-founder @ Putri Labs</h3>
          </div>
          <div className="landing-info">
            <h3>Senior Software Developer |</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Backend</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Systems</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
