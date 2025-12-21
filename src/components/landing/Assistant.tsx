import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "bot" | "user"; content: string };

const KNOWLEDGE_BASE = [
    {
        keywords: ["what is", "nuvanacore", "about", "application", "platform"],
        answer: "Nuvanacore is a unified digital learning ecosystem built specifically for schools. It combines Hardware, OS, AI, and Internet (Nuvanet) into one cohesive experience. I am Bloom, your AI guide!"
    },
    {
        keywords: ["hardware", "corebook", "tablet", "device", "specs", "specification"],
        answer: "The Nuvana Corebook is a rugged, institution-branded device with an Octa-Core processor, 4GB RAM, 64GB storage, and a 6000mAh battery. It runs a locked Android 14 for a strictly educational, distraction-free environment."
    },
    {
        keywords: ["classroom os", "operating system", "os layer"],
        answer: "Classroom OS is the 'central nervous system' of the school. It provides specialized dashboards for Students (progress tracking), Teachers (workload reduction), and Admins (academic oversight)."
    },
    {
        keywords: ["ai", "systems", "drona", "archer", "intelligent"],
        answer: "We use Dual Intelligence: 'Drona' assists teachers with auto-grading and lesson planning, while 'Archer' provides students with targeted study plans and mentorship."
    },
    {
        keywords: ["internet", "nuvanet", "wifi", "connectivity", "managed"],
        answer: "Nuvanet is our managed internet layer. It's 'Education-Only' internet that requires zero school infrastructure—no complex wiring or local IT teams needed. Just instant deployment."
    },
    {
        keywords: ["pilot", "trial", "test"],
        answer: "We offer paid pilots to ensure high-quality support and measurable outcomes. It's the best way to see how Nuvanacore transforms your institution."
    },
    {
        keywords: ["pricing", "cost", "how much", "structured"],
        answer: "Pricing is structured based on the number of students and hardware units. For a specific quote, please use the Contact section or reach out to Shriniketan directly."
    },
    {
        keywords: ["support", "help", "warranty", "broken"],
        answer: "We offer dedicated support lines. Critical issues are resolved within 24 hours, and non-critical support within 48 hours."
    },
    {
        keywords: ["contact", "shriniketan", "email", "reach"],
        answer: "You can reach out via the Contact form at the bottom of the page. Shriniketan and our team will get back to you promptly!"
    },
    {
        keywords: ["who are you", "your name", "bloom"],
        answer: "I am Bloom, the dedicated AI assistant for the Nuvanacore ecosystem."
    }
];

const getBestReply = (userInput: string): string => {
    const t = userInput.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
        let score = 0;
        item.keywords.forEach(kw => {
            if (t.includes(kw)) score++;
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = item.answer;
        }
    }

    // If we have a decent match, return it
    if (highestScore > 0) return bestMatch!;

    // Fallbacks
    if (t.includes("hello") || t.includes("hi") || t.includes("hey"))
        return "Hello! I'm Bloom. How can I help you explore Nuvanacore today?";

    return "I'm Bloom, your expert on Nuvanacore. I can tell you about our Corebook hardware, Classroom OS, AI systems (Drona & Archer), or our managed internet (Nuvananet). What would you like to know?";
};

export const Assistant = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "bot",
            content: "Hi! I'm Bloom, your guide to Nuvanacore. Ask me about our Hardware, AI, or how we manage internet for schools!"
        }
    ]);
    const [input, setInput] = useState("");
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages, open]);

    const send = (text: string) => {
        if (!text.trim()) return;
        const userMsg: ChatMessage = { role: "user", content: text.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setTimeout(() => {
            const reply = getBestReply(text);
            setMessages((prev) => [...prev, { role: "bot", content: reply }]);
        }, 450);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        send(input);
    };

    const QuickButton = ({ label, value }: { label: string; value: string }) => (
        <button
            type="button"
            className="h-8 px-3 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors text-xs font-medium"
            onClick={() => send(value)}
        >
            {label}
        </button>
    );

    return (
        <>
            {/* Moved to the Bottom Right Corner */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                {open && (
                    <Card className="mb-4 w-[380px] max-w-[90vw] glass-strong border-primary/20 shadow-2xl animate-fade-up overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-primary/10 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.4)]">
                                    <Bot className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm">Bloom Assistant</div>
                                    <div className="text-[10px] text-primary uppercase tracking-wider font-bold">Online Guiding</div>
                                </div>
                            </div>
                            <Button className="h-8 w-8 text-gray-400 hover:text-white" variant="ghost" size="icon" onClick={() => setOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="p-4 bg-slate-950/40">
                            {/* Chat Container */}
                            <div ref={containerRef} className="h-[300px] overflow-y-auto rounded-xl border border-white/5 bg-black/40 p-4 mb-4 scrollbar-hide space-y-4">
                                {messages.map((m, i) => (
                                    <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                                        <div className={cn(
                                            "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                                            m.role === "user"
                                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                                : "bg-slate-900/80 text-gray-200 border border-white/5"
                                        )}>
                                            {m.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <QuickButton label="What's Nuvanacore?" value="What is Nuvanacore?" />
                                <QuickButton label="Corebook Specs" value="Tell me hardware specs" />
                                <QuickButton label="Nuvanet Internet" value="How is internet managed?" />
                                <QuickButton label="AI Systems" value="Drona and Archer AI" />
                            </div>

                            {/* Input Form */}
                            <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-slate-900/50 p-1 rounded-xl border border-white/5">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask Bloom about Nuvanacore..."
                                    className="bg-transparent border-none text-white h-10 focus-visible:ring-0 placeholder:text-gray-500"
                                />
                                <Button type="submit" size="icon" className="h-9 w-9 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 shrink-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </Card>
                )}

                {/* Toggle Button */}
                <Button
                    onClick={() => setOpen((v) => !v)}
                    className={cn(
                        "rounded-full h-14 px-6 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95",
                        open ? "bg-slate-900 text-white border border-white/10" : "bg-primary text-primary-foreground"
                    )}
                >
                    {open ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <div className="flex items-center gap-3">
                            <MessageCircle className="h-6 w-6" />
                            <span className="font-bold tracking-tight">Talk to Bloom</span>
                        </div>
                    )}
                </Button>
            </div>
        </>
    );
};

export default Assistant;