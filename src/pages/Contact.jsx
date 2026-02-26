import React from 'react'
import ITIssuesSection from './ITIssuesSection'
import CtaSection from '../component/CtaSection'
import aboutBg from '../assets/smiling-customer-support-service-operator-with-hands-free-headset-working-in-office-150x150.jpg'
import ContactHero from './ContactHero'
import ITContactSection from './ITContactSection'
import TestimonialSection from '../component/TestimonialSection'
import FaqSection from '../component/FaqSection'
const Contact = () => {
    return (
        <div>
            <ContactHero />

            <ITContactSection />
            <CtaSection />
            <FaqSection/>

        </div>
    )
}

export default Contact