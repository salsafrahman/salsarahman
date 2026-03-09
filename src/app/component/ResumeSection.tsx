import { motion } from 'motion/react';
import { Briefcase, GraduationCap, HeartHandshake, Code2 } from 'lucide-react';
import imgGoogleWorkspace from 'figma:asset/8b68e7ee9be92958aa11956828e100739a6731e5.png';
import imgCanva from 'figma:asset/f9402b77ddd13366b3d258df233d86cb09bb6ade.png';
import imgMSExcel from 'figma:asset/2c1f2b184836d28e44edf2d2ea03af4f374ead29.png';
import imgPowerPoint from 'figma:asset/0e3e549dcd151e09a89536a2c8447b585d5e65d5.png';
import imgWord from 'figma:asset/534bfd943d10ad250e42f78f81c37fb86e4afc2b.png';
import imgTrello from 'figma:asset/5a71d564de4c954236ad6f42b490f751dd4880de.png';
import imgSAP from 'figma:asset/ebe7a86d86e2c67e4fe07c96e0e2ccd8e530b898.png';
import imgSlack from 'figma:asset/87c39b39ec6b6bbfd43c830fec5a93ab2a438b6d.png';
import imgShapr3D from 'figma:asset/ff72daef029b8836302e8a6bff031f799f43d6f5.png';
import imgFramer from 'figma:asset/3fc05de18f18e54c98f6e33d4bba012862ab307d.png';
import imgSpline from 'figma:asset/b72ac5cab448e35289955dfda7a403f6b18976a4.png';
import imgCoohom from 'figma:asset/f4bc7f737fb8e3b571f76c37ca0e087596842e43.png';
import imgFusion360 from 'figma:asset/b9001c020323d9910fc98539f5928df5edb1da2f.png';
import imgZapier from 'figma:asset/dcd531791368d52160b65ffa08cb72a3c8467ea7.png';
import imgSketchUp from 'figma:asset/ff71a002b051a6301a7a9ed58dc3eaa3cf1435de.png';
import imgTypeform from 'figma:asset/cd9cb1fe509331bdf33e099eb27be71d5007d0a3.png';
import imgBlender from 'figma:asset/8cd7b7b96c566480f40d4d8525996015cf6a07cd.png';

export function ResumeSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const softwareSkills = [
    {
      name: 'Figma',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" className="w-8 h-8"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>
    },
    {
      name: 'Canva',
      icon: <img src={imgCanva} alt="Canva" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Workspace',
      icon: <img src={imgGoogleWorkspace} alt="Workspace" className="w-8 h-8 object-contain" />
    },
    {
      name: 'MS Excel',
      icon: <img src={imgMSExcel} alt="MS Excel" className="w-8 h-8 object-contain" />
    },
    {
      name: 'PowerPoint',
      icon: <img src={imgPowerPoint} alt="PowerPoint" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Word',
      icon: <img src={imgWord} alt="Word" className="w-8 h-8 object-contain" />
    },
    {
      name: 'SAP',
      icon: <img src={imgSAP} alt="SAP" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Trello',
      icon: <img src={imgTrello} alt="Trello" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Slack',
      icon: <img src={imgSlack} alt="Slack" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Shapr3D',
      icon: <img src={imgShapr3D} alt="Shapr3D" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Fusion 360',
      icon: <img src={imgFusion360} alt="Fusion 360" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Zapier',
      icon: <img src={imgZapier} alt="Zapier" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Framer',
      icon: <img src={imgFramer} alt="Framer" className="w-8 h-8 object-contain" />
    },
    {
      name: 'SketchUp',
      icon: <img src={imgSketchUp} alt="SketchUp" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Coohom',
      icon: <img src={imgCoohom} alt="Coohom" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Typeform',
      icon: <img src={imgTypeform} alt="Typeform" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Blender',
      icon: <img src={imgBlender} alt="Blender" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Spline',
      icon: <img src={imgSpline} alt="Spline" className="w-8 h-8 object-contain" />
    }
  ];

  return (
    <section id="resume" className="py-24 px-6 md:px-12 container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#E6E1DD] font-sans">
          My <span className="text-[#FF8C9D] italic font-light font-sans">Experience</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-[#1D2935]/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col h-full hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#FF8C9D]/10 rounded-xl">
              <GraduationCap className="w-8 h-8 text-[#FF8C9D]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">Education</h3>
          </div>
          <div className="space-y-6 flex-grow">
            <div>
              <h4 className="text-lg font-semibold text-white font-mono">Widyatama University</h4>
              <p className="text-[#FFD166] text-sm mb-2 font-mono">International Trade</p>
              <p className="text-white/40 text-sm mb-2 font-mono">2022 — Present</p>
              <p className="text-white/60 text-sm leading-relaxed mb-4 font-mono">Focusing on global market analysis, export-import procedures, and international economics.</p>
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1 font-mono">Campus Organization</p>
                <h5 className="text-white font-medium text-md mb-1 font-mono">International Study Center</h5>
                <ul className="space-y-1">
                  <li className="text-white/70 text-sm flex items-start gap-2 font-mono">
                    <span className="text-[#FF8C9D] mt-0.5">•</span>
                    Chair of the Multimedia Design and Content Creator Division
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-[#1D2935]/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col h-full hover:border-white/10 transition-colors md:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#FFD166]/10 rounded-xl">
              <Briefcase className="w-8 h-8 text-[#FFD166]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">Work Experience</h3>
          </div>
          <div className="space-y-6 flex-grow">
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-[#FFD166] rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">Intern</h4>
              <p className="text-white/60 text-sm font-mono">PT Putra Dwimitra Lestarindo</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2025</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">Creative Assistant</h4>
              <p className="text-white/60 text-sm font-mono">Animesme</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2024</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">Virtual Assistant</h4>
              <p className="text-white/60 text-sm font-mono">Freelance</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2021</p>
            </div>
          </div>
        </motion.div>

        {/* Volunteer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-[#1D2935]/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col h-full hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#A78BFA]/10 rounded-xl">
              <HeartHandshake className="w-8 h-8 text-[#A78BFA]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">Volunteer</h3>
          </div>
          <div className="space-y-6 flex-grow">
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-[#A78BFA] rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">Tzu Chi</h4>
              <p className="text-white/60 text-sm font-mono">Bandung</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2023 — Present</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">Organizer</h4>
              <p className="text-white/60 text-sm font-mono">Bandung Model United Nation</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2024</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">GameJam Organizer</h4>
              <p className="text-white/60 text-sm font-mono">Remote</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2023</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2"></div>
              <h4 className="text-lg font-semibold text-white font-mono">Greener is Cleaner</h4>
              <p className="text-white/60 text-sm font-mono">Seoul</p>
              <p className="text-white/40 text-sm mt-1 font-mono">2023</p>
            </div>
          </div>
        </motion.div>

        {/* Software Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-[#1D2935]/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col h-full hover:border-white/10 transition-colors md:col-span-2 lg:col-span-3"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#4ade80]/10 rounded-xl">
              <Code2 className="w-8 h-8 text-[#4ade80]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">Software Skills</h3>
          </div>
          <div className="flex-grow">
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
              {softwareSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 w-24 h-24">
                  <div className="mb-3">
                    {skill.icon}
                  </div>
                  <span className="text-white/80 text-xs text-center font-medium whitespace-nowrap font-mono">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}