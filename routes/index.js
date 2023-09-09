var express = require('express');
var router = express.Router();

const glossaryData = [
  {
    id: 1,
    term: "DevOps",
    description: "DevOps encompasses a collection of methodologies that amalgamate software development (Dev) with IT operations (Ops) to streamline the development life cycle, resulting in swifter delivery of applications and services.",
    references: "[1] E. Freeman, “DevOps,” Amazon, https://aws.amazon.com/devops/what-is-devops/ (accessed Jul. 28, 2023)."

  },
  {
    id: 2,
    term: "Continuous Integration (CI)",
    description: "CI is a practice centered around frequently integrating code modifications into a shared code repository. With each integration, automated tests are triggered to guarantee that newly introduced code doesn't introduce errors or bugs.",
    references: "[2] “Delivering extraordinary impact together,” Thoughtworks, https://www.thoughtworks.com/ (accessed Jul. 28, 2023). "

  },
  {
    id: 3,
    term: "Continuous Deployment (CD)",
    description: "CD refers to the mechanization of the software release procedure. It involves the automatic deployment of code alterations to production or staging environments once they successfully pass CI tests.",
    references: "[3] “Deployment overview,” CircleCI, https://circleci.com/docs/deployment-overview/ (accessed Jul. 28, 2023). "

  },
  {
    id: 4,
    term: "Version Control",
    description: "Version control is a system that tracks changes to files and directories over time, allowing multiple developers to collaborate on a project while maintaining a history of changes.",
    references: "[4] Atlassian, “What is version control: Atlassian Git Tutorial,” Atlassian, https://www.atlassian.com/git/tutorials/what-is-version-control (accessed Jul. 28, 2023). "

  },
  {
    id: 5,
    term: "Containerization",
    description: "Containerization is a technology that packages an application and its dependencies together into a single unit called a container. Containers are lightweight, consistent, and portable.",
    references: "[5] Atlassian, “What is version control: Atlassian Git Tutorial,” Atlassian, https://www.atlassian.com/git/tutorials/what-is-version-control (accessed Jul. 28, 2023). "

  },
  {
    id: 6,
    term: "Orchestration",
    description: "Orchestration in DevOps refers to the automated management, coordination, and deployment of containers and services in a containerized environment, often using tools like Kubernetes.",
    references: "[6] “What is container orchestration?,” Red Hat - We make open source technologies for the enterprise, https://www.redhat.com/en/topics/containers/what-is-container-orchestration (accessed Jul. 29, 2023). "

  },
  {
    id: 7,
    term: "Infrastructure as Code (IaC)",
    description: "IaC is a practice where infrastructure is defined and managed using code. It allows for automated provisioning and configuration of infrastructure resources.",
    references: "[7] HashiCorp, “What is infrastructure as code and why is it important?,” HashiCorp, https://www.hashicorp.com/resources/what-is-infrastructure-as-code (accessed Jul. 29, 2023). "

  },
  {
    id: 8,
    term: "Microservices",
    description: "Microservices is an architectural approach where a complex application is broken down into smaller, independently deployable services that communicate via APIs.",
    references: "[8] “Microservices,” martinfowler.com, https://martinfowler.com/articles/microservices.html (accessed Jul. 29, 2023). "

  },
  {
    id: 9,
    term: "Monitoring and Observability",
    description: "Monitoring involves collecting data about system health and performance, while observability focuses on gaining insights into system behavior, often through logs, metrics, and traces.",
    references: "[9] “EP. #1, monitoring vs. Observability,” Honeycomb, https://www.honeycomb.io/resources/ep-1-monitoring-vs-observability (accessed Jul. 30, 2023). "

  },
  {
    id: 10,
    term: "Continuous Monitoring",
    description: "Continuous monitoring is the practice of continuously tracking the performance and health of applications and infrastructure to identify and address issues promptly.",
    references: "[10] “Splunk Solutions,” Splunk, https://www.splunk.com/en_us/solutions.html (accessed Jul. 30, 2023). "

  },


];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'DevOps Glossary', glossary: glossaryData });
});


module.exports = router;
