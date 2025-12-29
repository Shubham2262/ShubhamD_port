import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Leaf, Brain, Home, Mic, MessageSquare, Car, Code2 } from 'lucide-react';

const projects = [
  {
    icon: Leaf,
    title: 'Smart Plant Watering System',
    period: 'Aug - Oct 2023',
    description: 'IoT-based smart plant watering system with integrated sensors, actuators, and mobile app for remote monitoring, achieving significant water savings through automated, data-driven irrigation.',
    tags: ['IoT', 'Mobile App', 'Sensors', 'Automation'],
    color: 'from-green-400 to-emerald-600',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Brain,
    title: 'Neural Pulse: Stress Detection',
    period: 'Mar - Apr 2024',
    description: 'High-accuracy deep learning model for stress detection using ECG signals, trained on WESAD dataset, demonstrating AI-enhanced IoMT systems for real-time health monitoring.',
    tags: ['Deep Learning', 'ECG', 'Healthcare', 'AI'],
    color: 'from-purple-400 to-pink-600',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: MessageSquare,
    title: 'AI Summary & Audio Translation',
    period: 'Aug - Oct 2023',
    description: 'Python application with Tkinter GUI for PDF text summarization and translation using PyPDF2, NLTK, gTTS, and Googletrans with Hindi translation and audio download.',
    tags: ['Python', 'NLP', 'GUI', 'Translation'],
    color: 'from-blue-400 to-cyan-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Home,
    title: 'Smart Home Automation',
    period: 'Sep 2023',
    description: 'Centralized smart home automation using MQTT and NodeMCU with custom firmware, enabling seamless IoT device control via mobile and web interfaces.',
    tags: ['IoT', 'MQTT', 'NodeMCU', 'Web'],
    color: 'from-orange-400 to-red-600',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Mic,
    title: 'Virtual Assistant (JavaScript)',
    period: 'Jul - Aug 2022',
    description: 'Virtual assistant with conversational UI to automate tasks via voice and text commands, integrating APIs for weather, news, and task scheduling.',
    tags: ['JavaScript', 'Voice', 'APIs', 'Automation'],
    color: 'from-yellow-400 to-orange-600',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Car,
    title: 'Voice-Controlled Car',
    period: 'Feb - Mar 2022',
    description: 'Voice-controlled car prototype with real-time obstacle detection and collision avoidance, integrating sensors and custom software for voice command interpretation.',
    tags: ['Embedded', 'Sensors', 'Voice', 'Robotics'],
    color: 'from-red-400 to-rose-600',
    bgColor: 'bg-red-500/10',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Featured Work</span>
          </motion.div>
          <h2 className="section-title">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions spanning IoT, AI, and automation
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1, 
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className={`group relative ${index === 0 || index === 3 ? 'lg:row-span-1' : ''}`}
            >
              <div className="card-glass rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl ${project.bgColor} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className={`w-7 h-7 bg-gradient-to-br ${project.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                      <project.icon className={`w-7 h-7 text-primary absolute`} />
                    </motion.div>
                    
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.button>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.period}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags with stagger animation */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'hsl(var(--primary) / 0.2)',
                        }}
                        className="px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/30 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
