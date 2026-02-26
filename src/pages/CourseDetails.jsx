import { useParams } from "react-router-dom";
import ITCaseStudySection from "./ITCaseStudySection";
import ServicesHero from "./ServicesHero";
import caseImg from '../assets/customer-service-man-at-work.jpg'
import ITIssuesSection from "./ITIssuesSection";
import SupportProcess from "../component/SupportProcess";
const clientIssues = [
    {
        slug: "AI_Data_Science_&_Analytics",
        title: "AI, Data Science & Analytics",
        text: "Covers artificial intelligence fundamentals, machine learning algorithms, deep learning concepts, data analytics techniques, and real-world data-driven decision-making strategies."
    },
    {
        slug: "Cloud_&_DevOps",
        title: "Cloud & DevOps",
        text: "Focuses on cloud computing platforms, CI/CD pipelines, infrastructure as code, containerization, monitoring, and automation practices for scalable and reliable deployments."
    },
    {
        slug: "Full_Stack_Development",
        title: "Full Stack Development",
        text: "Covers front-end and back-end development, RESTful APIs, database integration, authentication systems, and modern web technologies for building complete web applications."
    },
    {
        slug: "Mobile_Development",
        title: "Mobile Development",
        text: "Introduces mobile app development for Android and iOS, cross-platform frameworks, UI components, state management, API integration, and performance optimization techniques."
    },
    {
        slug: "UI_UX_&_Creative_Design",
        title: "UI/UX & Creative Design",
        text: "Focuses on user experience research, wireframing, prototyping, visual design principles, usability testing, and creating intuitive and engaging digital interfaces."
    },
    {
        slug: "Database_&_Storage_Systems",
        title: "Database & Storage Systems",
        text: "Covers relational and NoSQL databases, data modeling, indexing, performance tuning, distributed storage systems, and secure data management strategies."
    }
]
export const courses = [

    // 1️⃣ AI, Data Science & Analytics
    {
        slug: "AI_Data_Science_&_Analytics",
        heroTitle: "AI, Data Science & Analytics",
        heroHighlight: "Advanced AI Engineering",
        heroDescription:
            "Build intelligent systems using Machine Learning, Deep Learning and Data Engineering.",
        category: "AI & Data Science",
        badge: "AI & DATA SCIENCE",
        title: "Become an Expert in",
        highlight: "AI & Machine Learning",
        description:
            "This program is designed to provide strong foundations in Artificial Intelligence, Machine Learning, Deep Learning, NLP, and Data Engineering. You will understand intelligent model building, training, evaluation, and deployment using real-world datasets and scalable architectures.",
        image: caseImg,
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
        heroTitle: "Cloud & DevOps",
        heroHighlight: "AWS & CI/CD",
        heroDescription:
            "Master cloud platforms and DevOps practices for scalable deployments.",
        category: "Cloud & DevOps",
        badge: "CLOUD & DEVOPS",
        title: "Become a Certified",
        highlight: "Cloud & DevOps Engineer",
        description:
            "Learn cloud infrastructure design, DevOps lifecycle, CI/CD automation, containerization, monitoring, and DevSecOps practices.",
        image: caseImg,
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
        heroTitle: "Full Stack Development",
        heroHighlight: "Modern Web Technologies",
        heroDescription:
            "Build complete web applications from frontend to backend.",
        category: "Full Stack Development",
        badge: "FULL STACK DEVELOPMENT",
        title: "Become a Professional",
        highlight: "Full Stack Developer",
        description:
            "Master frontend and backend technologies, build REST APIs, implement authentication and deploy scalable applications.",
        image: caseImg,
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
        heroTitle: "Mobile Development",
        heroHighlight: "Android & iOS",
        heroDescription:
            "Build high-performance mobile apps for Android and iOS platforms.",
        category: "Mobile Development",
        badge: "MOBILE DEVELOPMENT",
        title: "Become a Skilled",
        highlight: "Mobile App Developer",
        description:
            "Learn native and cross-platform mobile development using Android, iOS, Flutter, and React Native.",
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
        heroTitle: "UI/UX & Creative Design",
        heroHighlight: "Design Thinking",
        heroDescription:
            "Design intuitive, modern and engaging digital experiences.",
        category: "UI/UX Design",
        badge: "UI/UX & DESIGN",
        title: "Become a Creative",
        highlight: "UI/UX Designer",
        description:
            "Master user research, wireframing, prototyping and usability testing using Figma and modern tools.",
        image: caseImg,
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
        heroTitle: "Database & Storage Systems",
        heroHighlight: "SQL & NoSQL",
        heroDescription:
            "Master modern database systems and distributed storage.",
        category: "Database Systems",
        badge: "DATABASE & STORAGE",
        title: "Become an Expert in",
        highlight: "Database Management",
        description:
            "Learn relational and NoSQL databases, data modeling, indexing, optimization, and administration.",
        image: caseImg,
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
const CourseDetails = () => {
    const { slug } = useParams();

    const course = courses.find((c) => c.slug === slug);

    if (!course) return <h2>Course Not Found</h2>;

    return (
        <>
            <ServicesHero
                title={course.heroTitle}
                highlight={course.heroHighlight}
                description={course.heroDescription}
            />

            <ITCaseStudySection
                image={course.image}
                badge={course.badge}
                title={course.title}
                highlight={course.highlight}
                description={course.description}
                heroTitle={course.heroTitle}
                clientDescription={course.clientDescription}
                clientIssues={clientIssues}
                benefits={course.subcourses}
            />
            <ITIssuesSection itIssuesFeatures={clientIssues} heroTitle={course.heroTitle} />
            <SupportProcess/>
        </>
    );
};

export default CourseDetails;