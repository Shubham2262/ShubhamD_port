import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden mt-20">
      {/* Decorative Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                <span className="font-orbitron font-bold text-xl text-primary">SD</span>
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  Shubham Dahatonde
                </h3>
                <p className="text-sm text-primary/80 font-mono tracking-wider">INNOVATOR & RESEARCHER</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-md leading-relaxed"
            >
              Crafting intelligent solutions at the intersection of AI, IoT, and Space Tech.
              Always open to discussing new ideas and collaborative research opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com/in/sd200304" },
                { icon: Mail, href: "mailto:shubham2262v@gmail.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="font-orbitron font-bold text-lg text-foreground">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Research', 'Contact'].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3: Status & Info */}
          <div className="space-y-6">
            <h4 className="font-orbitron font-bold text-lg text-foreground">System Status</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-mono">LOCATION</span>
                  <span className="text-xs font-bold text-primary">INDIA (IST)</span>
                </div>
                <div className="text-2xl font-mono font-bold text-foreground tracking-widest">
                  {time}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Open to Work</span>
                </div>
                <span className="w-px h-3 bg-border" />
                <div className="flex items-center gap-1.5">
                  <Shield size={12} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            <span>© {currentYear} Shubham Dahatonde.</span>
            <span className="hidden md:inline text-border">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> in India
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span>All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors text-sm font-medium text-primary"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
