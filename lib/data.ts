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
    "I'm a developer passionate about designing systems with thoughtful and deliberate engineering. My primary focus is engineering backend systems and integrating APIs, with an eye for performance and scale — creating reliable, maintainable solutions that support great user experiences.",
    "I have experience across the stack and often enjoy crafting interfaces to match the systems that I build, bridging backend and frontend to form complete, end-to-end experiences that look, function, and feel like production-ready products built with robust engineering.",
    "More generally, I love exploring new ideas and concepts, whether that's an ambitious technical project or something on the creative side. I maintain a steady backlog of ideas I'm actively tackling, driven by a natural inclination towards continual learning. This mindset keeps me constantly expanding the range of things I can build with the aim of holistic mastery of my craft.",
    "In my spare time, I enjoy reading, gaming and have been trying my hand at bouldering. I'm also fascinated by history, especially ancient civilisations."
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
    image: "/images/prism-app.png",
    description: "Asynchronous, distributed image processing pipeline with smart cropping and WebP conversion options. Features a React dashboard displaying queued jobs and a processed images gallery view.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React"]
  },
  {
    title: "Cool Compiler",
    url: "https://github.com/ammarqd/cool-compiler",
    image: "/images/cool-compiler.png",
    description:
      "Compiler for the Cool programming language, consisting of lexer, parser, semantic analysis and backend code generation. Coded in Java and using ANTLR4, with full test coverage for each compiler phase.",
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
    title: "Image Processing Application",
    url: "https://github.com/ammarqd/image-processing-application",
    image: "/images/image-processing-app.jpg",
    description:
      "Desktop application featuring single and dual-image filters, supporting a wide range of operations, with the option to apply effects to a selected area via click-and-drag.",
    technologies: ["Java", "Swing"]
  },
  {
    title: "Never Upon a Time",
    url: "https://ammarqd.github.io/Never-Upon-a-Time-build/Build/index.html",
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
      "React app with a stylish GUI and weather information obtained via an external API. Designed for tourists, it has clothing and accessory recommendations based on the weather.",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
]
