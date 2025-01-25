import { BreadcrumbWithCustomSeparator } from "./template/template.tsx";
import { About } from "./About/about";
import { Education } from "./About/education";
import { Skills } from "./About/skills";
import { Project } from "./About/project";
import { Training } from "./About/training";
import { Contact } from "./About/contact";
import { Experience } from "./About/experience";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <nav className="bg-white shadow-md py-6">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <BreadcrumbWithCustomSeparator />
        </div>
      </nav>

      <main className="scroll-smooth">
        <section
          id="about"
          className="py-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-6">
            <About />
          </div>
        </section>

        <section id="education" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <Education />
          </div>
        </section>

        <section id="experience" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <Experience />
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <Skills />
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <Project />
          </div>
        </section>

        <section id="training" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <Training />
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
};

export default App;
