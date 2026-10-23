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
    "Lately, I've been building an event-driven payment ledger centered around double-entry bookkeeping, strict idempotency, and concurrency locking under load. Alongside it, I'm finalising ImageFlow, a distributed, asynchronous image processing pipeline built for batch uploads and AI-assisted smart cropping.",
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
    title: "Event-Driven Payment Ledger",
    url: "https://github.com/ammarqd/event-driven-payment-ledger",
    image: "/images/event-driven-payment-ledger.png",
    description: "Append-only, double-entry payment ledger built for high-concurrency transactions. Uses idempotency keys for safe payment retries and a transactional outbox for event messaging.",
    technologies: ["C#", ".NET", "RabbitMQ", "Postgres"]
  },
  {
    title: "ImageFlow",
    url: "https://github.com/ammarqd/imageflow-app",
    image: "/images/imageflow-app.png",
    description: "Distributed batch-processing application for high-volume image workloads. Utilises asynchronous worker queues, applying AI-driven face and saliency detection to generate smart-crops.",
    technologies: ["FastAPI", "Celery", "Redis", "React"]
  },
  {
    title: "Cool Compiler",
    url: "https://github.com/ammarqd/cool-compiler",
    image: "/images/cool-compiler.png",
    description:
      "Multi-pass compiler translating Stanford Cool source code into 32-bit MIPS assembly. Uses the Visitor pattern for AST traversal and a stack-accumulator runtime model for code generation.",
    technologies: ["Java", "ANTLR4", "MIPS"]
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
    technologies: ["React", "JavaScript", "HTML", "CSS"]
  },
]
