
import { motion } from 'framer-motion';
import { Bot, Sparkles, Brain, CheckCircle2, PenTool } from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

export function AISystemsSection() {
    return (
        <section className="min-h-screen flex items-center py-24 bg-background relative overflow-hidden snap-start">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-teal-500/10 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/10 blur-[100px]" />

            {/* Blenders */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

            <PremiumDoodles />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6">
                        AI Layer
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Dual Intelligence Systems
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Specialized AI assistants ensuring every teacher is supported
                        and every student is guided.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Drona - For Teachers */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative h-full p-8 md:p-12 rounded-3xl glass border border-emerald-500/30 bg-slate-900/60 overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                <PenTool size={200} className="animate-pulse" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                    <PenTool size={32} className="animate-pulse" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Drona by nuvana</h3>
                                <p className="text-emerald-200 mb-8 font-medium">AI Teaching Support</p>

                                <ul className="space-y-4">
                                    {[
                                        'Generates Question Papers',
                                        'Auto-Grades Answer Sheets',
                                        'Deep Performance Analysis',
                                        'Massive Workload Reduction',
                                        'Lesson & Assessment Support'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-300">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Archer - For Students */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative h-full p-8 md:p-12 rounded-3xl glass border border-blue-500/30 bg-slate-900/60 overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                <Brain size={200} className="animate-pulse" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <Brain size={32} className="animate-pulse" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Archer by nuvana</h3>
                                <p className="text-blue-200 mb-8 font-medium">AI Student Support</p>

                                <ul className="space-y-4">
                                    {[
                                        'Targeted Study Plans',
                                        'Life Skills & Mentorship',
                                        'Guided Revision Modules',
                                        'On-Demand Question Generation',
                                        'Safe & Guardrailed Interactions'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-300">
                                            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
