import caseImg from '../assets/customer-service-man-at-work.jpg'
import ai from '../assets/maincourses/AI_Data_Science_&_Analytic.png'
import cloud from '../assets/maincourses/Cloud_&_DevOps.png'
import aiimg from '../assets/1_3.jpg'
import fullstack from '../assets/maincourses/Full_Stack_Development.png'
import mobile from '../assets/maincourses/Mobile_Development.png'
import uiux from '../assets/maincourses/UI_UX_&_Creative_Design.png'
import data from '../assets/maincourses/Database_&_Storage_Systems.png'
export const courses = [

  // 1️⃣ AI, Data Science & Analytics
  {
    slug: "AI_Data_Science_&_Analytics",
    image2: ai,
    heroTitle: "AI, Data Science & Analytics",
    heroHighlight: "Advanced AI Engineering",
    heroDescription:
      "Build intelligent systems using Machine Learning, Deep Learning, and Data Engineering. Learn how to design smart algorithms, process large datasets, and develop real-world AI applications. Gain practical experience with modern AI tools, models, and deployment techniques.", category: "AI & Data Science",
    badge: "AI & DATA SCIENCE",
    title: "Become an Expert in",
    highlight: "AI & Machine Learning",
    description: `
    <p>
      This program is designed to provide strong foundations in 
      <strong>Artificial Intelligence, Machine Learning, Deep Learning, NLP, and Data Engineering.</strong>
      Students will learn how intelligent systems are designed, developed, and deployed 
      in real-world applications.
    </p>

    <p>
      The course covers key concepts such as data preprocessing, model training, 
      performance evaluation, and production deployment using modern AI frameworks.
      Participants will work with real-world datasets and learn industry best practices
      followed by leading AI companies.
    </p>

    <h4>What You Will Learn</h4>
    <ul>
      <li>Machine Learning Algorithms & Model Development</li>
      <li>Deep Learning using Neural Networks</li>
      <li>Natural Language Processing & Computer Vision</li>
      <li>Data Engineering and Large Scale Data Processing</li>
      <li>AI Model Deployment and Optimization</li>
    </ul>

    <h4>Career Opportunities</h4>
    <p>
      After completing this program, learners can pursue careers as 
      <strong>AI Engineer, Machine Learning Engineer, Data Scientist, 
      NLP Engineer, or Data Engineer</strong> across multiple industries 
      including fintech, healthcare, e-commerce, and autonomous systems.
    </p>

    <p>
      The curriculum focuses heavily on hands-on projects so that students
      gain real industry exposure while building their professional portfolio.
    </p>
  `, image: aiimg,
    clientTitle: "About This Course",
    clientDescription:
      "Industry-focused AI training with hands-on model building and real-world case studies.",
    subcourses: [
      { label: "Advanced AI Engineering", slug: "advanced-ai-engineering" },
      { label: "Machine Learning", slug: "machine-learning" },
      { label: "Deep Learning", slug: "deep-learning" },
      { label: "NLP & Computer Vision", slug: "nlp-computer-vision" },
      { label: "Data Engineering", slug: "data-engineering" },
    ],
  },

  // 2️⃣ Cloud & DevOps
  {
    slug: "Cloud_&_DevOps",
    image2: cloud,

    heroTitle: "Cloud & DevOps",
    heroHighlight: "AWS & CI/CD",
    heroDescription:
      "Master cloud platforms and DevOps practices for scalable deployments.",
    category: "Cloud & DevOps",
    badge: "CLOUD & DEVOPS",
    title: "Become a Certified",
    highlight: "Cloud & DevOps Engineer",
    description: `
    <p>
      The <strong>Cloud & DevOps program</strong> is designed to equip learners with the
      skills required to build, deploy, and manage scalable cloud infrastructure
      and automated software delivery pipelines. As organizations rapidly adopt
      cloud technologies, the demand for skilled Cloud and DevOps professionals
      continues to grow across industries.
    </p>

    <p>
      This course introduces you to the core principles of <strong>cloud computing,
      infrastructure automation, continuous integration, continuous delivery,
      and containerized deployments</strong>. You will gain hands-on experience
      working with industry-leading cloud platforms and modern DevOps tools
      used by top technology companies.
    </p>

    <h4>What You Will Learn</h4>
    <ul>
      <li>Cloud Computing Fundamentals and Architecture</li>
      <li>AWS Cloud Services and Infrastructure Management</li>
      <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
      <li>Containerization using Docker and Kubernetes</li>
      <li>Infrastructure as Code using Terraform</li>
      <li>Monitoring and Logging using modern DevOps tools</li>
      <li>DevSecOps practices and secure deployment pipelines</li>
    </ul>

    <h4>Hands-on Learning Experience</h4>
    <p>
      The program focuses heavily on practical learning. Students will build
      real-world deployment pipelines, configure scalable infrastructure,
      and implement automated workflows using popular DevOps tools.
      By working on live projects and case studies, learners gain the
      experience needed to manage modern cloud-based systems efficiently.
    </p>

    <h4>Career Opportunities</h4>
    <p>
      After completing this program, learners can pursue roles such as
      <strong>Cloud Engineer, DevOps Engineer, Site Reliability Engineer (SRE),
      Infrastructure Engineer, or Cloud Architect</strong>. These roles are in
      high demand across industries including fintech, SaaS platforms,
      enterprise IT, and technology startups.
    </p>

    <p>
      By mastering cloud platforms and DevOps automation practices, you will
      be able to design highly available systems, deploy applications faster,
      and maintain reliable infrastructure in modern cloud environments.
    </p>`, image: caseImg,
    clientTitle: "About This Course",
    clientDescription:
      "Hands-on cloud labs and real-time DevOps pipeline implementation.",
    subcourses: [
      { label: "AWS Solutions Architect", slug: "aws-solutions-architect" },
      { label: "Azure & GCP", slug: "azure-gcp" },
      { label: "DevSecOps", slug: "devsecops" },
      { label: "CI/CD Automation", slug: "ci-cd-automation" },
    ],
  },

  // 3️⃣ Full Stack Development
  {
    slug: "Full_Stack_Development",
    image2: fullstack,

    heroTitle: "Full Stack Development",
    heroHighlight: "Modern Web Technologies",
    heroDescription:
      "Build complete web applications from frontend to backend.",
    category: "Full Stack Development",
    badge: "FULL STACK DEVELOPMENT",
    title: "Become a Professional",
    highlight: "Full Stack Developer",
    description: ` <p>
      The <strong>Full Stack Development program</strong> is designed for individuals
      who want to build modern, scalable, and high-performance web applications.
      A full stack developer works across the entire software development process,
      including user interface development, backend logic, database management,
      API integration, and deployment.
    </p>

    <p>
      In this course, students will learn how to design responsive interfaces,
      create powerful backend services, connect databases, and deploy
      production-ready applications using modern development tools and frameworks.
      The curriculum is built to match real industry requirements followed by
      technology companies and startups.
    </p>

    <h4>Frontend Development</h4>
    <p>
      The frontend portion focuses on creating visually appealing and highly
      interactive user interfaces. Students will learn how to build responsive
      layouts and dynamic web applications using modern frontend technologies.
    </p>

    <ul>
      <li>HTML5 and Semantic Web Structure</li>
      <li>CSS3, Flexbox, Grid, and Responsive Design</li>
      <li>JavaScript Fundamentals and Advanced ES6+ Concepts</li>
      <li>React.js for Component-Based UI Development</li>
      <li>State Management and API Integration</li>
      <li>UI Libraries and Performance Optimization</li>
    </ul>

    <h4>Backend Development</h4>
    <p>
      Backend development focuses on building server-side applications,
      handling business logic, and managing secure communication between
      applications and databases.
    </p>

    <ul>
      <li>Node.js Runtime Environment</li>
      <li>Express.js Framework for API Development</li>
      <li>RESTful API Architecture</li>
      <li>Authentication and Authorization</li>
      <li>Middleware and Error Handling</li>
      <li>API Security Best Practices</li>
    </ul>

    <h4>Database & Data Management</h4>
    <p>
      Students will also learn how to store, manage, and retrieve data
      efficiently using modern database technologies. Understanding
      database architecture is essential for building scalable applications.
    </p>

    <ul>
      <li>MongoDB Database Fundamentals</li>
      <li>Schema Design and Data Modeling</li>
      <li>CRUD Operations and Data Queries</li>
      <li>Indexing and Performance Optimization</li>
      <li>Database Security and Backup Strategies</li>
    </ul>

    <h4>Dev Tools & Development Workflow</h4>
    <p>
      The program also introduces professional development workflows and tools
      that developers use daily in real-world software teams.
    </p>

    <ul>
      <li>Git and GitHub Version Control</li>
      <li>Collaborative Development Workflow</li>
      <li>Debugging and Code Optimization</li>
      <li>Code Quality and Best Practices</li>
      <li>Agile Development Methodologies</li>
    </ul>

    <h4>Deployment & Cloud Hosting</h4>
    <p>
      Building an application is only part of the process. Students will
      learn how to deploy and manage applications on modern cloud platforms
      to ensure scalability and reliability.
    </p>

    <ul>
      <li>Application Deployment Strategies</li>
      <li>Cloud Hosting Platforms</li>
      <li>Environment Configuration</li>
      <li>CI/CD Pipeline Basics</li>
      <li>Monitoring and Performance Optimization</li>
    </ul>

    <h4>Real-World Projects</h4>
    <p>
      The course includes several real-world projects where students will
      build complete applications from scratch. These projects help learners
      apply their knowledge in practical scenarios and develop a strong
      professional portfolio.
    </p>

    <ul>
      <li>Full Stack E-commerce Application</li>
      <li>Authentication System with JWT</li>
      <li>Admin Dashboard with API Integration</li>
      <li>Real-Time Data Applications</li>
    </ul>

    <h4>Career Opportunities</h4>
    <p>
      After completing this program, learners will be prepared for various
      roles in the software industry including:
    </p>

    <ul>
      <li>Full Stack Developer</li>
      <li>Frontend Developer</li>
      <li>Backend Developer</li>
      <li>Web Application Developer</li>
      <li>Software Engineer</li>
    </ul>

    <p>
      With the growing demand for web applications and digital platforms,
      full stack developers are among the most sought-after professionals
      in the technology industry. This program equips learners with the
      skills needed to build production-ready applications and succeed
      in modern software development environments.
    </p>`, image: caseImg,
    clientTitle: "About This Course",
    clientDescription:
      "Project-based learning with industry-level application development.",
    subcourses: [
      { label: "MERN Stack", slug: "mern-stack" },
      { label: "MEAN Stack", slug: "mean-stack" },
      { label: "Full Stack Java", slug: "full-stack-java" },
      { label: "Full Stack Python", slug: "full-stack-python" },
      { label: ".NET & PHP", slug: "dotnet-php" },
    ],
  },

  // 4️⃣ Mobile Development
  {
    slug: "Mobile_Development",
    image2: mobile,

    heroTitle: "Mobile Development",
    heroHighlight: "Android & iOS",
    heroDescription:
      "Build high-performance mobile apps for Android and iOS platforms.",
    category: "Mobile Development",
    badge: "MOBILE DEVELOPMENT",
    title: "Become a Skilled",
    highlight: "Mobile App Developer",
    description: `<p>
      The <strong>Mobile App Development program</strong> is designed to help
      learners build modern, scalable, and high-performance mobile applications
      for both Android and iOS platforms. With the rapid growth of smartphones
      and digital services, mobile applications have become a critical part of
      businesses across industries including e-commerce, healthcare, finance,
      entertainment, and education.
    </p>

    <p>
      This course focuses on teaching the complete mobile application
      development lifecycle—from designing intuitive user interfaces to
      implementing backend integration and deploying applications to app
      stores. Students will gain practical experience building real-world
      mobile applications using modern development tools and frameworks.
    </p>

    <h4>Mobile Development Fundamentals</h4>
    <p>
      Students begin by learning the core principles of mobile application
      architecture, responsive mobile UI design, and performance optimization.
      These concepts are essential for building applications that run smoothly
      across different devices and screen sizes.
    </p>

    <ul>
      <li>Mobile Application Architecture</li>
      <li>User Interface and User Experience Design</li>
      <li>Mobile Navigation Patterns</li>
      <li>Performance Optimization Techniques</li>
      <li>Responsive Layouts for Different Devices</li>
    </ul>

    <h4>Cross-Platform Development</h4>
    <p>
      Modern businesses often require applications that work on both Android
      and iOS platforms. This course introduces cross-platform frameworks that
      allow developers to build applications efficiently while maintaining
      high performance and native-like user experiences.
    </p>

    <ul>
      <li>React Native for Cross-Platform Development</li>
      <li>Reusable Components and Modular Architecture</li>
      <li>State Management in Mobile Applications</li>
      <li>API Integration and Data Handling</li>
      <li>Handling Device Features and Permissions</li>
    </ul>

    <h4>Backend Integration</h4>
    <p>
      Mobile applications often interact with servers and databases to
      retrieve and store data. Students will learn how to connect mobile
      apps with backend services and APIs to create dynamic and data-driven
      applications.
    </p>

    <ul>
      <li>REST API Integration</li>
      <li>User Authentication and Authorization</li>
      <li>Push Notifications</li>
      <li>Cloud Database Integration</li>
      <li>Real-Time Data Synchronization</li>
    </ul>

    <h4>Testing and Debugging</h4>
    <p>
      Ensuring application reliability and performance is essential for
      successful mobile apps. Students will learn techniques to test,
      debug, and optimize applications for better user experiences.
    </p>

    <ul>
      <li>Mobile App Testing Techniques</li>
      <li>Debugging Tools and Error Tracking</li>
      <li>Performance Monitoring</li>
      <li>Application Security Best Practices</li>
    </ul>

    <h4>Deployment & App Publishing</h4>
    <p>
      One of the most exciting parts of mobile development is launching
      your application to the public. This program teaches the complete
      deployment process including publishing apps to major app stores.
    </p>

    <ul>
      <li>Preparing Applications for Production</li>
      <li>App Store and Play Store Guidelines</li>
      <li>Application Versioning and Updates</li>
      <li>Continuous Integration for Mobile Apps</li>
    </ul>

    <h4>Real-World Projects</h4>
    <p>
      The course includes multiple hands-on projects where students
      build fully functional mobile applications. These projects help
      learners apply their knowledge and create a strong development
      portfolio.
    </p>

    <ul>
      <li>E-commerce Mobile Application</li>
      <li>Social Networking Application</li>
      <li>Authentication and User Profile System</li>
      <li>Real-Time Data Mobile Dashboard</li>
    </ul>

    <h4>Career Opportunities</h4>
    <p>
      After completing this program, learners can pursue roles such as
      <strong>Mobile App Developer, Android Developer, iOS Developer,
      React Native Developer, or Cross-Platform App Developer</strong>.
      Mobile developers are highly demanded in startups, software
      companies, and product-based organizations.
    </p>

    <p>
      By the end of this course, students will have the knowledge and
      practical experience required to design, develop, test, and deploy
      modern mobile applications used by thousands of users.
    </p>
  `,
    image: caseImg,
    clientTitle: "About This Course",
    clientDescription:
      "Hands-on app development with real-world publishing guidance.",
    subcourses: [
      { label: "Android (Java/Kotlin)", slug: "android-development" },
      { label: "iOS (Swift)", slug: "ios-development" },
      { label: "Flutter & React Native", slug: "flutter-react-native" },
    ],
  },

  // 5️⃣ UI/UX & Creative Design
  {
    slug: "UI_UX_&_Creative_Design",
    image2: uiux,

    heroTitle: "UI/UX & Creative Design",
    heroHighlight: "Design Thinking",
    heroDescription:
      "Design intuitive, modern and engaging digital experiences.",
    category: "UI/UX Design",
    badge: "UI/UX & DESIGN",
    title: "Become a Creative",
    highlight: "UI/UX Designer",
    description:
      `
<p>
The <strong>UI/UX & Creative Design program</strong> focuses on building the skills required to design modern, engaging, and user-friendly digital experiences. In today’s digital world, great design plays a crucial role in how users interact with websites, mobile applications, and software products. This course helps learners understand how to combine creativity with usability to create visually appealing and highly functional digital products.
</p>

<p>
Students will learn the complete design process starting from user research and wireframing to high-fidelity interface design and interactive prototypes. The program emphasizes practical design thinking and industry-standard tools used by professional designers.
</p>

<h4>UI/UX Design Fundamentals</h4>
<p>
The course begins with the core principles of user interface and user experience design. Learners will understand how design decisions impact user behavior and how to create intuitive digital products.
</p>

<ul>
<li>User Experience (UX) Principles</li>
<li>User Interface (UI) Design Fundamentals</li>
<li>Design Thinking Methodology</li>
<li>User Research and Persona Creation</li>
<li>Information Architecture</li>
<li>User Journey Mapping</li>
</ul>

<h4>Wireframing & Prototyping</h4>
<p>
Wireframing and prototyping are essential steps in the design process. Students will learn how to transform ideas into structured layouts and interactive prototypes that simulate real user experiences.
</p>

<ul>
<li>Low-Fidelity Wireframes</li>
<li>High-Fidelity Design Prototypes</li>
<li>Interactive Design Flows</li>
<li>Usability Testing Techniques</li>
<li>Iterative Design Improvements</li>
</ul>

<h4>Visual & Creative Design</h4>
<p>
Creative design focuses on visual storytelling, branding, and aesthetic appeal. Students will learn how to combine typography, color theory, and layout design to create professional digital interfaces.
</p>

<ul>
<li>Color Theory and Typography</li>
<li>Layout and Composition</li>
<li>Brand Identity Design</li>
<li>Creative Visual Concepts</li>
<li>Iconography and Illustration</li>
</ul>

<h4>Design Tools & Technologies</h4>
<p>
Students will work with industry-standard design tools widely used by UI/UX professionals to create professional designs and interactive prototypes.
</p>

<ul>
<li>Figma for UI/UX Design</li>
<li>Adobe XD and Creative Cloud Tools</li>
<li>Design Systems and Component Libraries</li>
<li>Responsive Design for Web and Mobile</li>
<li>Collaboration with Developers</li>
</ul>

<h4>Real-World Design Projects</h4>
<p>
The program includes multiple hands-on projects where students design real digital products such as websites, mobile applications, and dashboards. These projects help build a strong professional portfolio.
</p>

<ul>
<li>Website UI Design Project</li>
<li>Mobile Application Interface Design</li>
<li>Dashboard & SaaS Product Design</li>
<li>Branding and Visual Identity Project</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue careers as
<strong>UI Designer, UX Designer, Product Designer, Interaction Designer,
Visual Designer, or Creative Designer</strong>. These roles are highly
demanded in startups, digital agencies, and product-based companies.
</p>

<p>
By mastering UI/UX design and creative thinking, students will be able to design
engaging digital products that deliver excellent user experiences and
visually compelling interfaces across web and mobile platforms.
</p>
`, image: caseImg,
    clientTitle: "About This Course",
    clientDescription:
      "Practical design projects with portfolio-ready case studies.",
    subcourses: [
      { label: "UI/UX Design", slug: "ui-ux-design" },
      { label: "Figma & Prototyping", slug: "figma-prototyping" },
      { label: "Graphic Design", slug: "graphic-design" },
    ],
  },

  // 6️⃣ Database & Storage Systems
  {
    slug: "Database_&_Storage_Systems",
    image2: data,

    heroTitle: "Database & Storage Systems",
    heroHighlight: "SQL & NoSQL",
    heroDescription:
      "Master modern database systems and distributed storage.",
    category: "Database Systems",
    badge: "DATABASE & STORAGE",
    title: "Become an Expert in",
    highlight: "Database Management",
    description: `
<p>
The <strong>Database & Storage Systems program</strong> is designed to provide
in-depth knowledge of how modern applications store, manage, and process large
amounts of data. Databases are the backbone of almost every digital system,
from web applications and enterprise software to mobile apps and cloud
platforms. This course focuses on teaching the architecture, design, and
management of efficient and scalable data storage systems.
</p>

<p>
Students will learn how to design structured databases, manage large datasets,
optimize queries, and ensure data security and reliability. The program also
introduces modern data storage technologies used in cloud environments and
large-scale applications.
</p>

<h4>Database Fundamentals</h4>
<p>
The course begins with core database concepts that help students understand how
data is organized, stored, and accessed efficiently in modern systems.
</p>

<ul>
<li>Introduction to Database Systems</li>
<li>Relational Database Concepts</li>
<li>Tables, Rows, Columns, and Data Types</li>
<li>Primary Keys and Foreign Keys</li>
<li>Database Normalization Techniques</li>
</ul>

<h4>SQL & Query Optimization</h4>
<p>
Structured Query Language (SQL) is essential for interacting with relational
databases. Students will learn how to write efficient queries to retrieve,
update, and manage data.
</p>

<ul>
<li>SQL Query Fundamentals</li>
<li>CRUD Operations (Create, Read, Update, Delete)</li>
<li>Joins and Advanced Querying</li>
<li>Indexes and Query Performance Optimization</li>
<li>Stored Procedures and Triggers</li>
</ul>

<h4>NoSQL Databases</h4>
<p>
Modern applications often use NoSQL databases for handling large-scale and
unstructured data. Students will explore popular NoSQL database models and
their real-world applications.
</p>

<ul>
<li>Introduction to NoSQL Databases</li>
<li>Document Databases (MongoDB)</li>
<li>Key-Value Storage Systems</li>
<li>Column-Based Databases</li>
<li>Use Cases for NoSQL Databases</li>
</ul>

<h4>Data Storage Architecture</h4>
<p>
Understanding storage systems is essential for building scalable applications.
Students will learn how data is stored and distributed in modern infrastructure.
</p>

<ul>
<li>Data Storage Models</li>
<li>Distributed Databases</li>
<li>Data Replication and Sharding</li>
<li>Backup and Recovery Strategies</li>
<li>High Availability Systems</li>
</ul>

<h4>Cloud Databases & Storage</h4>
<p>
Cloud platforms provide scalable and highly available storage solutions.
This module introduces cloud-based database services and storage systems used
in modern applications.
</p>

<ul>
<li>Cloud Database Concepts</li>
<li>Managed Database Services</li>
<li>Object Storage Systems</li>
<li>Data Security in Cloud Environments</li>
<li>Scalable Data Infrastructure</li>
</ul>

<h4>Database Security & Performance</h4>
<p>
Protecting sensitive data and maintaining high performance are critical for
any database system. Students will learn best practices for database security
and performance tuning.
</p>

<ul>
<li>Access Control and Authentication</li>
<li>Encryption and Data Protection</li>
<li>Database Performance Monitoring</li>
<li>Load Balancing and Scaling</li>
<li>Database Optimization Techniques</li>
</ul>

<h4>Real-World Data Projects</h4>
<p>
The program includes practical projects that help students apply their
knowledge to real-world scenarios. Learners will design and manage databases
for applications such as e-commerce systems, analytics platforms, and
enterprise software.
</p>

<ul>
<li>Designing a Scalable Application Database</li>
<li>Building a NoSQL Data Model</li>
<li>Query Optimization and Performance Analysis</li>
<li>Database Backup and Recovery Implementation</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue careers as
<strong>Database Administrator (DBA), Data Engineer, Backend Developer,
Database Architect, or Data Infrastructure Engineer</strong>.
These roles are essential in organizations that rely on data-driven systems
such as fintech companies, cloud platforms, e-commerce businesses, and
enterprise software providers.
</p>

<p>
By mastering database and storage technologies, students will gain the
skills required to build reliable, scalable, and secure data systems that
power modern digital applications.
</p>
`, image: caseImg,
    clientTitle: "About This Course",
    clientDescription:
      "Comprehensive database training with practical implementations.",
    subcourses: [
      { label: "SQL & NoSQL", slug: "sql-nosql" },
      { label: "Data Warehousing", slug: "data-warehousing" },
      { label: "Database Administration", slug: "database-administration" },
    ],
  },
];