import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smoother spring for the main ring
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        let lastParticleTime = 0;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);

            // Add particles sparingly
            const now = Date.now();
            if (now - lastParticleTime > 40) { // Limit particle creation rate
                setParticles(prev => [
                    ...prev.slice(-15), // Keep max particles
                    { id: now, x: e.clientX, y: e.clientY }
                ]);
                lastParticleTime = now;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    // Cleanup old particles
    useEffect(() => {
        if (particles.length === 0) return;
        const interval = setInterval(() => {
            setParticles(prev => prev.filter(p => Date.now() - p.id < 1000));
        }, 100);
        return () => clearInterval(interval);
    }, [particles]);

    if (!isVisible) return null;

    return (
        <>
            {/* Particle Trail */}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed w-1.5 h-1.5 bg-primary/60 rounded-full pointer-events-none z-[9997]"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '0 0 10px currentColor'
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Main Dot - Brighter Glow */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                }}
            />

            {/* Outer Glow Ring - Stronger Neo Effect */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
                    borderWidth: isHovering ? '0px' : '2px',
                    borderColor: isHovering ? 'transparent' : 'rgba(6, 182, 212, 0.8)',
                    boxShadow: isHovering ? '0 0 40px rgba(6, 182, 212, 0.6)' : '0 0 20px rgba(6, 182, 212, 0.4)',
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
};

export default CustomCursor;
