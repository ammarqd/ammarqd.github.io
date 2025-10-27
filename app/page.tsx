'use client'
import { ArrowUpRight } from 'lucide-react'
import { aboutData, projects, experiences, type Project, type Experience } from '@/lib/data'

export default function Home() {
  return (
    <>
      <section id="about" className="flex flex-col gap-4">
        {aboutData.description.map((paragraph, index) => (
          <p key={index} className="leading-[2.0]">{paragraph}</p>
        ))}
      </section>
     
      <section id="projects" className="flex flex-col gap-4">
        {projects.map((project: Project, index: number) => (
          <article key={index} className="flex flex-col gap-3">
            < a
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