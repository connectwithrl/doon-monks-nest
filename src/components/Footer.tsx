import { Mountain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-18 h-14 object-contain"
            />


            <div>
              <div className="font-display text-xl font-bold">The Doon Monks</div>
              <div className="text-sm text-muted-foreground">Student Hostel Dehradun</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} The Doon Monks. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              doonmonks.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
