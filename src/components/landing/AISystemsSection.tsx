
import { motion } from 'framer-motion';
import { Bot, Sparkles, Brain, CheckCircle2, PenTool } from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

export function AISystemsSection() {
    return (
        <section className="h-screen flex items-center py-12 bg-background relative overflow-hidden snap-start">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/10 blur-[100px]" />

            {/* Blenders */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

            <PremiumDoodles />

            <div className="container mx-auto px-4 scale-95 md:scale-100">
                <div className="text-center mb-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        AI Layer
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
                        Dual Intelligence Systems
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Specialized AI assistants ensuring every teacher is supported
                        and every student is guided.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                    {/* Drona - For Teachers */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative h-full p-6 md:p-8 rounded-3xl glass border border-primary/30 bg-slate-900/60 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 border border-primary/20">
                                    <PenTool size={24} className="animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Drona by nuvana</h3>
                                <p className="text-primary/70 mb-6 font-medium text-sm">AI Teaching Support</p>

                                <ul className="space-y-3">
                                    {[
                                        'Generates Question Papers',
                                        'Auto-Grades Answer Sheets',
                                        'Deep Performance Analysis',
                                        'Massive Workload Reduction',
                                        'Lesson & Assessment Support'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
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
                        <div className="relative h-full p-6 md:p-8 rounded-3xl glass border border-blue-500/30 bg-slate-900/60 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                                    <Brain size={24} className="animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Archer by nuvana</h3>
                                <p className="text-blue-200 mb-6 font-medium text-sm">AI Student Support</p>

                                <ul className="space-y-3">
                                    {[
                                        'Targeted Study Plans',
                                        'Life Skills & Mentorship',
                                        'Guided Revision Modules',
                                        'On-Demand Question Generation',
                                        'Safe & Guardrailed Interactions'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
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
