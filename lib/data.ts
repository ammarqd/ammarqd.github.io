export interface Project {
  title: string
  description: string
  url: string
}

export interface AboutData {
  description: string[]
}

export const aboutData : AboutData = {
  description: [
"I'm a Software Developer & Engineer with a curiosity for how things work. I specialise in building and integrating backend APIs, but I've also created dynamic frontends, a character-driven Unity game, an AI image classifier, and other projects that push my skills and creativity.",
"I thrive on solving complex technical challenges while keeping design and user experience in mind. I enjoy combining aesthetics, interactivity, and efficient code, from data structures and algorithms to intuitive UI/UX. Being involved in all parts of the development process is what excites me most.",
"Outside of programming, I love reading, gaming, and have recently been trying my hand at bouldering. I’m also fascinated by history and have an occasional (frequent ◑.◑) sweet tooth."

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