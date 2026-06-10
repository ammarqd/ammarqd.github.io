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
    "Hi, I'm Ammar. I’m a software engineer focused on backend engineering and data-intensive applications, with a curiosity for how software systems work under the hood. I enjoy designing thoughtful solutions and building systems that balance technical depth with practical engineering.",
    "Currently, I'm building ImageFlow, an image processing application exploring asynchronous workloads, service coordination, and complex data flows. Alongside it, I've been finalising a compiler project that has deepened my understanding of language design and systems-level concepts.",
    "The engineering challenges I thrive on are the ones where the complexity lies beneath the surface: how data moves through a system, how different services manage state and memory, and how early design decisions shape performance down the line. I'm especially keen to keep working on backend systems and data-intensive applications where these challenges take centre stage.",
    "In my spare time, I enjoy reading, getting lost in a good story-driven RPG, and occasionally bouldering. I'm also fascinated by history and ancient civilisations."
  ]
}



export const experiences: Experience[] = [
  {
    position: "Demonstrator",
    company: "Queen Mary University of London",
    duration: "2022 — 2025",
    description:
      "Supervised and graded labs for groups of 100+ first and second year students with the module organiser and demonstrator team. Guided students on module concepts, Java/Python code and contributed to higher student satisfaction than previous cohorts."
  },
  {
    position: "Private Tutor",
    company: "Modern Tuition / Freelance",
    duration: "2021 — 2025",
    description:
      "Delivered tailored one-on-one Maths and Science tutoring sessions for secondary school and 11+ exam students, adapting lessons to each student’s needs both in-person and online."
  }
]

export const projects: Project[] = [
  {
    title: "ImageFlow",
    url: "https://github.com/ammarqd/imageflow-app",
    image: "/images/imageflow-app.png",
    description: "Distributed, asynchronous image processing application using OpenCV and the YuNet model for AI-assisted smart cropping of batch image uploads, with results displayed in a gallery view.",
    technologies: ["FastAPI", "Postgres", "Redis", "Celery", "React"]
  },
  {
    title: "Cool Compiler",
    url: "https://github.com/ammarqd/cool-compiler",
    image: "/images/cool-compiler.png",
    description:
      "Compiler for the Cool programming language using the Visitor-pattern for AST traversal. Coded in Java and utilising ANTLR4 for parse tree generation, with full test coverage for each compiler phase.",
    technologies: ["Java", "ANTLR4"]
  },
  {
    title: "Deep Learning Image Classifier",
    url: "https://github.com/ammarqd/deep-learning-image-classifier",
    image: "/images/nndl-classifier.jpg",
    description:
      "Image classifier with a custom CNN architecture for multi-class image recognition. Applied data augmentation and model optimisation techniques, attaining 91% accuracy on the CIFAR-10 dataset.",
    technologies: ["Python", "PyTorch", "Pandas"]
  },
  {
    title: "Never Upon a Time",
    url: "https://ammarqd.github.io/Never-Upon-a-Time-build/Build/index.html",
    image: "/images/never-upon-a-time.jpg",
    description:
      "A Unity game where you play as a protagonist transported to a surreal realm inspired by Alice in Wonderland. Navigate Victorian streets, an opulent mansion and bizarre spaces in search of your lost cat Seren.",
    technologies: ["C#", "Unity Engine", "Blender"]
  },
  {
    title: "Weather App",
    url: "https://github.com/ammarqd/weather-app-gui",
    image: "/images/weather-app.jpg",
    description:
      "React app with a stylish GUI and weather information obtained via an external API. Designed for tourists, it has clothing and accessory recommendations based on the weather.",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
]
