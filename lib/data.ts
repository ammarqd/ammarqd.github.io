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

export const aboutData : AboutData = {
 description: [
  "I'm a developer driven by curiosity and a love for building things that work beautifully. I specialise in backend development and API integration, but I've also built dynamic frontends, a character-driven Unity game, an AI image classifier, and other projects push my skills and creativity.",
  "I enjoy tackling complex technical problems and finding elegant, user-focused solutions. Whether I'm refining code architecture, choosing the right algorithm or data structure, or shaping a smooth UI/UX, I love being involved in the whole process—seeing ideas take shape and grow into something real.",
  "In my spare time, I love reading and gaming, and have recently been trying my hand at bouldering. I'm also fascinated by history, and have an occasional (frequent ◑.◑) sweet tooth."
]
}

export const experiences: Experience[] = [
  {
    position: "Lab Demonstrator",
    company: "Queen Mary University of London",
    duration: "2022 — 2025",
    description: "Coordinated with module organiser, senior demonstrator and fellow demonstrators to oversee classes of 100+ students. Graded labs and taught module concepts. Recognised for higher student satisfaction during my demonstrator cohort." 
  },
  {
    position: "Private Tutor",
    company: "Modern Tuition / Self-Employed",
    duration: "2021 — 2025",
    description: "Taught secondary school students and students taking the 11+ exam. Tailored Maths and Science tutoring to meet individual learning needs, in both in-person and online environments."
  }
]

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