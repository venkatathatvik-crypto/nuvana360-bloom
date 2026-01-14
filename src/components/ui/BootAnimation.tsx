
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";

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
    const [currentStep, setCurrentStep] = useState(0); // 0: Logo, 1: Tagline
    const [isExiting, setIsExiting] = useState(false);
    const bootAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Step 1: Show Logo (starts at 0s)

        // Step 2: Show Tagline (starts at 2s)
        const taglineTimer = setTimeout(() => {
            setCurrentStep(1);
        }, 2000);

        // Step 3: Start Exit (starts at 6s)
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
            if (bootAudioRef.current) {
                bootAudioRef.current.pause();
                bootAudioRef.current = null;
            }
        }, 6000);

        // Initialize and play futuristic boot audio immediately
        bootAudioRef.current = new Audio('/boot-sound.mp3');
        bootAudioRef.current.volume = 0.1;
        bootAudioRef.current.play().catch(() => {
            console.log("Autoplay blocked by browser. Audio will play after user's first interaction elsewhere.");
        });

        return () => {
            clearTimeout(taglineTimer);
            clearTimeout(exitTimer);
            bootAudioRef.current?.pause();
        };
    }, []);

    return (
        <AnimatePresence mode="wait" onExitComplete={onComplete}>
            {!isExiting && (
                <motion.div
                    key="boot-container"
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020817]"
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
                    <div className="relative z-20 w-full max-w-4xl flex flex-col items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!currentStep ? (
                                <motion.div
                                    key="logo-step"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                    transition={{ duration: 0.8, ease: "circOut" }}
                                    className="flex items-baseline tracking-tighter"
                                >
                                    {/* The "N" */}
                                    <motion.h1
                                        className="text-5xl md:text-8xl font-black leading-none select-none font-['Montserrat']"
                                        style={{ color: "#00FF84" }}
                                    >
                                        N
                                    </motion.h1>

                                    {/* "uvanaCore" */}
                                    <div className="text-5xl md:text-8xl text-white font-['Montserrat'] flex items-center ml-1">
                                        <span className="font-bold">uvana</span>
                                        <span className="font-thin">Core</span>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="tagline-step"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                    className="text-center px-4"
                                >
                                    <div className="flex flex-col items-center text-center uppercase font-['Montserrat'] font-black">
                                        <p className="text-lg md:text-2xl text-white tracking-[0.4em] mb-1">
                                            <span className="text-[#FF9933]">INDIA</span>'S FIRST
                                        </p>
                                        <p className="text-[10px] md:text-base text-white/90 tracking-[0.2em] whitespace-nowrap">
                                            DIGITAL COGNITIVE LEARNING PLATFORM
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                            transition={{ duration: 5.5, ease: "easeInOut" }}
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
