import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Award, BookOpen, ExternalLink, Lightbulb, Globe } from 'lucide-react';

const patents = [
  {
    title: 'AI for Education',
    country: 'UK',
    flag: '🇬🇧',
    id: '6381805',
    description: 'AI-driven educational tools enhancing learning outcomes and personalized education.',
    type: 'Design Patent',
    link: 'https://www.registered-design.service.gov.uk/find/6381805',
  },
  {
    title: 'Health Monitoring Wearable Device',
    country: 'Australia',
    flag: '🇦🇺',
    id: '202416642',
    description: 'Compact wearable integrating advanced sensors for continuous vital health monitoring.',
    type: 'Design Patent',
    link: 'https://search.ipaustralia.gov.au/designs/search/details/202416642?s=326158fa-eca8-45d8-8063-2361e23ef89a',
  },
  {
    title: 'Drone-Based AET Estimation',
    country: 'India',
    flag: '🇮🇳',
    id: '202511055833',
    description: 'AI-integrated system for real-time evapotranspiration estimation using drones.',
    type: 'Published Patent',
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/',
  },
  {
    title: 'Satellite Security Framework',
    country: 'India',
    flag: '🇮🇳',
    id: '202411067962',
    description: 'Advanced security framework with AI-powered sensors for satellite communication.',
    type: 'Published Patent',
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/',
  },
  {
    title: 'Intelligent Robotic Farming',
    country: 'India',
    flag: '🇮🇳',
    id: '202411067963',
    description: 'AI-driven robotic farming system with advanced sensors and automation.',
    type: 'Published Patent',
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/',
  },
  {
    title: 'Blockchain IoT Healthcare',
    country: 'India',
    flag: '🇮🇳',
    id: '202411067403',
    description: 'Secure Healthcare Platform (SHPI) integrating blockchain and edge computing.',
    type: 'Published Patent',
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/',
  },
];

const publications = [
  {
    title: 'Enhancing Ship Detection with Modified DeepLabV3+',
    venue: 'IEEE',
    status: 'Published',
    description: 'Enhanced ship detection using modified DeepLabV3+ for satellite imagery.',
    icon: '🛳️',
    link: 'https://ieeexplore.ieee.org/document/10947816',
  },
  {
    title: 'Secure Offline Voice Command System for Satellite Command Systems',
    venue: 'DLR, ESA, TU Berlin Symposium',
    status: 'Under Proceeding',
    description: 'Secure offline voice command system using Wav2Vec2.0 and TDNN x-vectors.',
    icon: '🛰️',
    link: 'https://drive.google.com/file/d/17Ozfqf0YbgQO_ykMjqEuNOXMJ7gQkoTC/view?usp=share_link',
  },
  {
    title: 'Building Footprint Extraction with U-Net++',
    venue: 'IEEE',
    status: 'Published',
    description: 'U-Net++ model achieving 0.8199 mIoU for building extraction from satellite imagery.',
    icon: '🏢',
    link: 'https://ieeexplore.ieee.org/document/11134216',
  },
  {
    title: 'AI Space Debris Detection and Trajectory Prediction',
    venue: 'IEEE',
    status: 'Published',
    description: 'Real-time debris detection using SVM and LSTM for Bhartiya Antriksh Station safety.',
    icon: '🚀',
    link: 'https://ieeexplore.ieee.org/document/11171228',
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  return (
    <section id="research" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
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
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Innovation & Research</span>
          </motion.div>
          <h2 className="section-title">Research & Patents</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intellectual property and academic contributions
          </p>
        </motion.div>

        {/* Patents Section - Hexagonal Grid Inspired */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Award className="text-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-orbitron font-bold">Patents</h3>
              <p className="text-muted-foreground">
                <span className="text-primary font-bold text-2xl">{patents.length}</span> registered innovations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((patent, index) => (
              <motion.a
                key={index}
                href={patent.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 25px 50px hsl(var(--primary) / 0.2)'
                }}
                className="relative card-glass rounded-2xl p-6 overflow-hidden group cursor-pointer perspective-1000 block"
              >
                {/* Country flag background */}
                <div className="absolute -right-6 -top-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {patent.flag}
                </div>

                {/* Gradient accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted/50 flex items-center gap-2">
                      <Globe size={14} className="text-primary" />
                      {patent.country}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>

                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {patent.title}
                  </h4>

                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${patent.type === 'Design Patent'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                      }`}>
                      {patent.type}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">ID: {patent.id}</span>
                  </div>

                  <p className="text-sm text-muted-foreground">{patent.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Publications Section - Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20">
              <BookOpen className="text-secondary w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-orbitron font-bold">Publications</h3>
              <p className="text-muted-foreground">
                <span className="text-secondary font-bold text-2xl">{publications.length}</span> research papers
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Center icon */}
                  <motion.div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary items-center justify-center text-2xl shadow-lg shadow-primary/30 z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {pub.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full lg:w-[calc(50%-4rem)] card-glass rounded-2xl p-6 overflow-hidden group block`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="lg:hidden w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl flex-shrink-0">
                        {pub.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${pub.status === 'Published'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-amber-500/20 text-amber-400'
                            }`}>
                            {pub.status}
                          </span>
                          <span className="text-sm text-primary font-medium">{pub.venue}</span>
                        </div>

                        <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {pub.title}
                        </h4>

                        <p className="text-sm text-muted-foreground">{pub.description}</p>
                      </div>
                    </div>
                  </motion.a>

                  {/* Empty space for other side */}
                  <div className="hidden lg:block w-[calc(50%-4rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
