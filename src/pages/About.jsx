import React from 'react'
import AboutSection from '../component/AboutSection'
import AboutHero from './AboutHero'
import MissionSection from './MissionSection'
import TeamSection from './TeamSection'
import ITIssuesSection from './ITIssuesSection'
import ServicesSection from '../component/ServicesSection'
const About = () => {
    return (
        <div>
            <AboutHero />
            {/* <ITIssuesSection/> */}
            <AboutSection/>
            <TeamSection />
            <MissionSection />
            
        </div>
    )
}

export default About