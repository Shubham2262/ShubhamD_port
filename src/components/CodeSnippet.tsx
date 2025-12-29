import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CodeSnippet = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateX = useTransform(scrollY, [0, 500], [15, 0]);
  const rotateY = useTransform(scrollY, [0, 500], [-10, 5]);

  const codeLines = [
    { indent: 0, content: 'class Innovator:', color: 'text-purple-400' },
    { indent: 1, content: 'def __init__(self):', color: 'text-cyan-400' },
    { indent: 2, content: 'self.passion = "AI & IoT"', color: 'text-foreground' },
    { indent: 2, content: 'self.location = "ISRO, India"', color: 'text-foreground' },
    { indent: 0, content: '', color: '' },
    { indent: 1, content: 'def solve_problems(self):', color: 'text-cyan-400' },
    { indent: 2, content: 'return "Impactful Solutions"', color: 'text-green-400' },
    { indent: 0, content: '', color: '' },
    { indent: 1, content: 'def innovate(self, idea):', color: 'text-cyan-400' },
    { indent: 2, content: 'while True:', color: 'text-purple-400' },
    { indent: 3, content: 'idea = self.research(idea)', color: 'text-foreground' },
    { indent: 3, content: 'if idea.is_ready():', color: 'text-purple-400' },
    { indent: 4, content: 'return self.deploy(idea)', color: 'text-green-400' },
  ];

  return (
    <motion.div
      ref={containerRef}
      style={{
        y,
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      initial={{ opacity: 0, x: 50, rotateX: 20, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateX: 15, rotateY: -10 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute -bottom-32 -right-8 z-50 w-[320px] md:w-[420px] transform-gpu"
    >
      <div className="card-glass rounded-xl overflow-hidden shadow-2xl shadow-primary/20 backdrop-blur-xl border border-primary/20">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/80">
          <div className="flex gap-1.5">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              whileHover={{ scale: 1.2 }}
            />
          </div>
          <span className="text-sm text-muted-foreground ml-2 font-mono">innovator.py</span>
        </div>

        {/* Code content with infinite scroll effect */}
        <div className="p-4 font-mono text-sm max-h-[280px] overflow-hidden relative">
          <motion.div
            animate={{ y: [0, -200] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...codeLines, ...codeLines].map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (index % codeLines.length) * 0.1 }}
                style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                className={`${line.color} leading-relaxed`}
              >
                {line.content || '\u00A0'}
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlay for smooth scroll effect */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
