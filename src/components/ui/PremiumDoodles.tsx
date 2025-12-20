
import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    Atom,
    BookOpen,
    GraduationCap,
    Telescope,
    Globe2,
    Sparkles,
    Stars,
    Orbit,
    Zap,
    Microscope,
    Pencil
} from 'lucide-react';

const doodleIcons = [
    Rocket, Atom, BookOpen, GraduationCap, Telescope, Globe2,
    Sparkles, Stars, Orbit, Zap, Microscope, Pencil
];

export const PremiumDoodles: React.FC = () => {
    // Generate fixed positions on mount (conceptually)
    const doodles = Array.from({ length: 30 }).map((_, i) => {
        const Icon = doodleIcons[i % doodleIcons.length];
        const isStar = Icon === Stars || Icon === Sparkles;

        return {
            Icon,
            top: `${Math.random() * 94 + 3}%`,
            left: `${Math.random() * 94 + 3}%`,
            size: isStar ? Math.random() * 5 + 3 : Math.random() * 24 + 20, // Stars very small (3-8px)
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 15, // Slower duration for gentle "static" feel
            rotation: Math.random() * 30 - 15, // Subtle random initial rotation
            isStar
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {doodles.map((doodle, i) => (
                <motion.div
                    key={i}
                    // Static initial state - no fade in/out on scroll
                    initial={{ opacity: 0.8, y: 0 }}
                    animate={{
                        y: [0, -15, 0], // Very gentle float (reduced range)
                    }}
                    transition={{
                        duration: doodle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: doodle.delay,
                    }}
                    style={{
                        position: 'absolute',
                        top: doodle.top,
                        left: doodle.left,
                        rotate: doodle.rotation, // Fixed rotation
                    }}
                    className="flex justify-center items-center"
                >
                    <doodle.Icon
                        size={doodle.size}
                        strokeWidth={1.5}
                        className={
                            doodle.isStar
                                ? "text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,1)]" // Neon Blue (blue-600) glow for stars
                                : "text-slate-700/50 drop-shadow-none" // Subtle, non-glowing for others to reduce noise
                        }
                    />
                </motion.div>
            ))}

            {/* Deep Atmosphere - adjusted for deep neon blue themes */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>
    );
};
