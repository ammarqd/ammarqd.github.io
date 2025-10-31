export interface Project {
  title: string
  image: string
  description: string
  url: string
  technologies: string[]
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

export const aboutData: AboutData = {
  description: [
    "I'm a software developer and engineer specialising in backend development and API integration. I build systems that are maintainable, extensible and well-architected. I'm especially interested in the underlying logic and ‘why’ behind systems, and that curiosity drives much of my work.",
    "While my focus is on backend engineering, I have experience across the stack, having started my coding journey with frontend development. I enjoy creating clear, easy-to-use interfaces and value good UI and UX as an important part of building complete, well-rounded systems.",
    "In terms of learning and growth, I'm always trying out new things—whether that's an ambitious low-level technical project or something on the more creative side. My curiosity and versatility are two of my biggest strengths, and I'm always expanding the range of things I can build and understand.",
    "Outside of programming, I love reading and gaming, and have recently been trying my hand at bouldering. I'm also fascinated by history, especially ancient civilisations."
  ]
}



export const experiences: Experience[] = [
  {
    position: "Lab Demonstrator",
    company: "Queen Mary University of London",
    duration: "2022 — 2025",
    description:
      "Supervised and graded lab sessions for 100+ first and second year students with the module organiser and demonstrator team. Taught key module concepts and contributed to higher student satisfaction than previous cohorts."
  },
  {
    position: "Private Tutor",
    company: "Modern Tuition / Freelance",
    duration: "2021 — 2025",
    description:
      "Delivered one-on-one Maths and Science tutoring for secondary school and 11+ exam students, adapting lessons to each student’s needs in-person and online."
  }
]

export const projects: Project[] = [
  {
    title: "Cool Compiler",
    url: "https://github.com/ammarqd/cool-compiler",
    image: "/images/cool-compiler.png",
    description:
      "A compiler for the Cool programming language, consisting of lexer, parser, and backend code generation. Coded in Java utilising the visitor design pattern, with full test coverage for each component.",
    technologies: ["Java", "ANTLR4"]
  },
  {
    title: "PRISM App",
    url: "https://github.com/ammarqd/github-stats-app",
    image: "/images/prism-app.png",
    description:
      "A web app that lets users upload and enhance images with a wide variety of filters. Features a clean and intuitive interface, with the ability to save, manage, and enjoy edited images.",
    technologies: ["React", "TailwindCSS", "Express", "PostgreSQL"]
  },
  {
    title: "Deep Learning Image Classifier",
    url: "https://github.com/ammarqd/deep-learning-image-classifier",
    image: "/images/nndl-classifier.jpg",
    description:
      "An image classifier with a custom architecture, utilising knowledge learnt from a Neural Networks & Deep Learning module. Attained 91% accuracy on the CIFAR-10 dataset.",
    technologies: ["Python", "PyTorch", "Pandas"]
  },
  {
    title: "Image Processing Application",
    url: "https://github.com/ammarqd/image-processing-application",
    image: "/images/image-processing-app.jpg",
    description:
      "A desktop application featuring single and dual-image filters, supporting a wide range of operations, with the option to apply effects to a selected area via click-and-drag.",
    technologies: ["Java", "Swing"]
  },
  {
    title: "Never Upon a Time",
    url: "https://ammarqd.github.io/never-upon-a-time-build/build/index.html",
    image: "/images/never-upon-a-time.jpg",
    description:
      "Follow the protagonist through a surreal realm inspired by Alice in Wonderland, navigating Victorian streets, opulent mansions, and bizarre spaces in search of a lost cat named Seren.",
    technologies: ["C#", "Unity Engine", "Blender"]
  },
  {
    title: "Weather App",
    url: "https://github.com/ammarqd/weather-app-gui",
    image: "/images/weather-app.jpg",
    description:
      "A weather app coded in React, with a stylish GUI and weather information obtained via an API. Designed for tourists, it has clothing and accessory recommendations based on the weather.",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
]
