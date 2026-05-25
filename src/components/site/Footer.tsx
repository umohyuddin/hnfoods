import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-indigo flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                Cognetic<span className="text-gradient-blue">AI</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Scale Your Engineering. Without the Overhead. Managed developers, AI automation, and full-stack delivery for global teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
            <h4 className="text-sm font-semibold mt-6 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@cogneticai.io</li>
              <li>+92-309-9440005</li>
              <li>Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 CogneticAI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
