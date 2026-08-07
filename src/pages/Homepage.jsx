import projects from '../config/All_Proects.json'
import ContactSection from '../components/sections/ContactSection'
import ExperienceEducationSection from '../components/sections/ExperienceEducationSection'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection'
import FocusSection from '../components/sections/FocusSection'
import HeroSection from '../components/sections/HeroSection'
import { pageClass } from '../components/ui/styles'

const Homepage = () => {
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className={pageClass}>
      <HeroSection />
      <FocusSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ExperienceEducationSection />
      <ContactSection />
    </div>
  )
}

export default Homepage
