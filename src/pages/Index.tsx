import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, ExternalLink, Code2, Database, Server, Cpu, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import profileImage from "@/assets/profile-sahana.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with public key
      emailjs.init("SCPqh6Wu8vQVnEBr9");
      
      // Send email using EmailJS
      await emailjs.send(
        "service_xunuul9", // Service ID
        "template_sjbqrhj", // Template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "sahanahc6s@gmail.com",
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section id="about" className="relative py-24 px-6 bg-card overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Background & Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6 animate-fade-in">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enthusiastic and detail-oriented <span className="text-accent font-semibold">Java Full Stack Developer</span> with a strong foundation in Core Java, HTML, CSS, JavaScript, and SQL. Skilled in designing and integrating web applications using <span className="text-accent font-semibold">Spring and Spring Boot</span> frameworks with database connectivity through JDBC and Hibernate.
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-accent/30">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently developing <span className="text-primary font-semibold">RESTful APIs</span> to enhance backend proficiency. Passionate about creating efficient, scalable, and user-focused software solutions while continuously strengthening technical expertise.
                </p>
              </div>
            </div>
            
            <Card className="relative p-8 bg-gradient-to-br from-secondary via-secondary to-secondary/80 border-2 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group animate-fade-in-scale overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-bold text-foreground">Bachelor of Engineering</p>
                    <p className="text-lg text-primary font-semibold">Electronics and Communication</p>
                  </div>
                  
                  <div className="pt-2 pb-4 border-t border-border/50">
                    <p className="text-muted-foreground font-medium">Proudhadevaraya Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">(Affiliated with VTU) – Hosapete, India</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm text-muted-foreground">Dec 2021 – May 2025</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/30">
                    <p className="text-sm text-muted-foreground mb-1">Academic Performance</p>
                    <p className="text-3xl font-bold text-primary">CGPA: 8.9</p>
                    <div className="mt-2 h-2 bg-background/50 rounded-full overflow-hidden">
                      <div className="h-full w-[89%] bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 px-6 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Experience
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="relative p-8 md:ml-20 bg-card border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-[4.65rem] top-8 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-primary rounded-full"></div>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mt-6">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-4 group/item">
                          <span className="text-primary mt-1.5 text-xl group-hover/item:scale-125 transition-transform">▹</span>
                          <span className="text-muted-foreground text-base leading-relaxed group-hover/item:text-foreground transition-colors">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 bg-card overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="relative p-6 bg-gradient-to-br from-secondary to-secondary/50 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group cursor-pointer animate-fade-in-scale overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {project.icon}
                    </div>
                    {project.status && (
                      <span className="text-xs font-semibold bg-gradient-to-r from-accent/30 to-accent/20 text-accent px-3 py-1.5 rounded-full border border-accent/30 animate-pulse">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[3rem]">
                    {project.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {project.tech}
                    </p>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Technical Skills
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Expertise & Tools
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <Card 
                key={category} 
                className="relative p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-1.5 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-2 bg-secondary/50 backdrop-blur-sm text-foreground text-sm font-medium rounded-lg border border-border hover:border-primary hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-card overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing <span className="text-primary font-semibold">new projects</span>, creative ideas, or opportunities to be part of your visions.
          </p>
          
          {/* Contact Form */}
          <Card className="relative p-8 md:p-10 bg-gradient-to-br from-secondary to-card border-2 border-border shadow-2xl mb-12 max-w-2xl mx-auto overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6 text-left">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  className="bg-background/50 border-2 border-border focus:border-primary transition-colors"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className="bg-background/50 border-2 border-border focus:border-accent transition-colors"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Send className="w-4 h-4 text-primary" />
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  {...register("message")}
                  className="bg-background/50 border-2 border-border focus:border-primary transition-colors resize-none"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="group relative p-8 bg-gradient-to-br from-secondary to-secondary/50 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">Phone</h3>
                <a href="tel:9019987667" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                  9019987667
                </a>
              </div>
            </Card>
            
            <Card className="group relative p-8 bg-gradient-to-br from-secondary to-secondary/50 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="p-4 bg-accent/10 rounded-2xl inline-block mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3">Email</h3>
                <a href="mailto:sahanahc6s@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-base font-medium break-all">
                  sahanahc6s@gmail.com
                </a>
              </div>
            </Card>
            
            <Card className="group relative p-8 bg-gradient-to-br from-secondary to-secondary/50 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">GitHub</h3>
                <a 
                  href="https://github.com/sahanahc6s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-base font-medium"
                >
                  github.com/sahanahc6s
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </Card>
            
            <Card className="group relative p-8 bg-gradient-to-br from-secondary to-secondary/50 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="p-4 bg-accent/10 rounded-2xl inline-block mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <Linkedin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/sahanahc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 text-base font-medium"
                >
                  linkedin.com/in/sahanahc
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border/50 bg-gradient-to-b from-background to-card overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Sahana HC
            </h3>
            <p className="text-sm text-muted-foreground">Java Full Stack Developer</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://github.com/sahanahc6s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-lg bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sahanahc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-lg bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sahanahc6s@gmail.com" 
              className="p-3 rounded-lg bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-6"></div>
          
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Sahana HC. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Built with passion and dedication
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
