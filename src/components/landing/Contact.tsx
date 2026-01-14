
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "075c3f3f-2b50-482f-8700-6532881b4d08",
          name, email, message,
          subject: `Nuvana Contact: ${name}`
        }),
      });

      if (response.ok) {
        toast({ title: "Message sent", description: "The Nuvanacore team will get back to you soon." });
        setName(""); setEmail(""); setMessage("");
      }
    } catch {
      toast({ title: "Error", description: "Failed to send message.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center relative py-8 md:py-24 bg-[#020617] snap-start">
      <div className="absolute inset-0 pointer-events-none">
        <PremiumDoodles />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-5xl font-bold text-white mb-2 md:mb-4">Get In Touch</h2>
          <p className="text-xs md:text-base text-slate-400">Ready to transform your school? Let's talk.</p>
        </div>

        <Card className="max-w-2xl mx-auto bg-slate-900/40 backdrop-blur-md border border-white/10 p-4 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="name" className="text-white/70 text-xs md:text-sm">Name</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} className="bg-slate-950/50 border-white/10 text-white h-8 md:h-10 text-xs md:text-base" />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-white/70 text-xs md:text-sm">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-slate-950/50 border-white/10 text-white h-8 md:h-10 text-xs md:text-base" />
              </div>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="message" className="text-white/70 text-xs md:text-sm">Message</Label>
              <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="min-h-[80px] md:min-h-[120px] bg-slate-950/50 border-white/10 text-white text-xs md:text-base" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground font-bold h-8 md:h-10 text-xs md:text-base">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;