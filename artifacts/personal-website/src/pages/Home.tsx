import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Twitter, Linkedin, Moon, Sun, ArrowUpRight, BookOpen } from "lucide-react";
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiVercel, SiNodedotjs, SiFigma, SiGraphql } from "react-icons/si";
import { useTheme } from "@/components/ThemeProvider";

const MOCK_PROJECTS = [
  {
    title: "Aura",
    description: "A serene ambient soundscape generator for focused work, built with Web Audio API. It uses procedural generation to create non-repeating audio loops that mask distracting background noise.",
    year: "2024",
    link: "#",
    tags: ["React", "Web Audio API", "Tailwind", "Zustand"]
  },
  {
    title: "Thread",
    description: "Minimalist journaling platform with end-to-end encryption and offline-first capabilities. Designed with a focus on typography and reading experience, completely free of distraction.",
    year: "2023",
    link: "#",
    tags: ["Next.js", "IndexedDB", "Framer Motion", "tRPC"]
  },
  {
    title: "Lumina",
    description: "Design system documentation tool that extracts tokens directly from Figma and generates interactive React component playgrounds automatically.",
    year: "2023",
    link: "#",
    tags: ["TypeScript", "Figma API", "Node.js", "MDX"]
  },
  {
    title: "Vessel",
    description: "A personal finance tracker that doesn't feel like a spreadsheet. Uses custom D3 visualizations to make understanding spending habits intuitive and tactile.",
    year: "2022",
    link: "#",
    tags: ["React", "D3.js", "PostgreSQL", "Prisma"]
  }
];

const MOCK_EXPERIENCE = [
  {
    role: "Senior Design Engineer",
    company: "Vanguard UI",
    period: "2022 — Present",
    description: "Bridging the gap between design and engineering. Leading the creation of a unified component system used by over 40 product teams. Reduced shipping time for new features by 30% through standardized patterns."
  },
  {
    role: "Frontend Developer",
    company: "Studio Nova",
    period: "2020 — 2022",
    description: "Built immersive web experiences and interactive campaigns for boutique brands. Specialized in WebGL and performance optimization for media-heavy sites."
  },
  {
    role: "Creative Technologist",
    company: "Freelance",
    period: "2018 — 2020",
    description: "Collaborated with independent designers to bring experimental concepts to life on the web. Focused on creative coding and non-standard interactions."
  }
];

const MOCK_WRITING = [
  {
    title: "The invisible details of good forms",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Why we need more boring software",
    date: "Aug 24, 2024",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "On digital craftsmanship",
    date: "May 03, 2024",
    readTime: "4 min read",
    link: "#"
  }
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, -20]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="font-serif text-xl tracking-tight text-foreground cursor-pointer hover:text-primary transition-colors" onClick={() => scrollTo('hero')} data-testid="nav-logo">
          ac.
        </div>
        <div className="flex items-center gap-6 md:gap-8 text-foreground">
          <button onClick={() => scrollTo('work')} className="text-sm font-medium hover:text-primary transition-colors hidden sm:block" data-testid="nav-link-work">Work</button>
          <button onClick={() => scrollTo('about')} className="text-sm font-medium hover:text-primary transition-colors hidden sm:block" data-testid="nav-link-about">About</button>
          <button onClick={() => scrollTo('writing')} className="text-sm font-medium hover:text-primary transition-colors hidden sm:block" data-testid="nav-link-writing">Writing</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-medium hover:text-primary transition-colors hidden sm:block" data-testid="nav-link-contact">Contact</button>
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-end">
           <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl -translate-y-1/4 translate-x-1/4" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] text-foreground mb-6">
              Engineering <span className="text-primary italic">calm</span> <br className="hidden md:block"/> digital experiences.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-12">
              I'm Alex Chen, a design engineer obsessed with typography, invisible details, and interfaces that feel crafted rather than assembled.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => scrollTo('work')}
                className="group flex items-center gap-2 text-sm font-medium bg-foreground text-background px-8 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                data-testid="button-view-work"
              >
                Selected Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                data-testid="button-contact"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          style={{ opacity, y }}
          className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-border relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-foreground"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Selected Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Selected Work</h2>
              <p className="text-lg text-muted-foreground max-w-md">A collection of things I've built with care over the last few years.</p>
            </div>
            <div className="text-sm font-mono text-muted-foreground">01 / 05</div>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {MOCK_PROJECTS.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group block relative"
                data-testid={`card-project-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-4">
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight size={24} className="opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                </div>
                
                <div className="w-full h-[1px] bg-border mb-8 group-hover:bg-primary/30 transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <p className="text-muted-foreground md:max-w-xl text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap md:justify-end gap-2 md:max-w-xs">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-muted text-xs font-medium text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About / Philosophy */}
      <section id="about" className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">About</h2>
            <div className="text-sm font-mono text-muted-foreground">02 / 05</div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-loose prose-p:mb-8 max-w-none">
                <p className="text-2xl text-foreground font-medium mb-8">
                  I'm a designer who codes and an engineer who designs. I believe the best products emerge when the line between these disciplines disappears entirely.
                </p>
                <p>
                  My work focuses on creating quiet interfaces—tools that respect the user's attention, perform flawlessly, and possess just enough character to be memorable without being loud. Good software shouldn't shout at you; it should feel like a well-worn tool that fits perfectly in your hand.
                </p>
                <p>
                  Currently based in San Francisco, I spend my days thinking about component APIs, fluid typography, and how to make the web feel a little more human. When I'm not in front of a screen, you'll probably find me trying to perfect my pour-over coffee technique or photographing brutalist architecture.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-4 lg:col-start-9"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Experience */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto w-full">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Experience</h2>
            <div className="text-sm font-mono text-muted-foreground">03 / 05</div>
          </motion.div>

          <div className="flex flex-col gap-12">
            {MOCK_EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative pl-8 border-l border-border hover:border-primary transition-colors duration-300"
              >
                <div className="absolute w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-primary -left-[6.5px] top-2 transition-colors duration-300" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="md:col-span-4">
                    <h4 className="text-xl font-serif text-foreground mb-1">{exp.role}</h4>
                    <div className="text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Toolkit */}
      <section className="py-20 px-6 md:px-12 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto w-full">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Toolkit</h2>
            <div className="text-sm font-mono text-muted-foreground">04 / 05</div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
             {[
                { icon: SiReact, name: "React Ecosystem", desc: "Next.js, Vite, Zustand" },
                { icon: SiTypescript, name: "TypeScript", desc: "Strict mode, Generics" },
                { icon: SiTailwindcss, name: "Styling", desc: "Tailwind, CSS Modules" },
                { icon: SiFramer, name: "Motion", desc: "Framer Motion, GSAP" },
                { icon: SiNodedotjs, name: "Backend", desc: "Node, Express, tRPC" },
                { icon: SiGraphql, name: "Data", desc: "GraphQL, REST, Prisma" },
                { icon: SiFigma, name: "Design", desc: "Figma, Variables, Prototyping" },
                { icon: SiVercel, name: "Infrastructure", desc: "Vercel, GitHub Actions" }
              ].map((tech, i) => (
                <div key={tech.name} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-full bg-muted text-foreground">
                    <tech.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Writing */}
      <section id="writing" className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto w-full">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Writing</h2>
            <div className="text-sm font-mono text-muted-foreground">05 / 05</div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {MOCK_WRITING.map((post, i) => (
               <motion.a
                 href={post.link}
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 bg-card hover:bg-muted/50 transition-all"
               >
                 <div className="flex items-center gap-6 mb-4 md:mb-0">
                   <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border text-muted-foreground group-hover:text-primary transition-colors">
                     <BookOpen size={20} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                 </div>
                 <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                   <span>{post.date}</span>
                   <span className="w-1 h-1 rounded-full bg-border" />
                   <span>{post.readTime}</span>
                 </div>
               </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-background">Let's build something.</h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Currently open for new opportunities. Whether you have a project in mind or just want to chat about design, engineering, and everything in between.
            </p>
            
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-serif border-b-2 border-background/30 pb-2 hover:text-primary hover:border-primary transition-all"
              data-testid="link-email"
            >
              hello@example.com
              <ArrowUpRight size={28} />
            </a>

            <div className="flex justify-center items-center gap-8 mt-32 text-background/50">
              <a href="#" className="hover:text-background transition-colors p-2" data-testid="link-github" aria-label="GitHub"><Github size={24} /></a>
              <a href="#" className="hover:text-background transition-colors p-2" data-testid="link-twitter" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" className="hover:text-background transition-colors p-2" data-testid="link-linkedin" aria-label="LinkedIn"><Linkedin size={24} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-sm font-mono text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Alex Chen. All rights reserved. Built with React and Framer Motion.</p>
      </footer>
    </div>
  );
}
