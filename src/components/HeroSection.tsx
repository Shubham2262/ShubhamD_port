import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import TypeWriter from './TypeWriter';
import CodeSnippet from './CodeSnippet';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const roles = ['Innovator', 'AI Enthusiast', 'Researcher', 'IoT Engineer', 'CS Engineer'];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium bg-primary/10">
                HELLO, I'M
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-orbitron font-bold mb-4"
            >
              <span className="text-gradient">Shubham</span>
              <br />
              <span className="text-foreground">Dahatonde</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl mb-6 font-rajdhani"
            >
              I am a <TypeWriter words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-xl max-w-2xl mb-8 leading-relaxed"
            >
              Results-driven professional with expertise in IoT, AI, and healthcare technologies.
              Specializing in patent-backed innovations and AI-integrated research for ISRO and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="/CV_Shubham_Dahatonde.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.a
                href="mailto:shubham2262v@gmail.com"
                className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sd200304"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center mb-56 md:mb-0"
          >
            {/* Creative Profile Border System */}
            <div className="relative z-10">
              {/* 1. Outer Dashed Ring - Slow Rotation */}
              <motion.div
                className="absolute -inset-8 rounded-full border border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* 2. Middle Arc Ring - Medium Counter-Rotation */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-transparent border-t-secondary border-r-secondary/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* 3. Inner Glowing Gradient Ring - Fast Rotation */}
              <div className="absolute inset-0 rounded-full p-[3px] overflow-hidden">
                <motion.div
                  className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                />
              </div>

              {/* 4. Orbiting Planet Effect */}
              <motion.div
                className="absolute -inset-12"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-4 h-4 rounded-full bg-secondary blur-[2px] shadow-[0_0_10px_currentColor] absolute top-1/2 -right-2" />
              </motion.div>

              {/* Background ambient glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10" />

              {/* Profile image */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-primary/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profilePhoto}
                  alt="Shubham Dahatonde"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>

            {/* Code snippet - positioned below profile */}
            <CodeSnippet />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
