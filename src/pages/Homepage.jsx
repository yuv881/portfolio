import projects from '../config/All_Proects.json'
import ContactSection from '../components/sections/ContactSection'
import ExperienceEducationSection from '../components/sections/ExperienceEducationSection'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection'
import FocusSection from '../components/sections/FocusSection'
import HeroSection from '../components/sections/HeroSection'
import { pageClass } from '../components/ui/styles'

const Homepage = () => {
  const featuredProjectIds = [3, 4, 5]
  const featuredProjects = projects.filter((project) => featuredProjectIds.includes(project.id))

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
