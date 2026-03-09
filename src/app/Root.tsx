import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

export default function Root() {
  return (
    <div className="min-h-screen bg-[#1A2634] text-[#F3F4F6] font-sans selection:bg-[#FF8C9D] selection:text-white relative">
      {/* Creative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#FF8C9D]/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FFD166]/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-[#4A90E2]/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>

        {/* Global Footer */}
        <footer className="w-full py-20 px-6 md:px-12 border-t border-white/5 bg-[#1A2634]/40 backdrop-blur-lg mt-auto text-center relative z-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Thank <span className="text-[#FF8C9D]">You.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Thanks for stopping by and exploring my little corner of the internet. Have a wonderful day!
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center py-4 px-8 w-full border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-full text-xs font-medium text-white/40 tracking-wider uppercase gap-2 font-mono">
              <span>copyright © 2026</span>
              <span className="flex items-center gap-1">made with ❤️ by salsa rahman and tronton</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}