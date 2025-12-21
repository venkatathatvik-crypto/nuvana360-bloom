
import { motion } from 'framer-motion';
import { Wifi, Router, Radio, Check } from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

export function InfrastructureSection() {
    return (
        <section className="min-h-screen flex items-center py-24 relative overflow-hidden bg-slate-950 snap-start">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Blenders */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />

            <PremiumDoodles />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />
                            <div className="absolute inset-10 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-20 border border-blue-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-blue-500/10 rounded-full backdrop-blur-md flex items-center justify-center border border-blue-400/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                                    <Wifi size={48} className="text-blue-400" />
                                </div>
                            </div>

                            {/* Satellite nodes */}
                            {[0, 90, 180, 270].map((deg, i) => (
                                <div key={i} className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                    style={{ transform: `rotate(${deg}deg) translate(150px) rotate(-${deg}deg)` }} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                            Infrastructure Layer
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Nuvanet
                        </h2>
                        <h3 className="text-2xl font-light text-blue-200 mb-6">
                            Digital Learning. <span className="text-white font-semibold">Zero Infrastructure.</span>
                        </h3>
                        <p className="text-xl text-muted-foreground mb-8 text-gray-400">
                            One of a kind managed internet layer built specifically for schools. Forget complex wiring, servers, and IT teams.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: Radio, text: "No Wi-Fi Setup Required" },
                                { icon: Router, text: "Education-Only Internet" },
                                { icon: Check, text: "No Local IT Dependency" },
                                { icon: Check, text: "Instant Deployment" },
                            ].map((item, id) => (
                                <div key={id} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-blue-500/10">
                                    <item.icon className="text-blue-400 w-6 h-6" />
                                    <span className="text-gray-200 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
