import { motion } from 'motion/react';
import { BookOpen, Sparkles, Languages, Globe } from 'lucide-react';
import imgProfile from 'figma:asset/dbb2d5191948c564389a98d0cc54d48e7e392d24.png';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 container mx-auto relative" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      {/* Decorative scattered dots in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[5%] w-2 h-2 rounded-full bg-[#FF8C9D]/50 shadow-[0_0_10px_#FF8C9D]"></div>
        <div className="absolute top-[40%] right-[10%] w-3 h-3 rounded-full bg-[#FFD166]/50 shadow-[0_0_15px_#FFD166]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#60a5fa]/50 shadow-[0_0_10px_#60a5fa]"></div>
        <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/30 shadow-[0_0_8px_white]"></div>
        <div className="absolute top-[10%] right-[30%] w-2 h-2 rounded-full bg-[#A78BFA]/50 shadow-[0_0_10px_#A78BFA]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Profile Image & Contact Combo */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative max-w-md mx-auto lg:mx-0 w-full rounded-[3rem] overflow-hidden bg-[#7F9BA6] shadow-2xl border border-white/10"
        >
          <img 
            src={imgProfile} 
            alt="Salsa Rahman and Tronton" 
            className="relative z-10 w-full h-auto drop-shadow-2xl translate-y-8"
          />

          <div className="relative z-20 bg-[#252323] p-8 mt-auto text-[#E6E1DD]">
            <h3 className="text-4xl font-bold mb-6 tracking-wide lowercase font-sans">contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                <span className="text-xl font-medium tracking-wide">Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="currentColor"/>
                </svg>
                <a href="mailto:me@salsarahman.space" className="text-xl font-medium tracking-wide hover:text-[#FF8C9D] transition-colors">me@salsarahman.space</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight font-sans">
              Curiosity-driven, <span className="text-[#FF8C9D] italic font-light font-sans">hybrid</span> learner.
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              I’m a bit of a hybrid—part international trade student, part creative learner, and full-time believer. I live in the sweet spot between the analytical and the imaginative. My life is basically one big experiment in YOLO! I spend my days figuring out every single "why" and my nights diving into the "how".
            </p>
            <p className="text-lg text-white/70 leading-relaxed bg-[#1D2935] p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#FFD166] shadow-lg">
              Meet my spiky silent sweet potato, <span className="font-bold text-white">Tronton</span> who has zero opinions on global trade, he just loves his worms. 🦔
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-[#1D2935]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/5 hover:border-white/10 transition-colors">
              <BookOpen className="w-8 h-8 text-[#FF8C9D] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 font-sans">Trade & Logic</h3>
              <p className="text-white/60 text-sm">Analyzing markets, understanding the "why", and seeing the big global picture.</p>
            </div>
            <div className="bg-[#1D2935]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/5 hover:border-white/10 transition-colors">
              <Sparkles className="w-8 h-8 text-[#FFD166] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 font-sans">Creativity</h3>
              <p className="text-white/60 text-sm">Diving into the "how" through design, code, and imaginative experiments.</p>
            </div>
            <div className="bg-[#1D2935]/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/5 hover:border-white/10 transition-all duration-300 sm:col-span-2 relative overflow-hidden group">
              <div className="absolute top-0 right-1/2 w-64 h-64 bg-[#60a5fa]/5 rounded-full blur-3xl -mr-32 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-[#34d399]/5 rounded-full blur-3xl -ml-32 -mb-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <Languages className="w-8 h-8 text-[#60a5fa]" />
                <h3 className="text-2xl font-bold text-white font-sans">Languages</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative z-10">
                
                {/* Column 1 */}
                <div className="space-y-6 md:pr-10 md:border-r border-white/10">
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">Indonesian</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.2 }} className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">Sundanese</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.3 }} className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">English</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.4 }} className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">Norwegian</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6 md:pl-10">
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">Frisian</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.4 }} className="bg-gradient-to-r from-[#34d399] to-[#6ee7b7] h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">Polish</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '25%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-gradient-to-r from-[#34d399] to-[#6ee7b7] h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="block text-white font-medium text-sm">Mandarin</span>
                      </div>
                      <div className="w-full bg-[#1A2634] rounded-full h-1.5 overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '25%' }} transition={{ duration: 1, delay: 0.6 }} className="bg-gradient-to-r from-[#34d399] to-[#6ee7b7] h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
