// Mock data for Abhishek Singh's Portfolio

export const personalInfo = {
  name: "Abhishek Singh",
  title: "Software Engineer • AI/ML • Full Stack Developer",
  tagline: "I build intelligent, scalable, and high-performance systems for the future.",
  email: "asingh.dev@example.com",
  location: "India",
  github: "https://github.com/asingh-dev",
  linkedin: "https://linkedin.com/in/asingh-dev",
  bio: "I'm a passionate Software Engineering student specializing in AI/ML and Full Stack Development. With hands-on experience in building intelligent systems and scalable web applications, I combine cutting-edge machine learning techniques with modern web technologies to create impactful solutions.",
  resumeUrl: "#"
};

export const projects = [
  {
    id: 1,
    title: "AI Interview Preparation App",
    description: "Fine-tuned LLaMA model for personalized technical interview coaching with real-time feedback and adaptive questioning.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
    techStack: ["Python", "LLaMA", "PyTorch", "React", "FastAPI", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
    highlights: [
      "Fine-tuned LLaMA 7B on 10K+ interview Q&A pairs",
      "Achieved 87% user satisfaction in mock interviews",
      "Real-time feedback system with sentiment analysis"
    ]
  },
  {
    id: 2,
    title: "Line-Following Robot with Node Detection",
    description: "Autonomous robot using computer vision and PID control for precise line tracking and intelligent node recognition.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
    techStack: ["Python", "OpenCV", "Raspberry Pi", "Arduino", "PID Control"],
    liveUrl: "#",
    codeUrl: "#",
    highlights: [
      "95% accuracy in line detection using OpenCV",
      "Real-time node detection with color segmentation",
      "Optimized PID controller for smooth navigation"
    ]
  },
  {
    id: 3,
    title: "MERN Recipe App",
    description: "Full-stack recipe sharing platform with user authentication, search functionality, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=800&fit=crop",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Cloudinary"],
    liveUrl: "#",
    codeUrl: "#",
    highlights: [
      "Built RESTful API with JWT authentication",
      "Implemented search with MongoDB text indexes",
      "Image upload with Cloudinary integration"
    ]
  },
  {
    id: 4,
    title: "CTF Challenge Collection",
    description: "Suite of cybersecurity challenges covering web exploitation, cryptography, and reverse engineering from CTFces.tech.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
    techStack: ["Python", "Bash", "Cryptography", "Web Security", "Linux"],
    liveUrl: "#",
    codeUrl: "#",
    highlights: [
      "Solved 15+ CTF challenges across multiple categories",
      "Documented writeups for educational purposes",
      "Focused on OWASP Top 10 vulnerabilities"
    ]
  },
  {
    id: 5,
    title: "Two-Pointer & Sliding Window DSA Visualizer",
    description: "Interactive algorithm visualization tool for understanding and mastering array optimization techniques with step-by-step execution.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    techStack: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
    highlights: [
      "Visualizes 20+ two-pointer and sliding window problems",
      "Step-by-step animation with complexity analysis",
      "Interactive code editor with real-time execution"
    ]
  }
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Software Engineering Intern",
    company: "TechVision Solutions",
    location: "Remote, India",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Developed full-stack features for enterprise SaaS platform using MERN stack",
      "Implemented JWT-based authentication system serving 5,000+ users",
      "Optimized API response time by 40% through database query optimization",
      "Collaborated with cross-functional team using Agile methodology"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Machine Learning Intern",
    company: "DataMinds AI Labs",
    location: "Hybrid, India",
    period: "Jan 2024 - Apr 2024",
    description: [
      "Built ML pipelines for customer churn prediction using scikit-learn",
      "Implemented PCA and Random Forest models achieving 82% accuracy",
      "Created data preprocessing workflows handling 100K+ records",
      "Deployed models using FastAPI and Docker containers"
    ]
  },
  {
    id: 3,
    type: "education",
    title: "B.Tech in Software Engineering",
    company: "Indian Institute of Technology",
    location: "India",
    period: "2022 - 2026 (Expected)",
    description: [
      "Current CGPA: 8.5/10",
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Technologies",
      "Member of Coding Club and AI/ML Research Group"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "CTFces.tech Participant",
    organization: "Capture The Flag Competition",
    year: "2024",
    description: "Competed in cybersecurity challenges covering web exploitation and cryptography"
  },
  {
    id: 2,
    title: "MoSPI – Innovate with GoIStats Hackathon",
    organization: "Ministry of Statistics and Programme Implementation",
    year: "2024",
    description: "Developed data visualization dashboard for government statistics"
  },
  {
    id: 3,
    title: "Advanced Competitive Programmer",
    organization: "Codeforces",
    year: "2023-2024",
    description: "Specialist rank (1400+ rating) with 500+ problems solved in Java"
  }
];

export const skills = {
  aiml: [
    { name: "Python", level: 90 },
    { name: "NumPy & Pandas", level: 85 },
    { name: "Scikit-learn", level: 80 },
    { name: "TensorFlow", level: 60 },
    { name: "LLaMA Fine-tuning", level: 70 },
    { name: "ML Pipelines", level: 75 }
  ],
  fullstack: [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "JWT Auth", level: 85 }
  ],
  dsa: [
    { name: "Java", level: 90 },
    { name: "Two Pointers", level: 95 },
    { name: "Sliding Window", level: 95 },
    { name: "Binary Search", level: 90 },
    { name: "Recursion", level: 85 },
    { name: "Heaps & Trees", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "MySQL Workbench", level: 75 },
    { name: "Docker", level: 65 },
    { name: "Vercel/Netlify", level: 80 }
  ]
};

export const blogPosts = [
  {
    id: 1,
    title: "Mastering Two-Pointer Technique: A Complete Guide",
    excerpt: "Deep dive into one of the most powerful array optimization techniques with 10+ solved problems and patterns.",
    date: "2024-11-15",
    category: "DSA",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    title: "Fine-tuning LLaMA for Domain-Specific Tasks",
    excerpt: "Learn how I fine-tuned LLaMA 7B for interview preparation with practical code examples and optimization techniques.",
    date: "2024-10-28",
    category: "AI/ML",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    title: "Building Scalable REST APIs with Node.js and MongoDB",
    excerpt: "Best practices for designing and implementing production-ready APIs with authentication, validation, and error handling.",
    date: "2024-10-10",
    category: "Full Stack",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop"
  },
  {
    id: 4,
    title: "Understanding ML Pipelines: From Data to Deployment",
    excerpt: "A comprehensive guide to building end-to-end machine learning pipelines with scikit-learn and practical deployment strategies.",
    date: "2024-09-22",
    category: "AI/ML",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop"
  }
];
