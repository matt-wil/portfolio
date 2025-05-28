import LogoSection from "./sections/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import Hero from "./sections/Hero.jsx"
import Showcase from "./sections/Showcase.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import ExperienceSection from "./sections/WorkExperience.jsx"
import TechStack from "./sections/TechStack.jsx"
import Testimonials from "./sections/Testimonials.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Certificates from "./sections/Certificates.jsx"
import ResumeSection from "./sections/ResumeSection.jsx"

const App = () => {
  return (
    <> 
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <Certificates />
{/*
      <ExperienceSection />
*/}
      <TechStack />
{/*
      <Testimonials />
*/}   
      <Contact />
      <ResumeSection />
      <Footer />
    </>
  )
}

export default App