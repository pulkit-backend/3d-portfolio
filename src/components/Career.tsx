import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE-3</h4>
                <h5>Multiplier</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Lead design and delivery of modular invoicing engines (Insurance, VAS, Off-cycle) 
              cutting manual finance workload by 70%. Shipped high-impact Invoice Anomaly Detection system.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Myntra</h5>
              </div>
              <h3>2021–25</h3>
            </div>
            <p>
              Led end-to-end re-architecture of core revenue services (95% write latency improvement). 
              Owned org-wide RabbitMQ to Kafka migration (200+ queues). Built core Java framework libraries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer II</h4>
                <h5>Info Edge India</h5>
              </div>
              <h3>2019–21</h3>
            </div>
            <p>
              Migrated legacy registration systems to low-latency microservices, driving 
              140% growth in registrations. Built high-performance Lead Management System (2s delivery).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Info Edge India</h5>
              </div>
              <h3>2018–19</h3>
            </div>
            <p>
              Optimized enterprise application forms, reducing DB queries by 90% and 
              tripling page load speeds. Built real-time async monitoring systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
