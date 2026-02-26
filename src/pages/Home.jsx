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

const Home = () => {
    return (
        <div><HeroSection />
            <AboutSection />
            <StatsSection />
            <ToolsSection />
            <SupportSection />
            <TestimonialSection />

            <SupportProcess />

            <BlogSection />
            <CtaSection />
            <FaqSection /></div>
    )
}

export default Home