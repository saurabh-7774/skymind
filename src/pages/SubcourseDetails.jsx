import { useParams } from "react-router-dom";
import ServicesHero from "./ServicesHero";
import MernServiceSection from "./MernSection";
import mernImg from "../assets/asian-helpdesk-representative-in-headphones-with-his-colleagues-providing-tech-support-services-to.jpg";
import aiImg from "../assets/Grid-10-3.png";
import ToolsSection from "../component/ToolsSection";

const courses = [

    // ================= AI & DATA =================

    {
        slug: "advanced-ai-engineering",
        hero: {
            title: "Advanced",
            highlight: "AI Engineering",
            description: "Design, develop and deploy production-ready AI systems for real-world applications."
        },
        serviceSection: {
            badgeText: "🤖 ADVANCED AI ENGINEERING",
            heading: "Build Enterprise-Grade AI Solutions",
            highlightText: "With Scalable Architectures.",
            descriptionOne:
                "Learn how to design end-to-end AI systems from raw data to deployment.\n" +
                "Understand scalable architectures for enterprise AI platforms.\n" +
                "Work with distributed training and cloud-based AI infrastructure.\n" +
                "Implement model optimization and performance tuning techniques.\n" +
                "Gain hands-on experience building production-ready AI pipelines.",
            descriptionTwo:
                "Master MLOps principles for continuous model integration.\n" +
                "Deploy AI models securely using REST APIs and microservices.\n" +
                "Implement monitoring, logging, and performance tracking.\n" +
                "Ensure model versioning and lifecycle management.\n" +
                "Build scalable AI products ready for real-world usage."
        }
    },

    {
        slug: "machine-learning",
        hero: {
            title: "Professional",
            highlight: "Machine Learning",
            description: "Master supervised and unsupervised learning techniques with real datasets."
        },
        serviceSection: {
            badgeText: "📊 MACHINE LEARNING",
            heading: "Create Intelligent Predictive Models",
            highlightText: "Using Advanced Algorithms.",
            descriptionOne:
                "Understand regression, classification, and clustering techniques.\n" +
                "Perform data preprocessing and feature engineering.\n" +
                "Train models using Scikit-learn and advanced ML libraries.\n" +
                "Evaluate model performance using industry metrics.\n" +
                "Work on real-world predictive analytics projects.",
            descriptionTwo:
                "Deploy machine learning models into live systems.\n" +
                "Optimize models using hyperparameter tuning.\n" +
                "Understand bias-variance tradeoffs deeply.\n" +
                "Apply ML across healthcare, fintech, and e-commerce domains.\n" +
                "Build strong ML portfolios with practical case studies."
        }
    },

    {
        slug: "deep-learning",
        hero: {
            title: "Advanced",
            highlight: "Deep Learning",
            description: "Build neural networks and deep learning models for complex problems."
        },
        serviceSection: {
            badgeText: "🧠 DEEP LEARNING",
            heading: "Design Neural Network Architectures",
            highlightText: "For Real-World Applications.",
            descriptionOne:
                "Understand artificial neural networks and backpropagation.\n" +
                "Build CNN, RNN, LSTM, and Transformer models.\n" +
                "Train deep learning models using TensorFlow and PyTorch.\n" +
                "Work on image, text, and speech processing projects.\n" +
                "Optimize deep learning performance using GPUs.",
            descriptionTwo:
                "Implement transfer learning for faster training.\n" +
                "Deploy deep learning models into production environments.\n" +
                "Handle large datasets efficiently.\n" +
                "Learn model compression and optimization techniques.\n" +
                "Develop real-world AI applications powered by deep learning."
        }
    },

    {
        slug: "nlp-computer-vision",
        hero: {
            title: "NLP &",
            highlight: "Computer Vision",
            description: "Build intelligent systems that understand language and visual data."
        },
        serviceSection: {
            badgeText: "📚 NLP & COMPUTER VISION",
            heading: "Develop Smart AI Vision & Language Systems",
            highlightText: "Using Modern Frameworks.",
            descriptionOne:
                "Work with text classification and sentiment analysis.\n" +
                "Implement Named Entity Recognition and transformers.\n" +
                "Build image recognition and object detection systems.\n" +
                "Use OpenCV and deep learning for vision tasks.\n" +
                "Train NLP and CV models using real-world datasets.",
            descriptionTwo:
                "Deploy NLP chatbots and recommendation engines.\n" +
                "Implement face detection and tracking systems.\n" +
                "Optimize models for real-time performance.\n" +
                "Integrate AI systems into web and mobile apps.\n" +
                "Build intelligent products powered by vision and language."
        }
    },

    {
        slug: "data-engineering",
        hero: {
            title: "Modern",
            highlight: "Data Engineering",
            description: "Design scalable data pipelines and distributed systems."
        },
        serviceSection: {
            badgeText: "⚙️ DATA ENGINEERING",
            heading: "Build Scalable Data Pipelines",
            highlightText: "For Enterprise Applications.",
            descriptionOne:
                "Learn ETL processes and data transformation workflows.\n" +
                "Design distributed data systems and streaming pipelines.\n" +
                "Work with Apache Spark and big data tools.\n" +
                "Handle structured and unstructured datasets efficiently.\n" +
                "Build scalable data infrastructure solutions.",
            descriptionTwo:
                "Deploy real-time data streaming applications.\n" +
                "Optimize storage and query performance.\n" +
                "Implement data governance and security standards.\n" +
                "Work with cloud-based data platforms.\n" +
                "Build enterprise-ready analytics pipelines."
        }
    },

    // ================= CLOUD & DEVOPS =================

    {
        slug: "aws-solutions-architect",
        hero: {
            title: "AWS",
            highlight: "Solutions Architect",
            description: "Design and deploy scalable cloud infrastructure on AWS."
        },
        serviceSection: {
            badgeText: "☁️ AWS SOLUTIONS ARCHITECT",
            heading: "Architect Secure & Scalable Cloud Systems",
            highlightText: "Using AWS Best Practices.",
            descriptionOne:
                "Master EC2, S3, RDS, and Lambda services.\n" +
                "Design high-availability architectures.\n" +
                "Implement VPC networking and IAM policies.\n" +
                "Work with load balancing and auto scaling.\n" +
                "Build secure and cost-optimized systems.",
            descriptionTwo:
                "Deploy applications using Elastic Beanstalk and ECS.\n" +
                "Monitor infrastructure using CloudWatch.\n" +
                "Implement disaster recovery strategies.\n" +
                "Secure cloud workloads effectively.\n" +
                "Prepare for AWS certification confidently."
        }
    },

    {
        slug: "azure-gcp",
        hero: {
            title: "Azure &",
            highlight: "Google Cloud",
            description: "Deploy enterprise-grade applications on multi-cloud platforms."
        },
        serviceSection: {
            badgeText: "☁️ AZURE & GCP",
            heading: "Multi-Cloud Infrastructure Mastery",
            highlightText: "For Scalable Systems.",
            descriptionOne:
                "Learn Azure Virtual Machines and App Services.\n" +
                "Understand GCP Compute Engine and Kubernetes Engine.\n" +
                "Implement identity and access management securely.\n" +
                "Deploy containerized applications efficiently.\n" +
                "Design resilient multi-cloud architectures.",
            descriptionTwo:
                "Integrate DevOps pipelines with cloud services.\n" +
                "Optimize cloud cost management strategies.\n" +
                "Secure workloads using advanced cloud security tools.\n" +
                "Implement monitoring and logging solutions.\n" +
                "Build scalable cross-cloud deployments."
        }
    },

    {
        slug: "devsecops",
        hero: {
            title: "Secure",
            highlight: "DevSecOps",
            description: "Integrate security into DevOps pipelines seamlessly."
        },
        serviceSection: {
            badgeText: "🔐 DEVSECOPS",
            heading: "Secure CI/CD Pipelines",
            highlightText: "With Automated Security.",
            descriptionOne:
                "Understand DevOps lifecycle deeply.\n" +
                "Implement automated security testing.\n" +
                "Use container scanning tools.\n" +
                "Integrate compliance checks into CI/CD.\n" +
                "Build secure DevOps workflows.",
            descriptionTwo:
                "Automate vulnerability scanning.\n" +
                "Secure Kubernetes clusters.\n" +
                "Implement secrets management best practices.\n" +
                "Protect APIs and microservices.\n" +
                "Deploy secure applications confidently."
        }
    },

    {
        slug: "ci-cd-automation",
        hero: {
            title: "CI/CD",
            highlight: "Automation",
            description: "Automate software delivery pipelines efficiently."
        },
        serviceSection: {
            badgeText: "🚀 CI/CD AUTOMATION",
            heading: "Continuous Integration & Deployment",
            highlightText: "For Faster Releases.",
            descriptionOne:
                "Set up Jenkins and GitHub Actions pipelines.\n" +
                "Automate build and testing processes.\n" +
                "Containerize apps using Docker.\n" +
                "Deploy apps using Kubernetes.\n" +
                "Implement rollback strategies safely.",
            descriptionTwo:
                "Reduce deployment errors drastically.\n" +
                "Improve release velocity.\n" +
                "Implement automated testing strategies.\n" +
                "Monitor deployment pipelines.\n" +
                "Deliver high-quality software faster."
        }
    },

    // ================= FULL STACK =================

    {
        slug: "mern-stack",
        hero: {
            title: "Full Stack",
            highlight: "MERN Stack",
            description: "Build scalable web apps using MongoDB, Express, React and Node."
        },
        serviceSection: {
            badgeText: "💻 MERN STACK",
            heading: "Modern JavaScript Development",
            highlightText: "For Scalable Applications.",
            descriptionOne:
                "Build REST APIs using Node.js.\n" +
                "Design MongoDB schemas efficiently.\n" +
                "Develop responsive UI using React.\n" +
                "Implement JWT authentication.\n" +
                "Deploy full-stack applications.",
            descriptionTwo:
                "Work on real-world projects.\n" +
                "Integrate frontend with backend APIs.\n" +
                "Optimize performance and scalability.\n" +
                "Handle secure user authentication.\n" +
                "Build industry-ready portfolio apps."
        }
    },

    {
        slug: "mean-stack",
        hero: {
            title: "Full Stack",
            highlight: "MEAN Stack",
            description: "Build Angular-based full-stack applications."
        },
        serviceSection: {
            badgeText: "💻 MEAN STACK",
            heading: "Angular & Node Ecosystem",
            highlightText: "For Enterprise Apps.",
            descriptionOne:
                "Develop Angular frontends professionally.\n" +
                "Build backend using Node & Express.\n" +
                "Manage MongoDB databases.\n" +
                "Create RESTful services.\n" +
                "Implement authentication and authorization.",
            descriptionTwo:
                "Deploy apps to cloud platforms.\n" +
                "Build scalable enterprise systems.\n" +
                "Optimize frontend performance.\n" +
                "Structure enterprise-grade projects.\n" +
                "Create full production-ready applications."
        }
    },

    {
        slug: "full-stack-java",
        hero: {
            title: "Enterprise",
            highlight: "Full Stack Java",
            description: "Develop enterprise-grade applications using Java."
        },
        serviceSection: {
            badgeText: "☕ FULL STACK JAVA",
            heading: "Spring Boot & Modern Frontend",
            highlightText: "For Enterprise Systems.",
            descriptionOne:
                "Develop backend APIs using Spring Boot.\n" +
                "Manage relational databases efficiently.\n" +
                "Build secure authentication systems.\n" +
                "Integrate frontend frameworks.\n" +
                "Implement microservices architecture.",
            descriptionTwo:
                "Deploy scalable enterprise apps.\n" +
                "Implement RESTful services.\n" +
                "Optimize performance and security.\n" +
                "Build large-scale applications.\n" +
                "Work on real-world Java projects."
        }
    },

    {
        slug: "full-stack-python",
        hero: {
            title: "Professional",
            highlight: "Full Stack Python",
            description: "Build scalable web applications using Python."
        },
        serviceSection: {
            badgeText: "🐍 FULL STACK PYTHON",
            heading: "Django & Flask Development",
            highlightText: "For Modern Web Apps.",
            descriptionOne:
                "Develop REST APIs using Django.\n" +
                "Implement authentication securely.\n" +
                "Work with relational databases.\n" +
                "Build scalable backend systems.\n" +
                "Integrate frontend technologies.",
            descriptionTwo:
                "Deploy Python apps to cloud.\n" +
                "Optimize application performance.\n" +
                "Implement caching strategies.\n" +
                "Work on real-world projects.\n" +
                "Build production-ready applications."
        }
    },

    {
        slug: "dotnet-php",
        hero: {
            title: ".NET &",
            highlight: "PHP Development",
            description: "Build enterprise applications using .NET and PHP."
        },
        serviceSection: {
            badgeText: "🖥 .NET & PHP",
            heading: "Enterprise Backend Systems",
            highlightText: "With Modern Frameworks.",
            descriptionOne:
                "Develop apps using ASP.NET Core.\n" +
                "Build backend systems with Laravel.\n" +
                "Implement secure authentication.\n" +
                "Manage relational databases.\n" +
                "Develop scalable APIs.",
            descriptionTwo:
                "Deploy enterprise-grade solutions.\n" +
                "Optimize backend performance.\n" +
                "Implement role-based access control.\n" +
                "Secure APIs against vulnerabilities.\n" +
                "Build high-performance applications."
        }
    },

    // ================= MOBILE =================

    {
        slug: "android-development",
        hero: { title: "Android", highlight: "Java & Kotlin", description: "Build native Android apps." },
        serviceSection: {
            badgeText: "📱 ANDROID DEVELOPMENT",
            heading: "Native Android Apps",
            highlightText: "Using Modern Tools.",
            descriptionOne:
                "Develop apps using Kotlin and Java.\n" +
                "Build responsive mobile UI.\n" +
                "Integrate REST APIs.\n" +
                "Handle offline storage.\n" +
                "Deploy apps to Play Store.",
            descriptionTwo:
                "Implement push notifications.\n" +
                "Secure mobile applications.\n" +
                "Optimize app performance.\n" +
                "Work with Firebase.\n" +
                "Build production-ready Android apps."
        }
    },

    {
        slug: "ios-development",
        hero: { title: "iOS", highlight: "Swift", description: "Build powerful iOS apps." },
        serviceSection: {
            badgeText: "🍎 IOS DEVELOPMENT",
            heading: "Swift App Development",
            highlightText: "For iPhone & iPad.",
            descriptionOne:
                "Develop apps using Swift.\n" +
                "Build intuitive UI with SwiftUI.\n" +
                "Integrate APIs and services.\n" +
                "Manage data persistence.\n" +
                "Deploy apps to App Store.",
            descriptionTwo:
                "Optimize app performance.\n" +
                "Implement secure authentication.\n" +
                "Handle push notifications.\n" +
                "Test apps thoroughly.\n" +
                "Build enterprise-ready iOS apps."
        }
    },

    {
        slug: "flutter-react-native",
        hero: { title: "Cross Platform", highlight: "Flutter & React Native", description: "Build cross-platform mobile apps." },
        serviceSection: {
            badgeText: "📲 FLUTTER & REACT NATIVE",
            heading: "Single Codebase Apps",
            highlightText: "For Android & iOS.",
            descriptionOne:
                "Build UI using Flutter widgets.\n" +
                "Develop React Native components.\n" +
                "Integrate backend APIs.\n" +
                "Implement navigation systems.\n" +
                "Manage state effectively.",
            descriptionTwo:
                "Deploy apps on both platforms.\n" +
                "Optimize performance.\n" +
                "Implement authentication.\n" +
                "Use third-party integrations.\n" +
                "Build scalable cross-platform apps."
        }
    },

    // ================= DESIGN =================

    {
        slug: "ui-ux-design",
        hero: { title: "Creative", highlight: "UI/UX Design", description: "Design modern user experiences." },
        serviceSection: {
            badgeText: "🎨 UI/UX DESIGN",
            heading: "User-Centered Design",
            highlightText: "For Digital Products.",
            descriptionOne:
                "Conduct user research.\n" +
                "Design wireframes and mockups.\n" +
                "Create interactive prototypes.\n" +
                "Test usability.\n" +
                "Apply modern design principles.",
            descriptionTwo:
                "Build visually appealing layouts.\n" +
                "Improve user engagement.\n" +
                "Design mobile-first interfaces.\n" +
                "Follow accessibility standards.\n" +
                "Deliver polished design systems."
        }
    },

    {
        slug: "figma-prototyping",
        hero: { title: "Figma", highlight: "Prototyping", description: "Create interactive prototypes." },
        serviceSection: {
            badgeText: "🖌 FIGMA & PROTOTYPING",
            heading: "Modern Design Tools",
            highlightText: "For Collaboration.",
            descriptionOne:
                "Design UI using Figma tools.\n" +
                "Create responsive layouts.\n" +
                "Build interactive prototypes.\n" +
                "Collaborate with teams.\n" +
                "Export design assets efficiently.",
            descriptionTwo:
                "Create design systems.\n" +
                "Use auto-layout effectively.\n" +
                "Build animation prototypes.\n" +
                "Share designs with developers.\n" +
                "Deliver production-ready UI kits."
        }
    },

    {
        slug: "graphic-design",
        hero: { title: "Creative", highlight: "Graphic Design", description: "Create stunning visuals." },
        serviceSection: {
            badgeText: "🖼 GRAPHIC DESIGN",
            heading: "Visual Branding & Media",
            highlightText: "For Digital & Print.",
            descriptionOne:
                "Learn typography and color theory.\n" +
                "Design marketing materials.\n" +
                "Create logos and brand identity.\n" +
                "Work with Adobe tools.\n" +
                "Build creative portfolios.",
            descriptionTwo:
                "Design social media creatives.\n" +
                "Create print-ready materials.\n" +
                "Understand layout principles.\n" +
                "Work on real-world branding projects.\n" +
                "Develop strong creative skills."
        }
    },

    // ================= DATABASE =================

    {
        slug: "sql-nosql",
        hero: { title: "SQL &", highlight: "NoSQL", description: "Master relational and non-relational databases." },
        serviceSection: {
            badgeText: "🗄 DATABASE SYSTEMS",
            heading: "Manage Modern Databases",
            highlightText: "For Scalable Apps.",
            descriptionOne:
                "Work with MySQL and PostgreSQL.\n" +
                "Design relational schemas.\n" +
                "Understand normalization.\n" +
                "Work with MongoDB and Redis.\n" +
                "Handle indexing strategies.",
            descriptionTwo:
                "Optimize query performance.\n" +
                "Implement backup strategies.\n" +
                "Ensure database security.\n" +
                "Work on high-traffic systems.\n" +
                "Design scalable database solutions."
        }
    },

    {
        slug: "data-warehousing",
        hero: { title: "Modern", highlight: "Data Warehousing", description: "Build enterprise data warehouses." },
        serviceSection: {
            badgeText: "📦 DATA WAREHOUSING",
            heading: "Analytics Infrastructure",
            highlightText: "For Business Intelligence.",
            descriptionOne:
                "Design ETL pipelines.\n" +
                "Implement data modeling.\n" +
                "Work with BI tools.\n" +
                "Optimize warehouse queries.\n" +
                "Manage large datasets.",
            descriptionTwo:
                "Build reporting dashboards.\n" +
                "Implement data governance.\n" +
                "Ensure data accuracy.\n" +
                "Work with cloud warehouses.\n" +
                "Deploy scalable analytics systems."
        }
    },

    {
        slug: "database-administration",
        hero: { title: "Professional", highlight: "Database Administration", description: "Manage and secure enterprise databases." },
        serviceSection: {
            badgeText: "🛠 DATABASE ADMINISTRATION",
            heading: "Database Security & Optimization",
            highlightText: "For Enterprise Systems.",
            descriptionOne:
                "Monitor database performance.\n" +
                "Implement backup & recovery.\n" +
                "Secure database access.\n" +
                "Optimize indexes and queries.\n" +
                "Manage high-availability systems.",
            descriptionTwo:
                "Automate database maintenance.\n" +
                "Handle disaster recovery.\n" +
                "Ensure data compliance.\n" +
                "Manage replication strategies.\n" +
                "Maintain enterprise-grade databases."
        }
    }

];
const CourseDetails = () => {
    const { slug } = useParams();

    const course = courses.find((c) => c.slug === slug);

    if (!course) return <h2>Course Not Found</h2>;

    return (
        <>
            <ServicesHero
                title={course.hero.title}
                highlight={course.hero.highlight}
                description={course.hero.description}
            />

            <MernServiceSection
                badgeText={course.serviceSection.badgeText}
                heading={course.serviceSection.heading}
                highlightText={course.serviceSection.highlightText}
                descriptionOne={course.serviceSection.descriptionOne}
                descriptionTwo={course.serviceSection.descriptionTwo}
                services={course.serviceSection.services}

            />
            <ToolsSection/>
        </>
    );
};

export default CourseDetails;