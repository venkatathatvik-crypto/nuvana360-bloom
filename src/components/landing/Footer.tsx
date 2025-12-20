export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-['Montserrat'] flex items-baseline tracking-tight">
              <span className="text-emerald-500 font-black">N</span>
              <span className="text-white font-bold">uvana</span>
              <span className="text-white font-thin">core</span>
            </span>
          </div>



          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Nuvanacore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
