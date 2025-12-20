
import { motion } from 'framer-motion';
import { Users, GraduationCap, School } from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

export function ClassroomOSSection() {
    const roles = [
        {
            id: 'student',
            title: 'For Students',
            icon: GraduationCap,
            features: ['Strength & Weakness Analysis', 'AI Explanations', 'Guided Revision', 'Progress Tracking'],
            color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        },
        {
            id: 'teacher',
            title: 'For Teachers',
            icon: Users,
            features: ['At-Risk Visibility', 'Automated Reporting', 'Lesson Tools', 'Performance Metrics'],
            color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        },
        {
            id: 'admin',
            title: 'For Admins',
            icon: School,
            features: ['Academic Visibility', 'Policy Control', 'Institution Oversight', 'Data Analytics'],
            color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-background to-blue-950/10 relative overflow-hidden">
            {/* Blenders */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent z-20 pointer-events-none" />

            <PremiumDoodles />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                        OS Layer
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Nuvana360 Classroom OS
                    </h2>
                    <div className="text-l text-muted-foreground max-w-2xl mx-auto flex flex-col items-center gap-2">
                        <p>The central nervous system of your school. One platform tailored for:</p>
                        <div className="flex gap-4 md:gap-8 justify-center mt-2">
                            <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" /> Students</span>
                            <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" /> Teachers</span>
                            <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" /> Admins</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-8 rounded-2xl glass border hover:scale-105 transition-transform duration-300 ${role.color.split(' ')[2]} bg-opacity-10 backdrop-blur-md`}
                        >
                            <div className={`p-4 rounded-xl inline-block mb-6 ${role.color.split(' ')[0]} ${role.color.split(' ')[1]}`}>
                                <role.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{role.title}</h3>
                            <ul className="space-y-3">
                                {role.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-gray-300">
                                        <span className={`w-1.5 h-1.5 rounded-full mr-3 ${role.color.split(' ')[1].replace('text', 'bg')}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
