import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Labmentrix Pvt Ltd</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Managed large-scale deployment of JupyterHub with NBGrader and
              WebWork software supporting ~5,500 students. Configured and
              administered server-side web applications, handled Linux server
              administration and Apache configuration, and automated tasks
              including user account creation, database management, and system
              maintenance using shell scripts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Internship Studios</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Performed data analysis and reporting for multi-domain internship
              projects. Created dashboards and visualizations using Excel and
              Power BI. Conducted data cleaning, preprocessing, and exploratory
              data analysis. Generated insights to support AI and Machine
              Learning modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's Degree — AI / Data Science</h4>
                <h5>Centurion University, Bhubaneswar (Jatani, Ramchandrapura)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree in AI / Data Science (Current).
              Relevant coursework includes Machine Learning, Deep Learning,
              Computer Vision, and MLOps. Actively working on AI research
              projects and real-world deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
