import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code2, Brain, Database, Cpu, Sparkles } from 'lucide-react';

const skills = [
  { name: 'Python', level: 95, color: 'from-primary to-secondary' },
  { name: 'Machine Learning', level: 90, color: 'from-secondary to-accent' },
  { name: 'Deep Learning', level: 85, color: 'from-accent to-primary' },
  { name: 'IoT Systems', level: 90, color: 'from-primary to-accent' },
  { name: 'JavaScript', level: 80, color: 'from-secondary to-primary' },
  { name: 'SQL', level: 85, color: 'from-accent to-secondary' },
];

const coreSkills = [
  { icon: Brain, name: 'AI/ML', desc: 'Deep Learning, NLP' },
  { icon: Cpu, name: 'IoT', desc: 'Embedded Systems' },
  { icon: Code2, name: 'Development', desc: 'Web & Mobile Apps' },
  { icon: Database, name: 'Data', desc: 'Analysis & SQL' },
];

const achievements = [
  "Dean's Excellence in Research 2025",
  "Dean's Excellence in Innovation 2024",
  "1st Place - Smart India Hackathon",
];

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Floating decorative elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-secondary/5 blur-3xl pointer-events-none"
      />

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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Get to know me</span>
          </motion.div>
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate technologist with expertise in cutting-edge technologies
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Education - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 card-glass rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />

            <h3 className="text-2xl font-orbitron font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary w-6 h-6" />
              </div>
              Education
            </h3>

            <div className="space-y-4">
              <motion.div
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-1">B.Tech (Hons) Computer Science</h4>
                <p className="text-muted-foreground mb-1">IoT and Intelligent Systems</p>
                <p className="text-sm text-muted-foreground">Manipal University, Jaipur • 2022-2025</p>
              </motion.div>

              <motion.div
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-1">Diploma in Computer Engineering</h4>
                <p className="text-muted-foreground mb-1">2nd Rank in University</p>
                <p className="text-sm text-muted-foreground">Viva College, Maharashtra • 2019-2022</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements - Side card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 card-glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full" />

            <h3 className="text-2xl font-orbitron font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-secondary/10">
                <Award className="text-secondary w-6 h-6" />
              </div>
              Achievements
            </h3>

            <div className="space-y-3">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-sm font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Expertise - Grid of 4 */}
          {coreSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring" }}
              whileHover={{
                y: -10,
                rotateY: 10,
                boxShadow: '0 20px 40px hsl(var(--primary) / 0.2)'
              }}
              className="lg:col-span-3 card-glass rounded-2xl p-6 text-center group cursor-pointer perspective-1000"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{skill.name}</h4>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}

          {/* Technical Skills - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-12 card-glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-8 text-center">Technical Proficiency</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                    <motion.span
                      className="text-primary font-mono font-bold"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
