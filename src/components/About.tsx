import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Software Engineer with 8 years of experience building scalable,
          high-performance backend systems across fintech, e-commerce, and HR-tech.
          I've led re-architectures that cut response times by 95%, migrated 200+
          queues from RabbitMQ to Kafka across 18 services, and built invoicing
          engines that eliminated 70% of manual finance workload.
          <br /><br />
          Outside of full-time roles, I'm the co-founder of Putri Labs, where I'm 
          currently building CustomsPro — an AI-powered customs clearance 
          automation tool — and VacayStack, a vacation rental PMS.
        </p>
      </div>
    </div>
  );
};

export default About;
