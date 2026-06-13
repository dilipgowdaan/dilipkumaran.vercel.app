import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, MapPin, 
  Terminal, Cpu, Monitor, Zap, GraduationCap, 
  ChevronRight, Send, CheckCircle, XCircle, Download,
  Database, Smartphone, Server, Briefcase, Code,
  Trophy, Gamepad2, Activity, Medal,
  Rocket, Car, Globe, Lightbulb, Microscope, ExternalLink
} from 'lucide-react';

// --- DATA STRUCTURES ---

const softwareProjects = [
  {
    title: "VaidyaMithra - Hospital Management",
    icon: Database,
    tags: ["React", "Firebase", "LLMs", "Vercel"],
    url: "https://vaidya-mithra-app.vercel.app/",
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
    url: "https://nammaraitha.vercel.app/",
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
    url: "https://solarenerlytics.vercel.app/",
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
    <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-indigo-400" />} {text}
    </h2>
    <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
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

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col bg-white/[0.02] backdrop-blur-2xl saturate-150 border border-white/[0.05] rounded-[2rem] group shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-h-[350px] md:min-h-[400px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/[0.15]
        ${project.url ? 'cursor-pointer' : 'cursor-default'}
        ${isHovered ? 'md:flex-[2.5]' : 'md:flex-1'}`
      }
    >
      <div className="absolute inset-0 z-0">
        {project.images.map((img, i) => (
          <img 
            key={i}
            src={img} 
            alt="Project"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === imgIdx ? (isHovered ? 'opacity-50 scale-105' : 'opacity-40 md:opacity-20 scale-105 md:scale-100') : 'opacity-0 scale-100'}`}
          />
        ))}
        {/* iOS-style deeply frosted bottom gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-700`} />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
        <div className={`transition-all duration-700 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-0 md:translate-y-4 opacity-100'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-2xl border transition-all duration-500 backdrop-blur-xl saturate-200 ${isHovered ? 'bg-indigo-500/30 border-white/20 text-indigo-300 scale-110 shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'bg-white/5 border-white/10 text-white scale-110 md:scale-100'}`}>
              <project.icon size={20} />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className={`text-[10px] font-mono font-semibold px-2 py-1.5 rounded-lg border transition-all duration-500 backdrop-blur-md ${isHovered ? 'bg-indigo-500/20 text-indigo-100 border-indigo-400/30 translate-y-0' : 'bg-white/5 text-zinc-300 border-white/10 translate-y-0'}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <h3 className={`font-bold transition-all duration-500 mb-3 flex items-center gap-2 drop-shadow-md ${isHovered ? 'text-2xl text-white' : 'text-2xl md:text-xl text-white md:text-zinc-200 md:truncate whitespace-normal'}`}>
            {project.title}
            {project.url && <ExternalLink size={18} className={`text-indigo-400 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-100 md:opacity-0'}`} />}
          </h3>
          
          <div className={`grid transition-all duration-700 ease-in-out ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[1fr] md:grid-rows-[0fr] opacity-100 md:opacity-0 mt-2 md:mt-0'}`}>
            <div className="overflow-hidden">
              <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
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
    <div className="flex flex-col md:flex-row gap-5 w-full h-auto md:h-[420px]">
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
    
    const serviceId = 'service_bvptl1g'; 
    const templateId = 'template_q9d2t3t';
    const publicKey = 'jMeHyyiKaYCLnBG4o';

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS Environment variables are missing!");
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
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative pb-[72px] custom-scrollbar">
      
      {/* Background Orbs & Effects - Intensified for better Glassmorphism refraction */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
      </div>

      {/* --- HEADER - iOS Frosted Glass --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-2xl saturate-[1.5] border-b border-white/[0.05] shadow-sm py-4 px-6 h-[72px]">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
          <a href="#home" className="flex items-center gap-3 cursor-pointer group focus:outline-none">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-all duration-300">
              D
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300 tracking-tight group-hover:text-white transition-colors duration-300 drop-shadow-md">
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
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-400 transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]
                  ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full opacity-50'}
                `} />
              </a>
            ))}
            
            <a 
              href="#contact"
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border focus:outline-none backdrop-blur-md saturate-150 ${activeSection === 'contact' ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'bg-white/10 text-white border-white/10 hover:bg-white/20 hover:border-white/20 shadow-sm'} hover:-translate-y-0.5`}
            >
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 w-full pt-[72px] flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section id="home" className="w-full max-w-6xl mx-auto px-6 pt-16 pb-20 scroll-mt-[72px]">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            <div className="md:col-span-7 lg:col-span-7 space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-2xl saturate-150 border border-emerald-500/20 w-fit hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                </span>
                <span className="text-emerald-300 text-sm font-medium tracking-wide">Available for Software & Embedded Roles</span>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight drop-shadow-2xl">
                  DILIP KUMAR A N
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-tight drop-shadow-lg">
                  Electronics and Embedded Systems Engineer
                </h2>
              </div>

              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed pt-2 drop-shadow-sm">
                Engineering graduate with industry experience, seeking a challenging role to apply technical and problem-solving skills while growing in the field of electronics, embedded systems, and software development.
              </p>

              {/* Call To Action Buttons - iOS Translucent Style */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <a href="/Dilip_Kumar_CV.pdf" download="Dilip_Kumar_CV.pdf" className="h-12 px-7 rounded-2xl bg-indigo-500 text-white font-bold flex items-center gap-2 hover:bg-indigo-400 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.5)] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-indigo-400/50">
                  <Download size={18} className="animate-bounce mt-1" /> Download CV
                </a>
                <a href="#contact" className="h-12 px-7 rounded-2xl bg-white/10 backdrop-blur-2xl saturate-150 text-white font-bold flex items-center gap-2 hover:bg-white/20 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] active:scale-95 transition-all duration-300 shadow-sm border border-white/10">
                  <Mail size={18} /> Get in Touch
                </a>
                <a href="https://github.com/dilipgowdaan" target="_blank" rel="noreferrer" className="h-12 px-7 rounded-2xl bg-white/5 backdrop-blur-2xl saturate-150 text-white font-bold flex items-center gap-2 hover:bg-white/15 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 shadow-sm border border-white/10">
                  <Github size={18} /> GitHub Profile
                </a>
              </div>
            </div>

            {/* Profile Image Holder - Deep Frost */}
            <div className="hidden md:flex md:col-span-5 lg:col-span-5 justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative group cursor-default hover:scale-105 transition-transform duration-700">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-500 animate-blob"></div>
                
                <div className="relative w-80 h-80 rounded-full p-2 bg-white/[0.02] backdrop-blur-3xl saturate-200 border border-white/[0.1] shadow-2xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Dilip Kumar A N" 
                    className="w-full h-full object-cover rounded-full bg-zinc-900 border border-white/5"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full rounded-full items-center justify-center bg-gradient-to-br from-indigo-900/40 to-purple-900/40 text-6xl font-bold text-white shadow-inner">
                    DK
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* EXPERIENCE SECTION - Glass Widget */}
        <section id="experience" className="w-full max-w-5xl mx-auto px-6 py-16 scroll-mt-[72px]">
          <div className="animate-fade-in-up w-full">
            <SectionLabel text="Professional Experience" icon={Briefcase} delay="0.1s" />
            <div className="bg-white/[0.02] backdrop-blur-3xl saturate-150 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-white/[0.1] hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 group-hover:opacity-10 transition-all duration-700">
                <Monitor size={150} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">Technical Support Engineer</h3>
                  <p className="text-xl text-indigo-300 font-medium">URSC / ISRO <span className="text-zinc-400 text-sm ml-2">(Sree Venkateshwara)</span></p>
                </div>
                <span className="px-5 py-2 text-sm font-medium rounded-xl border bg-white/5 border-white/10 text-zinc-200 w-fit backdrop-blur-xl group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all shadow-inner">Mar 2022 — Dec 2023</span>
              </div>
              <ul className="relative z-10 space-y-5 max-w-4xl text-zinc-300 text-lg">
                <li className="flex items-start group/item"><ChevronRight size={20} className="text-white/30 group-hover/item:text-white group-hover/item:translate-x-1 transition-all mr-4 mt-1 shrink-0 drop-shadow-sm" /> Diagnosed and resolved system-level hardware and software issues across desktops and networks.</li>
                <li className="flex items-start group/item"><ChevronRight size={20} className="text-white/30 group-hover/item:text-white group-hover/item:translate-x-1 transition-all mr-4 mt-1 shrink-0 drop-shadow-sm" /> Automated troubleshooting workflows and improved overall system reliability.</li>
                <li className="flex items-start group/item"><ChevronRight size={20} className="text-white/30 group-hover/item:text-white group-hover/item:translate-x-1 transition-all mr-4 mt-1 shrink-0 drop-shadow-sm" /> Worked extensively with low-level hardware and software interaction, debugging OS and drivers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
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

        {/* SKILLS & EDUCATION SECTION */}
        <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-16 space-y-16 scroll-mt-[72px]">
          
          <div className="animate-fade-in-up">
            <SectionLabel text="Technical Competencies" icon={Terminal} delay="0.1s" />
            <div className="bg-white/[0.02] backdrop-blur-3xl saturate-150 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-white/[0.1] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-5 flex items-center gap-3 drop-shadow-sm">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400 shadow-inner backdrop-blur-xl"><Code size={18}/></div> Programming & Web
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['React', 'React Native', 'C', 'Python', 'HTML', 'SQL'].map(s => (
                      <span key={s} className="px-4 py-2 text-xs font-semibold rounded-xl border bg-white/[0.03] border-white/10 text-zinc-200 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] transition-all cursor-default shadow-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-5 flex items-center gap-3 drop-shadow-sm">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shadow-inner backdrop-blur-xl"><Server size={18}/></div> Software & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Firebase', 'Vercel', 'Supabase', 'Flask', 'Expo', 'VS Code', 'Arduino IDE', 'MATLAB'].map(s => (
                      <span key={s} className="px-4 py-2 text-xs font-semibold rounded-xl border bg-white/[0.03] border-white/10 text-zinc-200 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] transition-all cursor-default shadow-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-5 flex items-center gap-3 drop-shadow-sm">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 shadow-inner backdrop-blur-xl"><Cpu size={18}/></div> Hardware Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Verilog', 'System Verilog', 'FPGA Boards', 'Raspberry Pi', 'Arduino Uno', 'ESP8266/ESP32'].map(s => (
                      <span key={s} className="px-4 py-2 text-xs font-semibold rounded-xl border bg-white/[0.03] border-white/10 text-zinc-200 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] transition-all cursor-default shadow-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SectionLabel text="Education" icon={GraduationCap} />
            <div className="bg-white/[0.02] backdrop-blur-3xl saturate-150 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] space-y-3 hover:border-white/[0.1] transition-all duration-500">
              {[
                { deg: "B.E. in Electronics and Communication", inst: "RV College Of Engineering, Bengaluru", year: "2026", score: "7.86 CGPA" },
                { deg: "Diploma in Electronics and Communication", inst: "Govt. Polytechnic, Immadihalli", year: "2021", score: "83%" },
                { deg: "PUC in Science", inst: "Sahyadri PU College, Kolar", year: "2019", score: "77.6%" },
                { deg: "SSLC", inst: "Green Valley Public School", year: "2017", score: "90.26%" }
              ].map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.05] hover:shadow-lg transition-all group hover:-translate-y-1 backdrop-blur-md">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors drop-shadow-sm">{edu.deg}</h3>
                    <p className="text-zinc-400 mt-1">{edu.inst}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-6">
                    <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm shadow-inner group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                      {edu.score}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm w-12 text-right">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS & BEYOND ACADEMICS */}
          <div className="grid lg:grid-cols-2 gap-10 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Highly Highlighted Achievements */}
            <div>
              <SectionLabel text="Achievements & Awards" icon={Trophy} />
              <div className="bg-gradient-to-br from-yellow-500/10 to-white/[0.02] backdrop-blur-3xl saturate-150 border border-yellow-500/20 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_32px_rgba(234,179,8,0.15)] relative overflow-hidden group hover:border-yellow-400/40 hover:shadow-[0_15px_50px_rgba(234,179,8,0.25)] transition-all duration-500 h-full transform hover:-translate-y-2">
                <div className="absolute -top-6 -right-6 p-8 opacity-20 pointer-events-none group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-40 transition-all duration-700">
                  <Medal size={160} className="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" />
                </div>
                
                <div className="relative z-10 flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 shadow-[0_0_20px_rgba(234,179,8,0.4)] backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                    <Trophy size={28} className="text-yellow-300 drop-shadow-md" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">Major Project Showcase</h3>
                </div>

                <ul className="relative z-10 space-y-5 text-zinc-100">
                  <li className="flex items-start bg-black/20 p-6 rounded-2xl border border-white/[0.05] backdrop-blur-xl group-hover:border-yellow-500/30 transition-colors shadow-inner">
                    <span className="leading-relaxed text-lg">Secured <strong className="text-yellow-400 drop-shadow-sm">Second Place</strong> at the RVCE Major Project Showcase for the innovative design and execution of <em>"Solar Enerlytics: A Grid Integrated PV System with Weather Forecast Analysis"</em>.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highly Interactive Beyond Academics (Interests) */}
            <div>
              <SectionLabel text="Beyond Academics" icon={Gamepad2} />
              <div className="bg-white/[0.02] backdrop-blur-3xl saturate-150 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] hover:border-white/[0.1]">
                 <div className="flex flex-wrap gap-4 relative z-10">
                    
                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-red-500/50 hover:bg-red-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(248,113,113,0.2)] transition-all cursor-default group shadow-sm">
                      <Rocket size={20} className="text-red-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" /> Aerospace Technologies
                    </div>

                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-orange-500/50 hover:bg-orange-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)] transition-all cursor-default group shadow-sm">
                      <Car size={20} className="text-orange-400 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-md" /> Formula 1 & Motorsport
                    </div>

                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(168,85,247,0.2)] transition-all cursor-default group shadow-sm">
                      <Globe size={20} className="text-purple-400 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" /> Astronomy & Space
                    </div>

                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(234,179,8,0.2)] transition-all cursor-default group shadow-sm">
                      <Lightbulb size={20} className="text-yellow-400 group-hover:scale-110 group-hover:text-yellow-300 drop-shadow-[0_0_0px_rgba(253,224,71,0)] group-hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.8)] transition-all duration-300" /> Emerging Innovations
                    </div>

                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-teal-500/50 hover:bg-teal-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(20,184,166,0.2)] transition-all cursor-default group shadow-sm">
                      <Microscope size={20} className="text-teal-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" /> Scientific Research
                    </div>

                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,185,129,0.2)] transition-all cursor-default group shadow-sm">
                      <Activity size={20} className="text-emerald-400 group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-300 drop-shadow-md" /> Cricket
                    </div>

                    <div className="px-5 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] text-white text-sm font-semibold flex items-center gap-3 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(99,102,241,0.2)] transition-all cursor-default group shadow-sm">
                      <Gamepad2 size={20} className="text-indigo-400 group-hover:-translate-y-1 group-hover:-rotate-[15deg] transition-transform duration-300 drop-shadow-md" /> Mobile Games
                    </div>

                 </div>
              </div>
            </div>
          </div>

        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full max-w-3xl mx-auto px-6 py-16 scroll-mt-[72px]">
          <div className="bg-white/[0.02] backdrop-blur-3xl saturate-150 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden animate-fade-in-up hover:border-white/[0.1] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Mail size={200} className="text-white" />
            </div>
            <div className="relative z-10 mb-10">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">Let's Connect</h1>
              <p className="text-zinc-300 text-lg drop-shadow-sm">Fill out the form below and I'll get back to you promptly.</p>
            </div>
            <form onSubmit={handleContactSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-200 ml-1">Your Name</label>
                  <input 
                    type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/20 backdrop-blur-xl border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-black/40 transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-200 ml-1">Your Email</label>
                  <input 
                    type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/20 backdrop-blur-xl border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-black/40 transition-all shadow-inner"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-200 ml-1">Message</label>
                <textarea 
                  required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/20 backdrop-blur-xl border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:bg-black/40 transition-all resize-none shadow-inner"
                ></textarea>
              </div>
              <button 
                type="submit" disabled={submitStatus === 'submitting'}
                className="w-full md:w-auto px-10 py-4 bg-indigo-500/90 backdrop-blur-md border border-indigo-400/50 hover:bg-indigo-400 text-white font-bold rounded-2xl transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(99,102,241,0.5)] active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2 mt-4"
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

      {/* --- FOOTER - iOS Frosted Glass --- */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-2xl saturate-[1.5] border-t border-white/[0.05] w-full h-[72px] flex items-center text-xs md:text-sm text-zinc-300 px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
        <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-white drop-shadow-md">Dilip Kumar A N</span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span className="hidden sm:inline font-medium">© {new Date().getFullYear()}</span>
          </div>

          <div className="font-mono flex items-center gap-2 font-medium">
            <a href="mailto:contact@dilipgowda.xyz" className="hover:text-white hover:-translate-y-0.5 transition-all">contact@dilipgowda.xyz</a>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="https://github.com/dilipgowdaan" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all"><Github size={18} /></a>
            <a href="https://linkedin.com/in/dilipkumaran" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all"><Linkedin size={18} /></a>
            <a href="#contact" className="hover:text-indigo-400 hover:-translate-y-1 transition-all"><Mail size={18} /></a>
          </div>

        </div>
      </footer>
    </div>
  );
}
