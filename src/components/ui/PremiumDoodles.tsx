
import React, { useMemo } from 'react';
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
    // Generate fewer doodles for much better performance
    const doodles = useMemo(() => Array.from({ length: 10 }).map((_, i) => {
        const Icon = doodleIcons[i % doodleIcons.length];
        const isStar = Icon === Stars || Icon === Sparkles;

        return {
            Icon,
            top: `${(i * 13) % 94 + 3}%`,
            left: `${(i * 17) % 94 + 3}%`,
            size: isStar ? 5 : 22,
            delay: i * 0.5,
            duration: 20 + (i % 5),
            rotation: (i * 10) - 15,
            isStar
        };
    }), []);

    return (
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {doodles.map((doodle, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -10, 0],
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
                        rotate: doodle.rotation,
                    }}
                    className="flex justify-center items-center"
                >
                    <doodle.Icon
                        size={doodle.size}
                        strokeWidth={1.5}
                        className={
                            doodle.isStar
                                ? "text-blue-500/40 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                                : "text-slate-700/30"
                        }
                    />
                </motion.div>
            ))}

            {/* Optimized Atmosphere */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-900/5 rounded-full blur-[100px]" />
        </div>
    );
};
