'use client'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  url: string
}

interface AboutData {
  description: string
}

export default function Home() {
  const aboutData: AboutData = {
    description: "I'm a Software developer & Engineer who loves tinkering and understanding how things work. My main expertise is building and integrating backend APIs, but I've also created dynamic frontends, a character-driven Unity game, an AI image classifier, and more. I thrive on complex technical challenges, and also have a keen eye for visuals with a strong intuition for UI/UX."
  }

  const projects: Project[] = [
    {
      title: "Cool Compiler",
      description: "A compiler for the Cool programming language, consisting of lexer, parser, and backend code generation.",
      url: "#"
    },
    {
      title: "Prism App",
      description: "A web app that lets users upload and enhance images with a wide variety of filters.",
      url: "#"
    },
    {
      title: "Github Stats App",
      description: "A React app that fetches a user's repositories and displays their first commit.",
      url: "#"
    },
    {
      title: "CIFAR-10 Image Classifier",
      description: "An image classifier with a custom architecture. Attained 91% accuracy on the CIFAR-10 dataset.",
      url: "#"
    }
  ]

  return (
    <>
      <section id="about" className="flex flex-col">
        <div id="about-info">
          <p className="leading-[2.0]">{aboutData.description}</p>
          <br />
        </div>
      </section>
     
      <section id="experience" className="flex flex-col">
        {/* Add your experience content here */}
      </section>
     
      <section id="projects" className="flex flex-col gap-4">
        {projects.map((project: Project, index: number) => (
          <article key={index} className="flex flex-col gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white transition-colors duration-200 w-fit hover:text-[#aaa] group"
            >
              <h2 className="inline-flex items-center gap-1 text-base font-semibold">
                {project.title} <ArrowUpRight className="inline-block transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" size={16} />
              </h2>
            </a>
            <p className="leading-[2.0]">{project.description}</p>
          </article>
        ))}
      </section>
     
      <section id="contact" className="flex flex-col">
        <p className="leading-[2.0]">
          Contact me with further questions via email.<br />
          <a href="mailto:ammarqd@outlook.com" className="text-white no-underline">link</a>
        </p>
      </section>
    </>
  )
}