import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, MapPin, Github, MessageCircle, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shubham2262v@gmail.com',
      href: 'mailto:shubham2262v@gmail.com',
      color: 'from-primary to-secondary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Shubham Dahatonde',
      href: 'https://www.linkedin.com/in/sd200304',
      color: 'from-secondary to-accent',
      bgColor: 'bg-secondary/10',
    },
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   value: 'shubham',
    //   href: 'https://github.com/shubham',
    //   color: 'from-accent to-primary',
    //   bgColor: 'bg-accent/10',
    // },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'from-primary to-accent',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6">
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
            <MessageCircle className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">Let's Connect</span>
          </motion.div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on innovative projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards - Creative Layout */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 50px hsl(var(--primary) / 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
                className="relative card-glass rounded-2xl p-6 overflow-hidden group cursor-pointer"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                {/* Background glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10 flex items-center gap-5">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className={`w-7 h-7`} style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      WebkitBackgroundClip: 'text',
                    }} />
                    <item.icon className="w-7 h-7 text-primary absolute" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>

                  <motion.div
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg">→</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="relative card-glass rounded-2xl p-10 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <Sparkles className="w-6 h-6 text-primary/30" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Sparkles className="w-6 h-6 text-secondary/30" />
            </div>

            <motion.span
              className="text-6xl text-primary/20 font-serif absolute top-2 left-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "
            </motion.span>

            <p className="text-muted-foreground italic text-xl leading-relaxed max-w-2xl mx-auto relative z-10">
              Enthusiastic and collaborative team player with a strong work ethic, eager to learn and
              contribute to a fast-paced tech-driven and research-intensive learning environment.
            </p>

            <motion.span
              className="text-6xl text-primary/20 font-serif absolute bottom-2 right-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
