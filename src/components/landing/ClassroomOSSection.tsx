
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
            features: ['At-Risk Student Visibility', 'Automated Reporting', 'Lesson Tools', 'Performance Metrics'],
            color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        },
        {
            id: 'admin',
            title: 'For Admins',
            icon: School,
            features: ['Academic Performance Visibility', 'Policy Control', 'Institution Oversight', 'Data Analytics'],
            color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
        }
    ];

    return (
        <section id="classroom-os" className="min-h-screen flex items-center py-8 md:py-24 bg-gradient-to-b from-background to-blue-950/10 relative overflow-hidden snap-start">
            {/* Blenders */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent z-20 pointer-events-none" />

            <PremiumDoodles />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8 md:mb-16">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] md:text-sm font-medium mb-2 md:mb-6">
                        OS Layer
                    </div>
                    <h2 className="text-lg md:text-5xl font-bold mb-3 md:mb-6 text-white text-center">
                        Nuvana360 Classroom OS
                    </h2>
                    <div className="text-center text-xs md:text-xl text-muted-foreground max-w-2xl mx-auto flex flex-col items-center gap-1">
                        <p>The central nervous system of your school.</p>
                        <p>One platform tailored for:</p>
                        <div className="flex gap-2 md:gap-8 justify-center mt-2 md:mt-4 text-[10px] md:text-base">
                            <span className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-400 mr-1.5 md:mr-2" /> Students</span>
                            <span className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-400 mr-1.5 md:mr-2" /> Teachers</span>
                            <span className="flex items-center"><span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-purple-400 mr-1.5 md:mr-2" /> Admins</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-4 md:p-8 rounded-2xl glass border hover:scale-105 transition-transform duration-300 ${role.color.split(' ')[2]} bg-opacity-10 backdrop-blur-md`}
                        >
                            <div className={`p-2.5 md:p-4 rounded-xl inline-block mb-3 md:mb-6 ${role.color.split(' ')[0]} ${role.color.split(' ')[1]}`}>
                                <role.icon className="w-5 h-5 md:w-8 md:h-8" />
                            </div>
                            <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4">{role.title}</h3>
                            <ul className="space-y-1.5 md:space-y-3">
                                {role.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-[10px] md:text-base text-gray-300">
                                        <span className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full mr-2 md:mr-3 ${role.color.split(' ')[1].replace('text', 'bg')}`} />
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
