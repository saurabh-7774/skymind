import CustomNavbar from '../component/CustomNavbar';
import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import StatsSection from '../component/StatsSection';
import ServicesSection from '../component/ServicesSection';
import ToolsSection from '../component/ToolsSection';
import SupportSection from '../component/SupportSection';
import SupportProcess from '../component/SupportProcess';
import TestimonialSection from '../component/TestimonialSection';
import BlogSection from '../component/BlogSection';
import FaqSection from '../component/FaqSection';
import Footer from '../component/Footer';
import CtaSection from '../component/CtaSection';
import React from 'react'
import ITIssuesSection from './ITIssuesSection';
import { clientIssues } from '../component/course'


const Home = () => {
  
    return (
        <div>
            <HeroSection />
                        <SupportSection />

            <ITIssuesSection itIssuesFeatures={clientIssues} />
            <ToolsSection />

            <AboutSection />
            <StatsSection />
            {/* <SupportSection /> */}
            <TestimonialSection />


            {/* <BlogSection /> */}
            <FaqSection />
            <CtaSection />
        </div>
    )
}

export default Home