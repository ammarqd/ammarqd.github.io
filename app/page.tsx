'use client'
import { LuArrowUpRight } from 'react-icons/lu'
import { aboutData, projects, experiences, type Project, type Experience } from '@/lib/data'

const SectionHeader = ({ children }: { children: string }) => (
  <h2 className="lg:hidden sticky top-0 z-10 py-4 text-[#999] text-sm uppercase tracking-[3px] font-medium border-neutral-800 mb-4 relative -mx-6 md:-mx-16 px-6 md:px-16">
    <span className="absolute inset-0 bg-[#111]/80 backdrop-blur-lg -z-10"></span>
    {children}
  </h2>
)

export default function Home() {
  return (
    <>
      <div id="about">
        <SectionHeader>About</SectionHeader>
        <section className="flex flex-col gap-4">
          {aboutData.description.map((paragraph, index) => (
            <p key={index} className="leading-[1.625]">{paragraph}</p>
          ))}
        </section>
      </div>

      <div id="experience">
        <SectionHeader>Experience</SectionHeader>
        <section className="flex flex-col gap-8">
          {experiences.map((exp: Experience, index: number) => (
            <article
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-[#666] pt-1">
                {exp.duration}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-neutral-300 text-md font-semibold">
                  {exp.position} · {exp.company}
                </h3>
                <p className="leading-[1.625] text-sm">{exp.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
     
      <div id="projects">
        <SectionHeader>Projects</SectionHeader>
        <section className="flex flex-col gap-8">
          {projects.map((project: Project, index: number) => (
            <article key={index} className="group relative grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 transition-all duration-300">
              <div className="relative h-32 w-48 sm:h-20 sm:w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900/50 order-2 sm:order-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col gap-3 order-1 sm:order-2">
                <h3 className="text-base font-semibold">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-neutral-300 transition-colors duration-200 hover:text-white"
                  >
                    <span className="absolute -inset-x-4 -inset-y-4 hidden lg:block" aria-hidden="true"></span>
                    {project.title}
                    <LuArrowUpRight className="inline-block transition-transform duration-200 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px] lg:group-hover:translate-x-[2px] lg:group-hover:-translate-y-[2px]" size={16} />
                  </a>
                </h3>
                <p className="leading-[1.625] text-sm text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs text-neutral-400 font-medium rounded-lg border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
     
      <div id="contact">
         <h2 className="lg:hidden bg-[#111] z-10 py-4 text-[#999] text-sm uppercase tracking-[3px] font-medium border-neutral-800 mb-4">
            Contact
          </h2>
        <section className="flex flex-col gap-6 lg:border-t border-neutral-800 lg:pt-10 lg:border-t">
          <p className="text-sm text-neutral-400 leading-[1.625] max-w-md">
            I'm always open to interesting projects, collaboration, or just a quick chat.
            Get in touch with any questions or ideas via{' '}
            <a
              href="mailto:ammarqd@outlook.com"
              className="text-white no-underline border-b border-transparent hover:border-white transition-all duration-200"
            >
              email
            </a>
            .
          </p>
        </section>
      </div>
    </>
  )
}