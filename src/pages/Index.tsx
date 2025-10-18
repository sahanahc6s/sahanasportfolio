import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, ExternalLink, Code2, Database, Server, Cpu } from "lucide-react";
import profileImage from "@/assets/profile-sahana.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "ShopVerse",
      subtitle: "Full Stack Web Application",
      status: "Ongoing",
      tech: "Java, Spring Boot, REST API, Hibernate, Oracle SQL, React, HTML, CSS, JavaScript",
      description: "E-commerce platform with CRUD operations and RESTful APIs.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Movie CRUD Web Application",
      subtitle: "Aug–Sep 2025",
      tech: "Spring Boot, Thymeleaf, HTML, CSS, Java",
      description: "CRUD operations for movie records with dynamic Thymeleaf rendering.",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Women Safety System",
      subtitle: "Sep–Dec 2024",
      tech: "Arduino IDE, NodeMCU, Blynk, GPS, IMU Sensor, Heart Rate Sensor",
      description: "IoT-based personal safety system with health monitoring and SOS alert system.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Android Application-Based Robotic Car",
      subtitle: "May–Aug 2024",
      tech: "Arduino IDE, MIT App Inventor, Bluetooth Module, L298N Motor Driver",
      description: "Bluetooth-controlled car with obstacle detection.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Currency Converter Web Application",
      subtitle: "May–Jun 2025",
      tech: "HTML, CSS, JavaScript, Exchange Rate API",
      description: "Real-time currency converter with responsive design.",
      icon: <Code2 className="w-6 h-6" />
    },
  ];

  const experiences = [
    {
      role: "Intern – Java Full Stack Web Development",
      company: "JSpiders, Bangalore",
      period: "Feb–Aug 2025",
      points: [
        "Engineered Java Full Stack solutions (Java, JDBC, Hibernate, Spring, Spring Boot, Oracle SQL, HTML, CSS, JavaScript).",
        "Built dynamic web applications with backend integration and database interaction."
      ]
    },
    {
      role: "Intern – Embedded System Design using Python",
      company: "RLogic Technologies, Hosapete",
      period: "Oct–Nov 2023",
      points: [
        "Developed Python-based automation solutions for hardware interactions.",
        "Integrated microcontrollers and optimized code for embedded systems."
      ]
    }
  ];

  const skills = {
    "Languages": ["Java", "C", "Python", "C++ (Basics)"],
    "Frontend": ["HTML", "CSS", "JavaScript"],
    "Backend": ["JDBC", "Hibernate", "Spring", "Spring Boot", "REST API"],
    "Database": ["Oracle SQL"],
    "Other": ["DSA", "Networking Fundamentals (TCP, UDP, ARP, Ethernet)", "Git", "GitHub", "Jira"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">Sahana HC</h2>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-foreground transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-foreground transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-foreground transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-fade-in space-y-8">
            <div className="inline-block">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Introduction
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  Sahana HC
                </span>
                <span className="text-primary">.</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  Java Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Passionate about creating <span className="text-accent font-semibold">efficient</span>, <span className="text-accent font-semibold">scalable</span>, and <span className="text-accent font-semibold">user-focused</span> software solutions while continuously strengthening technical expertise.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/30 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
              >
                View My Work
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary bg-card/50 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-card"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <span className="text-muted-foreground text-sm font-medium">Connect with me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/sahanahc6s" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/sahanahc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-scale flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-3xl rounded-full group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Rotating Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Sahana HC" 
                  className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-2xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-card border-2 border-primary rounded-2xl px-6 py-4 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Available for</p>
                      <p className="text-sm font-bold text-primary">New Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">— About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Background & Education</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enthusiastic and detail-oriented Java Full Stack Developer with a strong foundation in Core Java, HTML, CSS, JavaScript, and SQL. Skilled in designing and integrating web applications using Spring and Spring Boot frameworks with database connectivity through JDBC and Hibernate.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently developing RESTful APIs to enhance backend proficiency. Passionate about creating efficient, scalable, and user-focused software solutions while continuously strengthening technical expertise.
              </p>
            </div>
            <Card className="p-8 bg-secondary border-border">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">Bachelor of Engineering</p>
                <p className="text-primary">Electronics and Communication</p>
                <p className="text-muted-foreground">Proudhadevaraya Institute of Technology</p>
                <p className="text-muted-foreground">(Affiliated with VTU) – Hosapete, India</p>
                <p className="text-sm text-muted-foreground mt-2">Dec 2021 – May 2025</p>
                <p className="text-lg font-bold text-primary mt-4">CGPA: 8.9</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">— Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Professional Journey</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm md:text-base">{exp.period}</span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">— Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 bg-secondary border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {project.icon}
                  </div>
                  {project.status && (
                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">{project.status}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-foreground mb-4">{project.description}</p>
                <p className="text-xs text-muted-foreground">{project.tech}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">— Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Expertise & Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">— Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6 bg-secondary border-border hover:border-primary/50 transition-all">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:9019987667" className="text-muted-foreground hover:text-primary transition-colors">
                9019987667
              </a>
            </Card>
            
            <Card className="p-6 bg-secondary border-border hover:border-primary/50 transition-all">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:sahanahc6s@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                sahanahc6s@gmail.com
              </a>
            </Card>
            
            <Card className="p-6 bg-secondary border-border hover:border-primary/50 transition-all">
              <Github className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/sahanahc6s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                github.com/sahanahc6s
                <ExternalLink className="w-3 h-3" />
              </a>
            </Card>
            
            <Card className="p-6 bg-secondary border-border hover:border-primary/50 transition-all">
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/sahanahc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                linkedin.com/in/sahanahc
                <ExternalLink className="w-3 h-3" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Sahana HC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
