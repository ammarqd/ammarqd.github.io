export interface Project {
  title: string
  description: string
  url: string
}

export interface AboutData {
  description: string[]
}

export interface Experience {
  position: string
  company: string
  duration: string
  description: string
}

export const experiences: Experience[] = [
  {
    position: "Senior Software Engineer",
    company: "Company Name",
    duration: "2023 - Present",
    description: "Led development of key features and mentored junior developers."
  },
]

export const aboutData : AboutData = {
  description: [
  "I'm a Software Developer & Engineer driven by curiosity and a love for building things that work beautifully. I specialise in backend development and API integration, but I've also built interactive frontends, a character-driven Unity game, an AI image classifier, and other projects that keep me learning and experimenting.",
  "I enjoy tackling complex technical problems and finding elegant, user-focused solutions. Whether I'm refining algorithms, designing data structures, or shaping a smooth UI/UX, I aim to blend creativity with clean, efficient code. Being part of every step—from concept to deployment—is what keeps me motivated.",
  "Outside of programming, I love reading, gaming, and have recently been trying my hand at bouldering. I'm also fascinated by history and have an occasional (frequent ◑.◑) sweet tooth."
]

}

export const projects: Project[] = [
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