import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, MapPin, 
  Terminal, Cpu, Monitor, Zap, GraduationCap, 
  ChevronRight, Send, CheckCircle, XCircle, Download,
  Database, Smartphone, Server, Briefcase, Code
} from 'lucide-react';

// --- DATA STRUCTURES ---

const softwareProjects = [
  {
    title: "VaidyaMithra - Hospital Management",
    icon: Database,
    tags: ["React", "Firebase", "LLMs", "Vercel"],
    desc: "A complete Hospital Management System featuring an AI-powered health assistant that analyzes symptoms. Implemented secure cloud architecture and real-time status updates.",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "NAMMA RAITHA - Agri-Marketplace",
    icon: Server,
    tags: ["Full-Stack", "Leaflet.js", "SQL"],
    desc: "Hyper-Local Agri-Marketplace connecting farmers and buyers. Integrated dynamic CRUD, geolocation search, and automated stock updates with multi-language support.",
    images: [
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Smart Waste Management",
    icon: Smartphone,
    tags: ["React Native", "Geo-Location", "IoT"],
    desc: "Intelligent Waste Collection Platform with Live Tracking. Geo-enabled urban waste management app featuring role-based control and real-time fleet monitoring.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const hardwareProjects = [
  {
    title: "Solar Enerlytics",
    icon: Zap,
    tags: ["Hardware", "Supabase", "React"],
    desc: "Grid integrated PV System with Weather Forecast Analysis. Hardware-integrated production grade system managed via a full-stack Vercel hosted dashboard and mobile app.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-1e97d5259d81?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "32-bit ALU Design",
    icon: Cpu,
    tags: ["VLSI", "System Verilog", "Vedic Math"],
    desc: "Formal and Functional Verification of a high-performance 32-bit ALU using a Vedic multiplier (Urdhva-Tiryagbhyam), ensuring absolute accuracy and reliability.",
    images: [
      "https://images.unsplash.com/photo-1518932945647-7a3c96922221?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Robotic Arm for Rovers",
    icon: Terminal,
    tags: ["Embedded Control", "Robotics"],
    desc: "Designed and implemented a robotic arm system with precise control mechanisms suitable for planetary exploration and object handling.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const SectionLabel = ({ text, delay = "0s", icon: Icon }) => (
  <div className="flex items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: delay, animationFillMode: 'both' }}>
    <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-600 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-indigo-400" />} {text}
    </h2>
    <div className="h-[1px] bg-gradient-to-r from-zinc-800 to-transparent flex-grow"></div>
  </div>
);

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setImgIdx((prev) => (prev + 1) % project.images.length);
      }, 2500); 
    } else {
      setImgIdx(0); 
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl cursor-pointer group shadow-lg min-h-[350px] md:min-h-[400px]
        ${isHovered ? 'md:flex-[2.5] border-indigo-500/50 shadow-[0_8px_40px_-12px_rgba(99,102,241,0.2)]' : 'md:flex-1 hover:border-zinc-500/50'}`
      }
    >
      <div className="absolute inset-0 z-0">
        {project.images.map((img, i) => (
          <img 
            key={i}
            src={img} 
            alt="Project"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === imgIdx ? (isHovered ? 'opacity-40' : 'opacity-10') : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-60 bg-[#050505]/50'}`} />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
        <div className={`transition-all duration-700 transform ${isHovered ? 'translate-y-0 opacity-100' : 'md:translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-xl border transition-colors duration-500 ${isHovered ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400' : 'bg-zinc-800/80 border-zinc-700 text-zinc-400'}`}>
              <project.icon size={20} />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className={`text-[10px] font-mono font-semibold px-2 py-1 rounded-md border transition-colors duration-500 ${isHovered ? 'bg-indigo-900/30 text-indigo-200 border-indigo-500/30' : 'bg-zinc-800/80 text-zinc-400 border-zinc-700'}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <h3 className={`font-bold transition-all duration-500 mb-3 ${isHovered ? 'text-2xl text-white' : 'text-xl text-zinc-300 md:truncate'}`}>
            {project.title}
          </h3>
          
          <div className={`grid transition-all duration-700 ease-in-out ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 md:opacity-0 opacity-100 grid-rows-[1fr] md:grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectRow = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[400px]">
      {projects.map(p => (
        <ProjectCard 
          key={p.title} project={p} isHovered={hoveredId === p.title}
          onMouseEnter={() => setHoveredId(p.title)} onMouseLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" });

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // FETCHING SECURE ENVIRONMENT VARIABLES FROM VERCEL
    // NOTE: Uncomment the three lines below when deploying to Vercel.
    // const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    // const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    // const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    const serviceId = 'service_bvptl1g'; 
    const templateId = 'template_q9d2t3t';
    const publicKey = 'jMeHyyiKaYCLnBG4o';

    // Safety check - helps debug if .env file isn't loaded properly
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS Environment variables are missing! Make sure your .env file is loaded and the dev server was restarted.");
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId, 
          template_id: templateId, 
          user_id: publicKey,
          template_params: { 
            from_name: formData.name, 
            from_email: formData.email, 
            reply_to: formData.email,
            message: formData.message 
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else throw new Error('Failed to send');
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills & Ed' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative pb-[40px] custom-scrollbar">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg py-4 px-6 h-[72px]">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
          <a href="#home" className="flex items-center gap-3 cursor-pointer group focus:outline-none">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform">
              D
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 tracking-tight group-hover:text-white transition-colors">
              Dilip Kumar A N
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors relative group py-1 focus:outline-none
                  ${activeSection === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'}
                `}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-400 transition-all duration-300 rounded-full
                  ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full opacity-50'}
                `} />
              </a>
            ))}
            
            <a 
              href="#contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border focus:outline-none ${activeSection === 'contact' ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20'}`}
            >
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 w-full pt-[72px] flex flex-col items-center">
        
        <section id="home" className="w-full max-w-6xl mx-auto px-6 pt-12 pb-20 scroll-mt-[72px]">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-emerald-500/30 backdrop-blur-md w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium tracking-wide">Available for Software & Embedded Roles</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight">
                DILIP KUMAR A N
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-indigo-400 tracking-tight">
                Electronics and Embedded Systems Engineer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed pt-2">
              Engineering graduate with industry experience, seeking a challenging role to apply technical and problem-solving skills while growing in the field of electronics, embedded systems, and software development.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-6">
              <a href="/Dilip_Kumar_CV.pdf" download="Dilip_Kumar_CV.pdf" className="h-12 px-8 rounded-xl bg-indigo-500 text-white font-bold flex items-center gap-2 hover:bg-indigo-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <Download size={18} /> Download CV
              </a>
              <a href="#contact" className="h-12 px-8 rounded-xl bg-zinc-100 text-zinc-950 font-bold flex items-center gap-2 hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Mail size={18} /> Get in Touch
              </a>
              <a href="https://github.com/dilipgowdaan" target="_blank" rel="noreferrer" className="h-12 px-8 rounded-xl bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-zinc-100 font-medium flex items-center gap-2 hover:bg-zinc-800 transition-all">
                <Github size={18} /> GitHub Profile
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full max-w-5xl mx-auto px-6 py-16 scroll-mt-[72px]">
          <div className="animate-fade-in-up w-full">
            <SectionLabel text="Professional Experience" icon={Briefcase} delay="0.1s" />
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Monitor size={150} className="text-indigo-500" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Technical Support Engineer</h3>
                  <p className="text-xl text-indigo-400 font-medium">URSC / ISRO <span className="text-zinc-500 text-sm ml-2">(Sree Venkateshwara)</span></p>
                </div>
                <span className="px-4 py-1.5 text-sm font-medium rounded-lg border bg-zinc-800/80 border-zinc-700/50 text-zinc-300 w-fit backdrop-blur-sm">Mar 2022 — Dec 2023</span>
              </div>
              <ul className="relative z-10 space-y-5 max-w-4xl text-zinc-400 text-lg">
                <li className="flex items-start"><ChevronRight size={20} className="text-indigo-400 mr-4 mt-1 shrink-0" /> Diagnosed and resolved system-level hardware and software issues across desktops and networks.</li>
                <li className="flex items-start"><ChevronRight size={20} className="text-indigo-400 mr-4 mt-1 shrink-0" /> Automated troubleshooting workflows and improved overall system reliability.</li>
                <li className="flex items-start"><ChevronRight size={20} className="text-indigo-400 mr-4 mt-1 shrink-0" /> Worked extensively with low-level hardware and software interaction, debugging OS and drivers.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-16 space-y-16 scroll-mt-[72px]">
          <div>
            <SectionLabel text="Software & Full-Stack Projects" icon={Code} delay="0.1s" />
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ProjectRow projects={softwareProjects} />
            </div>
          </div>

          <div>
            <SectionLabel text="Hardware & Embedded Systems" icon={Cpu} delay="0.3s" />
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <ProjectRow projects={hardwareProjects} />
            </div>
          </div>
        </section>

        <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-16 space-y-16 scroll-mt-[72px]">
          <div className="animate-fade-in-up">
            <SectionLabel text="Technical Competencies" icon={Terminal} delay="0.1s" />
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-widest mb-5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-indigo-400"><Code size={16}/></div> Programming & Web
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['React', 'React Native', 'C', 'Python', 'HTML', 'SQL'].map(s => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium rounded-md border bg-zinc-900/80 border-zinc-700/80 text-zinc-300">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-widest mb-5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-cyan-400"><Server size={16}/></div> Software & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Firebase', 'Vercel', 'Supabase', 'Flask', 'Expo', 'VS Code', 'Arduino IDE', 'MATLAB'].map(s => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium rounded-md border bg-zinc-900/80 border-zinc-700/80 text-zinc-300">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-widest mb-5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-emerald-400"><Cpu size={16}/></div> Hardware Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Verilog', 'System Verilog', 'FPGA Boards', 'Raspberry Pi', 'Arduino Uno', 'ESP8266/ESP32'].map(s => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium rounded-md border bg-zinc-900/80 border-zinc-700/80 text-zinc-300">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SectionLabel text="Education" icon={GraduationCap} />
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 md:p-10 shadow-2xl space-y-2">
              {[
                { deg: "B.E. in Electronics and Communication", inst: "RV College Of Engineering, Bengaluru", year: "2026", score: "7.86 CGPA" },
                { deg: "Diploma in Electronics and Communication", inst: "Govt. Polytechnic, Immadihalli", year: "2021", score: "83%" },
                { deg: "PUC in Science", inst: "Sahyadri PU College, Kolar", year: "2019", score: "77.6%" },
                { deg: "SSLC", inst: "Green Valley Public School", year: "2017", score: "90.26%" }
              ].map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-zinc-800/50 transition-colors group">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{edu.deg}</h3>
                    <p className="text-zinc-400 mt-1">{edu.inst}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-6">
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-700/50 text-zinc-300 font-mono text-sm shadow-inner group-hover:border-zinc-500/50 transition-colors">
                      {edu.score}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm w-12 text-right">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full max-w-3xl mx-auto px-6 py-16 scroll-mt-[72px]">
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Mail size={200} className="text-indigo-500" />
            </div>
            <div className="relative z-10 mb-10">
              <h1 className="text-4xl font-bold text-white mb-2">Let's Connect</h1>
              <p className="text-zinc-400 text-lg">Fill out the form below and I'll get back to you promptly.</p>
            </div>
            <form onSubmit={handleContactSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Your Name</label>
                  <input 
                    type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 focus:bg-zinc-900 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Your Email</label>
                  <input 
                    type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 focus:bg-zinc-900 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Message</label>
                <textarea 
                  required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 focus:bg-zinc-900 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" disabled={submitStatus === 'submitting'}
                className="w-full md:w-auto px-10 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 mt-4"
              >
                {submitStatus === 'idle' && <><Send size={18} /> Send Message</>}
                {submitStatus === 'submitting' && 'Transmitting...'}
                {submitStatus === 'success' && <><CheckCircle size={18} /> Transmission Successful</>}
                {submitStatus === 'error' && <><XCircle size={18} /> Error Sending</>}
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800/80 bg-[#050505]/95 backdrop-blur-xl w-full h-[40px] flex items-center text-[11px] md:text-xs text-zinc-500 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">Dilip Kumar A N</span>
          </div>

          <div className="font-mono flex items-center gap-2">
            <span className="hidden sm:inline">{new Date().getFullYear()}</span>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:dilipgowda7259@gmail.com" className="hover:text-white transition-colors">dilipgowda7259@gmail.com</a>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="https://github.com/dilipgowdaan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={14} /></a>
            <a href="https://linkedin.com/in/dilipkumaran" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={14} /></a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors"><Mail size={14} /></a>
          </div>

        </div>
      </footer>
    </div>
  );
}
