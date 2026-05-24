import { personalInfo } from "../data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/50 mt-12 bg-slate-950/50 backdrop-blur-sm relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-mono text-slate-500">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <p className="text-xs text-slate-700 mt-2">
          Building the future, one line at a time.
        </p>
      </div>
    </footer>
  );
}
