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

      <section id="experience" className="flex flex-col gap-8">
        {experiences.map((exp: Experience, index: number) => (
          <article key={index} className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-xs uppercase tracking-wider text-[#666] pt-1">
              {exp.duration}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-neutral-300 text-md font-semibold">
                {exp.position} · {exp.company}
              </h3>
              <p className="leading-[2.0] text-sm">{exp.description}</p>
            </div>
          </article>
        ))}
      </section>
     
      <section id="projects" className="flex flex-col gap-8">
        {projects.map((project: Project, index: number) => (
          <article key={index} className="group relative grid grid-cols-[120px_1fr] gap-4 transition-all duration-300">
            <div className="relative h-20 w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900/50">
              <img 
                src={project.image} 
                alt={project.title}
                className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-neutral-300 transition-colors duration-200 w-fit hover:text-white"
              >
                <h3 className="inline-flex items-center gap-1 text-base font-semibold">
                  {project.title} 
                  <ArrowUpRight className="inline-block transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" size={16} />
                </h3>
              </a>
              <p className="leading-[2.0] text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-md border border-[#333]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
     
      <section id="contact" className="flex flex-col gap-6 mt-20 border-t border-neutral-800 pt-10">
        <p className="text-sm text-neutral-400 leading-[2.0] max-w-md">
          I'm always open to interesting projects, collaboration, or just a quick chat. 
          Reach out with any questions or ideas via{' '}
          <a
            href="mailto:ammarqd@outlook.com"
            className="text-white no-underline border-b border-transparent hover:border-white transition-all duration-200"
          >
            email
          </a>
          .
        </p>
      </section>
    </>
  )
}