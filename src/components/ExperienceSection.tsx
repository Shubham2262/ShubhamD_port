import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Rocket, Users } from 'lucide-react';

const experiences = [
  {
    title: 'Researcher',
    company: 'Indian Space Research Organization (ISRO)',
    location: 'India',
    period: 'Jan 2025 – June 2025',
    description: [
      'Developed Securing Satellite Command Systems using offline voice recognition with authentication to enhance command security.',
      'Built an Automated Minutes-of-Meeting (MOM) System with speaker identification and live transcription for internal meetings.',
    ],
    current: true,
    icon: Rocket,
  },
  {
    title: 'Scientist Intern',
    company: 'Indian Space Research Organization (ISRO)',
    location: 'India',
    period: 'Dec 2023 - Jan 2024',
    description: [
      'Gained hands-on experience in Unix-based systems and security protocols, focusing on dynamic linking of remote system patches for mission-critical applications.',
      'Led a team of interns in troubleshooting complex Unix operations, showcasing effective problem-solving and adaptive strategies under pressure.',
    ],
    current: false,
    icon: Users,
  },
];

const positions = [
  {
    title: 'Student Convener',
    organization: 'ICICV-24 International Conference',
    period: 'Feb 2024 - Apr 2024',
    desc: 'Led the organization of Springer-sponsored international conference',
    color: 'from-primary to-secondary',
  },
  {
    title: 'Technical Secretary',
    organization: 'Turing Sapiens Club, MUJ',
    period: 'June 2023 - May 2024',
    desc: 'Organized workshops and technical events',
    color: 'from-secondary to-accent',
  },
  {
    title: 'Head of Projects & Research',
    organization: 'MUJ ACM SigAI Chapter',
    period: 'Dec 2022 - May 2023',
    desc: 'Led stress detection system development using ECG signals',
    color: 'from-accent to-primary',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-2/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-secondary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">Career Journey</span>
          </motion.div>
          <h2 className="section-title">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and leadership roles
          </p>
        </motion.div>

        {/* Experience Cards - Horizontal scroll on mobile, vertical on desktop */}
        <div className="relative mb-20">
          {/* Animated timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, type: "spring" }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                >
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="card-glass p-8 rounded-2xl relative overflow-hidden group">
                    {/* Gradient accent */}
                    <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary`} />

                    {exp.current && (
                      <motion.span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-4"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Current Role
                      </motion.span>
                    )}

                    <h3 className="text-2xl font-orbitron font-bold mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <h4 className="text-primary font-semibold text-lg mb-4">{exp.company}</h4>

                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className={`text-muted-foreground text-sm flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility - Creative Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-orbitron font-bold flex items-center justify-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <Users className="text-primary w-6 h-6" />
            </div>
            Leadership Roles
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {positions.map((pos, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, type: "spring" }}
              whileHover={{
                y: -15,
                rotateY: 5,
                boxShadow: '0 30px 60px hsl(var(--primary) / 0.2)'
              }}
              className="relative card-glass rounded-2xl p-6 overflow-hidden group cursor-pointer"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pos.color}`} />

              {/* Number indicator */}
              <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-br ${pos.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

              <div className="relative z-10">
                <span className="text-6xl font-orbitron font-bold text-muted/20 absolute -top-2 -left-2">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="pt-8">
                  <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{pos.title}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{pos.organization}</p>
                  <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
                    <Calendar size={12} />
                    {pos.period}
                  </p>
                  <p className="text-sm text-muted-foreground">{pos.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
