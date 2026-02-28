import Banner from "../shared/Bannner/Banner"
import About from "../shared/About/About"
import Projects from "../shared/Projects/Projects"
import Contact from "../shared/Contact/Contact"
import Skills from "../shared/Skills/Skills"
import Experience from "../shared/Experience/Experience"

const Homepage = () => {
    return (
        <div>
            <div>
                <div>
                    <Banner />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Homepage