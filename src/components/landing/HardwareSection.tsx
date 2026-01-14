import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Tablet, ShieldCheck, Lock, Building2, X, Cpu, Battery, HardDrive, Wifi, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

export function HardwareSection() {
    const [isSpecOpen, setIsSpecOpen] = useState(false);

    const features = [
        {
            icon: Building2,
            title: 'Institution Branded',
            description: 'Devices customized with your school\'s identity.'
        },
        {
            icon: Lock,
            title: 'Firmware Locked',
            description: 'Restricted access ensuring focus on education only.'
        },
        {
            icon: ShieldCheck,
            title: 'Controlled Environment',
            description: 'Safe, secure, and distraction-free learning.'
        }
    ];

    const specs = [
        { label: "Processor", value: "Octa-Core Processor", icon: Cpu },
        { label: "RAM", value: "4GB", icon: HardDrive },
        { label: "ROM", value: "64GB", icon: Lock },
        { label: "Display", value: "10.1\" IPS Display", icon: Monitor },
        { label: "Android Version", value: "Android 14", icon: Smartphone },
        { label: "Battery", value: "6000 Mah", icon: Battery },
    ];

    return (
        <section id="hardware" className="min-h-0 md:min-h-screen flex items-center py-2 md:py-24 bg-background relative overflow-hidden snap-start">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/10 skew-x-12 blur-3xl" />
            <PremiumDoodles />

            {/* Section Blenders */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-30">
                {/* Mobile-Only Layer Badge */}
                <div className="md:hidden flex justify-center mb-2">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
                        Hardware Layer
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <div className="hidden md:inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            Hardware Layer
                        </div>
                        <h2 className="text-lg md:text-5xl font-bold mb-3 text-white text-center md:text-left">
                            Nuvana Corebook
                        </h2>
                        <p className="hidden md:block text-xl text-muted-foreground mb-8 text-center md:text-left">
                            Purpose-built classroom devices designed to withstand the rigors of daily use while providing a strictly controlled learning environment.
                        </p>

                        <div className="space-y-2 md:space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-1 md:gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <feature.icon className="w-3 h-3 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white text-xs md:text-base mb-px md:mb-1">{feature.title}</h3>
                                        <p className="text-[10px] md:text-base text-gray-400 leading-tight">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <Button
                                className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/20"
                                size="lg"
                                onClick={() => setIsSpecOpen(true)}
                            >
                                View Specs
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        {/* Abstract Laptop Visualization */}
                        <div className="relative w-full max-w-[500px] aspect-video">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-xl blur-2xl" />
                            <div className="relative w-full h-full bg-slate-900 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden group">
                                {/* Screen Content */}
                                <div className="absolute inset-[2px] bg-slate-950 rounded-[10px] overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-primary/20 flex flex-col items-center justify-center">
                                        <Tablet size={64} className="text-primary/50 mb-4" />
                                        <div className="text-primary/50 font-mono text-sm uppercase tracking-widest">Nuvana360 Classroom OS</div>
                                        <div className="text-blue-200/50 font-mono text-xs mt-1">Status: Connected Nuvanet</div>
                                    </div>
                                    {/* Glare */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Spec Widget Modal inside a Portal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence onExitComplete={() => {
                    // Restore focus to main container after modal closes
                    const mainContainer = document.querySelector('main');
                    if (mainContainer instanceof HTMLElement) {
                        mainContainer.focus({ preventScroll: true });
                    }
                }}>
                    {isSpecOpen && (
                        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsSpecOpen(false)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2 }}
                                className="relative w-full max-w-lg bg-slate-900 border border-primary/20 rounded-2xl p-6 shadow-2xl"
                            >
                                <div className="flex justify-between items-center mb-6 text-center">
                                    <h3 className="text-2xl font-bold text-white">System Specifications</h3>
                                    <button
                                        onClick={() => setIsSpecOpen(false)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-slate-950 border border-white/5 hover:border-primary/40 transition-colors">
                                            <div className="flex items-center gap-3 mb-2">
                                                <spec.icon className="w-5 h-5 text-primary" />
                                                <span className="text-sm text-gray-400 font-medium">{spec.label}</span>
                                            </div>
                                            <div className="text-white font-semibold pl-8">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
