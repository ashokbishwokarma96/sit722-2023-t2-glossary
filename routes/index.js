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
  {
    id: 11,
    term: "Infrastructure as a Service (IaaS)",
    description: "IaaS is a cloud computing service that provides virtualized computing resources over the internet. It allows users to rent virtualized hardware, such as virtual machines, storage, and networking, eliminating the need to manage physical infrastructure.",
    references: "[11] “What is iaas? infrastructure as a service: Microsoft Azure,” Infrastructure as a Service | Microsoft Azure, https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-iaas (accessed Aug. 2, 2023). "

  },
  {
    id: 12,
    term: "Platform as a Service (PaaS)",
    description: "PaaS is a cloud computing service that offers a platform for developers to build, deploy, and manage applications. It provides an environment with tools and services for application development and hosting.",
    references: "[12] “What is Paas? platform as a service: Microsoft Azure,” Platform as a Service | Microsoft Azure, https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-paas#:~:text=Platform%20as%20a%20service%20(PaaS,%2C%20cloud%2Denabled%20enterprise%20applications. (accessed Aug. 2, 2023). "

  },
  {
    id: 13,
    term: "Continuous Delivery (CD)",
    description: "Continuous Delivery extends the concept of Continuous Integration by automating the deployment process. It allows for the automatic and frequent release of software to production, ensuring that the software is always in a deployable state.",
    references: "[13] Atlassian, “Continuous Integration vs. delivery vs. deployment,” Atlassian, https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment (accessed Aug. 3, 2023).  "

  },
  {
    id: 14,
    term: "Blue-Green Deployment",
    description: "Blue-Green Deployment is a release management strategy where two identical environments, blue and green, are maintained. When a new version of an application is deployed, traffic is switched from the old environment to the new one, allowing easy rollback if issues arise.",
    references: "[14] “Whitepapers,” Amazon, https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html (accessed Aug. 3, 2023). "

  },
  {
    id: 15,
    term: "Chaos Engineering",
    description: "Chaos Engineering is a discipline that involves creating controlled, experimental failures in a system to test its resilience and ability to withstand unexpected issues. It helps identify weaknesses and improve system reliability.",
    references: "[15] B. Lutkevich and A. S. Gillis, “What is Chaos Engineering? Chaos Engineering and its principles explained,” IT Operations, https://www.techtarget.com/searchitoperations/definition/chaos-engineering#:~:text=Chaos%20engineering%20is%20the%20process,on%20random%20and%20unpredictable%20behavior. (accessed Aug. 5, 2023). "

  },
  {
    id: 16,
    term: "Incident Management",
    description: "Incident management is the process of identifying, responding to, and resolving incidents or disruptions in an organization's IT services. It includes procedures for reporting, tracking, and resolving issues to minimize downtime and impact on users.",
    references: "[16] Atlassian, “Incident management in the age of DevOps,” Atlassian, https://www.atlassian.com/incident-management/devops (accessed Aug. 5, 2023). "

  },
  {
    id: 17,
    term: "Immutable Infrastructure",
    description: "Immutable infrastructure is an approach in which infrastructure components, such as servers, are never modified after their initial setup. Instead, updates are made by creating new, identical components and replacing the old ones, which enhances consistency and reliability.",
    references: "[17] Professional-DevOps, “Immutable infrastructure,” Professional, https://professional-devops.com/immutable-infrastructure.html (accessed Aug. 5, 2023).  "

  },
  {
    id: 18,
    term: "Load Balancer",
    description: "A load balancer is a network device or service that distributes incoming network traffic across multiple servers or resources to ensure efficient use of resources, enhance availability, and prevent overload on any single server.",
    references: "[18] “What is load balancing? how load balancers work,” NGINX, https://www.nginx.com/resources/glossary/load-balancing/#:~:text=A%20load%20balancer%20acts%20as,overworked%2C%20which%20could%20degrade%20performance. (accessed Aug. 6, 2023). "

  },
  {
    id: 19,
    term: "Kanban",
    description: "Kanban is an agile project management and work visualization method that uses boards and cards to represent tasks and their status. It helps teams visualize work, optimize workflow, and improve efficiency.",
    references: "[19] Atlassian, “Kanban - A brief introduction,” Atlassian, https://www.atlassian.com/agile/kanban#:~:text=Kanban%20is%20a%20popular%20framework,of%20work%20at%20any%20time. (accessed Aug. 6, 2023). "

  },
  {
    id: 20,
    term: "Incident Response Plan",
    description: "An incident response plan is a documented strategy outlining how an organization will detect, respond to, and recover from security incidents, such as data breaches or cyberattacks. It ensures that the organization can minimize damage and recover quickly.",
    references: "[20] Atlassian, “Incident management in the age of DevOps,” Atlassian, https://www.atlassian.com/incident-management/devops#:~:text=The%20DevOps%20incident%20management%20process,-The%20DevOps%20approach&amp;text=They%20work%20collaboratively%20to%20plan,and%20what%20to%20do%20next. (accessed Aug. 6, 2023). "

  },


];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'DevOps Glossary', glossary: glossaryData });
});


module.exports = router;
