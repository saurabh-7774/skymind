import { useParams } from "react-router-dom";
import ITCaseStudySection from "./ITCaseStudySection";
import ServicesHero from "./ServicesHero";
import caseImg from '../assets/customer-service-man-at-work.jpg'
import ITIssuesSection from "./ITIssuesSection";
import SupportProcess from "../component/SupportProcess";
import { clientIssues } from '../component/course'

import { courses } from '../component/subcourse'
const CourseDetails = () => {
    const { slug } = useParams();

    const course = courses.find((c) => c.slug === slug);

    if (!course) return <h2>Course Not Found</h2>;

    return (
        <>
            <ServicesHero
                bgImage={course.image2}

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
            <SupportProcess />
        </>
    );
};

export default CourseDetails;