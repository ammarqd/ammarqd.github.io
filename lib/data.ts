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
    "I'm a software developer and engineer specialising in backend development, API design, and system architecture. I focus on clean, efficient code that doesn't sacrifice on performance. My development process is very user experience based, resulting in robust applications that provide a seamless integrated experience. ",
    "While my focus is on backend engineering, I have experiences across the stack with frontend development having been my entry path into coding. I enjoy creating clear, easy-to-use interfaces and value good UI and UX as an important part of building complete, well-rounded systems.",
    "In terms of learning and growing, I'm always trying out new things—whether that's an ambitious low-level technical project or something on the more creative side. I consider my curiosity and also my versatility to be two of my greatest strengths, and I'm always expanding the range of things I can do.",
    "Outside of programming, I love reading and gaming, and have recently been trying my hand at bouldering. I'm also fascinated by history—especially ancient civilisations."
  ]
}



export const experiences: Experience[] = [
  {
    position: "Lab Demonstrator",
    company: "Queen Mary University of London",
    duration: "2022 — 2025",
    description:
      "Coordinated with module organiser, senior demonstrator and fellow demonstrators to oversee classes of 100+ students. Graded labs and taught module concepts. Recognised for higher student satisfaction during my demonstrator cohort."
  },
  {
    position: "Private Tutor",
    company: "Modern Tuition / Freelance",
    duration: "2021 — 2025",
    description:
      "Taught secondary school students and students taking the 11+ exam. Tailored Maths and Science tutoring to meet individual learning needs, in both in-person and online environments."
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
    title: "CIFAR-10 Image Classifier",
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
      "An Image processing application for processing a single image with filters or filtering between two images. Also includes the ability to click and drag a region to apply multiple filters onto a single image.",
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
