import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PremiumDoodles } from "@/components/ui/PremiumDoodles";

export const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (!message.trim() || message.trim().length < 10) next.message = "Please include at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate sending. Replace with your API call.
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! Our team will get back to you soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-[#020617] overflow-hidden">
      {/* Top Transition Blender */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Space Background & Green Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/05 via-slate-950/40 to-slate-950" />
        {/* Custom Green Stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-500/20 blur-[1px] animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
        <PremiumDoodles />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Contact Us</h2>
          <p className="text-lg text-emerald-100/60">Have questions? Send us a message and we'll help you get started with Bloom.</p>
        </div>
        <Card className="mx-auto max-w-3xl bg-slate-900/60 backdrop-blur-xl border-emerald-500/20 shadow-2xl shadow-emerald-900/10 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-emerald-50">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-950/50 border-emerald-500/20 text-emerald-50 placeholder:text-emerald-500/30 focus-visible:ring-emerald-500/50"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-emerald-50">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-950/50 border-emerald-500/20 text-emerald-50 placeholder:text-emerald-500/30 focus-visible:ring-emerald-500/50"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-emerald-50">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your goals, timelines, or any questions you have."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[140px] bg-slate-950/50 border-emerald-500/20 text-emerald-50 placeholder:text-emerald-500/30 focus-visible:ring-emerald-500/50"
              />
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button type="submit" disabled={loading} className="bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/20">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;