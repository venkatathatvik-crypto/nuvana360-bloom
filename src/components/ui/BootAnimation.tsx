
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface BootAnimationProps {
    onComplete?: () => void;
}

// Tech/Schematic Background Elements
const SchematicBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Navy/Blue Theme Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#020817] to-slate-900" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.2]" />

        {/* Rotating Cyber Circles */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        />
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-emerald-500/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        />

        {/* Floating Particles/Nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                initial={{
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
                }}
                animate={{
                    y: [0, -100],
                    opacity: [0, 0.5, 0]
                }}
                transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 2
                }}
            />
        ))}
    </div>
);

export function BootAnimation({ onComplete }: BootAnimationProps) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Sequence: ~2s build up + ~2s hold time = 4s total
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait" onExitComplete={onComplete}>
            {!isExiting && (
                <motion.div
                    key="boot-container"
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020817]" // Nuvana Navy
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <SchematicBackground />

                    {/* Cinematic Light Sweep (Netflix Style) */}
                    <motion.div
                        initial={{ left: "-100%", opacity: 0 }}
                        animate={{ left: "150%", opacity: [0, 0.4, 0] }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#00FF84]/30 to-transparent skew-x-[-20deg] blur-2xl z-10"
                    />

                    {/* Content Container */}
                    <div className="relative z-20 flex items-baseline tracking-tighter">

                        {/* The "N" - Reverted to Standard Bold Text */}
                        <motion.div
                            initial={{ scale: 3, opacity: 0, filter: "blur(30px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <h1
                                className="text-5xl md:text-7xl font-black leading-none select-none font-['Montserrat']"
                                style={{
                                    color: "#00FF84"
                                }}
                            >
                                N
                            </h1>
                            {/* Internal shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 mix-blend-overlay"
                                animate={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {/* "uvanaCore" text slide-out */}
                        <motion.div
                            initial={{ width: 0, opacity: 0, x: -20 }}
                            animate={{ width: "auto", opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            <div className="flex ml-1">
                                <div className="text-5xl md:text-7xl text-white tracking-widest font-['Montserrat'] flex items-center">
                                    <span className="font-bold">uvana</span>
                                    <span className="font-thin">core</span>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Loading Bar - Authentic System Boot Feel */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-3 bg-slate-800 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.div
                            className="h-full bg-[#00FF84]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
