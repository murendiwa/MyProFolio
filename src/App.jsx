import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import RoadRail from './components/RoadRail'
import Skills from './components/Skills'

// Page order: Hero → About Me (+ Roadmap) → Projects → Skills → Contact
export default function App() {
  return (
    <>
      <RoadRail />
      <div className="lg:pl-5">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
