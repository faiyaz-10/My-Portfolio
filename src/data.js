export const profile = {
  name: "Faiyaz Shahriar",
  role: "Aspiring Software Engineer",
  tagline: "Building thoughtful digital experiences and exploring the future of AI.",
  location: "Cumilla, Bangladesh",
  email: "faiyazshahriar373@gmail.com",
  phone: "01535117386",
  github: "https://github.com/faiyaz-10",
  linkedin: "https://linkedin.com/in/faiyaz-shahriar",
  facebook: "https://www.facebook.com/faiyaz.shahriar.547705/",
  resume: "/Faiyaz_Shahriar_Resume.pdf"
};

export const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "Backend & Database", items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Socket.io"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "Vite", "Docker", "Postman", "Vercel", "Render"] },
  { group: "Exploring", items: ["Python", "NumPy", "Machine Learning", "AI Safety", "Human-Centered AI"] }
];

export const projects = [
  {
    slug: "mern-chat-application",
    name: "iMessage",
    category: "Full-Stack Development",
    images: [
      {
        src: "/images/chat-project.png",
        alt: "iMessage sign-in screen showing the secure entry interface"
      }
    ],
    short: "A real-time messaging application built around responsive conversations and a modern authentication flow.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Clerk", "ImageKit"],
    description: "A full-stack chat application designed to provide a smooth, responsive messaging experience. The project brings together a React client, an Express API, persistent MongoDB data, real-time communication through Socket.io, authentication, and image handling.",
    features: [
      "Real-time communication powered by Socket.io.",
      "Authentication and protected application flows.",
      "Image handling alongside persistent MongoDB data."
    ],
    challenges: [
      "Coordinating real-time events between the client and server.",
      "Keeping authentication and protected application flows consistent.",
      "Deploying a client and custom server as separate services."
    ],
    improvements: [
      "Add message delivery and read receipts.",
      "Introduce group conversations and message search.",
      "Improve automated testing, monitoring, and accessibility."
    ],
    live: "https://imessage-3dws.onrender.com",
    github: "https://github.com/faiyaz-10/imessage.git"
  },
  {
    slug: "bazardor",
    name: "BazarDor",
    category: "Full-Stack Development",
    images: [
      {
        src: "/images/bazardor-project.png",
        alt: "BazarDor homepage with Bengali product categories and daily market prices"
      }
    ],
    short: "A marketplace-style web application focused on product discovery and a clean shopping experience.",
    stack: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS"],
    description: "BazarDor is a marketplace project built with a modern Next.js interface and a database-backed application flow. It explores authentication, product browsing, and the structure needed for a practical e-commerce experience.",
    features: [
      "Product browsing in a marketplace-style interface.",
      "Authentication and a database-backed application flow."
    ],
    challenges: [
      "Configuring authentication secrets and OAuth callback settings.",
      "Managing database connectivity in a deployed environment.",
      "Handling dynamic routes and refresh behavior reliably."
    ],
    improvements: [
      "Complete payment and order-management workflows.",
      "Add product filtering, sorting, and seller dashboards.",
      "Expand validation, security checks, and end-to-end tests."
    ],
    live: "https://bazar-dor-faiyaz-10.vercel.app",
    github: "https://github.com/faiyaz-10/BazarDor.git"
  },
  {
    slug: "fit-log",
    name: "Fit-Log",
    category: "Web Application",
    images: [
      {
        src: "/images/fitlog-project.png",
        alt: "Fit-Log workout library homepage with workout browsing and personal plan navigation"
      }
    ],
    short: "A fitness activity tracking interface for organizing workouts and reviewing activity information.",
    stack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    description: "Fit-Log is a fitness-focused web application that presents activity information in a structured and accessible interface. It was developed to practise component-driven UI development, API integration, responsive layouts, and user feedback.",
    features: [
      "A structured interface for browsing fitness activity information.",
      "Interactive controls for organizing workout activity.",
      "Responsive layouts and API-integrated data handling."
    ],
    challenges: [
      "Presenting activity data clearly across different screen sizes.",
      "Keeping sorting and interactive controls predictable.",
      "Handling API data and loading states in the interface."
    ],
    improvements: [
      "Add personal accounts and saved workout history.",
      "Introduce progress charts and weekly summaries.",
      "Add stronger form validation and automated tests."
    ],
    live: "https://fit-log-chi-snowy.vercel.app",
    github: "https://github.com/faiyaz-10/Fit-Log.git"
  },
  {
    slug: "iot-fall-detection",
    name: "IoT Fall Detection & Health Monitoring",
    category: "Research / IoT",
    images: [
      {
        src: "/images/iot-project.svg",
        alt: "Illustration of the IoT fall detection and health monitoring device with sensor and alert indicators"
      }
    ],
    short: "A wearable-oriented prototype combining motion sensing and health monitoring with alert functionality.",
    stack: ["ESP32", "MPU6050", "MAX30102", "OLED", "GPS", "Embedded C++"],
    description: "An IoT-based fall detection and health monitoring system developed as an academic research project. The prototype combines motion sensing, health-related sensor readings, a display, location support, and an alert workflow. The project paper has been accepted.",
    features: [
      "Motion sensing for fall detection.",
      "Health-related sensor readings and an on-device display.",
      "Location support and an alert workflow."
    ],
    challenges: [
      "Reducing false fall alerts caused by everyday movement and vibration.",
      "Integrating multiple sensors with limited embedded resources.",
      "Making the alert workflow useful when network connectivity is unreliable."
    ],
    improvements: [
      "Evaluate detection performance with a larger and more diverse dataset.",
      "Improve sensor calibration and power efficiency.",
      "Develop a more robust offline-first alert and data-logging workflow."
    ],
    live: "#",
    github: "https://github.com/faiyaz-10"
  }
];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Bangladesh Army International University of Science and Technology (BAIUST)",
    detail: "Currently pursuing · CGPA: 3.5+",
    period: "Undergraduate"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Cumilla Government City College",
    detail: "Passed",
    period: "2022"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Cumilla Modern High School",
    detail: "Passed",
    period: "2020"
  }
];
