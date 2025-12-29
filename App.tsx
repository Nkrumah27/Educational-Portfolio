
import React from 'react';
import Navbar from './components/Navbar';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  EXPERIENCES, 
  SKILLS, 
  LEADERSHIP 
} from './constants';
import { 
  GraduationCap, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Database, 
  Layout, 
  Cpu, 
  Users,
  Target,
  Award,
  // Added Briefcase to the imports
  Briefcase
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase border border-blue-100">
              Graduate School Candidate • First Class Honors
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Designing Tech for <span className="text-blue-600">Human Impact</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                <Mail className="mr-2" size={20} />
                Get in Touch
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all transform hover:-translate-y-1"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-8 overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4 overflow-hidden pointer-events-none">
                {Array.from({length: 40}).map((_, i) => (
                  <Code key={i} size={40} className="text-blue-900" />
                ))}
               </div>
               <div className="glass p-10 rounded-2xl relative z-10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="text-blue-600" size={32} />
                    <div>
                      <h3 className="font-bold text-lg">BSc. Computer Science & Engineering</h3>
                      <p className="text-sm text-slate-500">UMaT, Ghana</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 font-medium">Rank</span>
                      <span className="font-bold text-blue-600">Top 5%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 font-medium">CWA</span>
                      <span className="font-bold">81.40 / 100</span>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 italic">
                      "Academic excellence driven by a passion for social utility through computing."
                    </div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl shadow-xl flex items-center gap-3">
              <Award className="text-yellow-500" size={24} />
              <span className="text-sm font-bold uppercase tracking-wider">First Class Honors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Projects */}
      <section id="research" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research & Project Experience</h2>
            <p className="text-slate-600 max-w-2xl">Exploring the intersection of Human-Computer Interaction and social support systems.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 p-8 rounded-3xl hover:border-blue-200 transition-all shadow-sm hover:shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${project.category === 'Research' ? 'bg-indigo-50 text-indigo-600' : 'bg-green-50 text-green-600'}`}>
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{project.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 flex items-center">
                   <Users size={16} className="mr-2" />
                   Supervisor: <span className="font-semibold text-slate-700 ml-1">{project.supervisor}</span>
                </p>
                
                <div className="space-y-4 mb-8">
                  {project.description.map((desc, i) => (
                    <div key={i} className="flex items-start">
                      <ChevronRight size={18} className="text-blue-400 mt-1 shrink-0 mr-2" />
                      <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((tag, i) => (
                    <span key={i} className="bg-slate-50 text-slate-600 text-xs px-3 py-1 rounded-lg border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-slate-600 max-w-2xl">Practical industry application of web technologies and IT systems.</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600 md:hidden"></div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">{exp.period}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                  <div className="md:col-span-3 glass p-8 rounded-2xl hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <p className="text-blue-800 font-semibold mb-6 flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </p>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[160px] opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-400 max-w-2xl">A comprehensive toolkit for developing intelligent, user-centric solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-slate-700 text-blue-400">
                  {idx === 0 ? <Code size={24} /> : idx === 1 ? <Database size={24} /> : <Target size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-6 text-slate-100">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="bg-slate-700/50 text-slate-300 text-sm px-4 py-1.5 rounded-lg border border-slate-600/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Activities */}
      <section id="leadership" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership & Community</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Mentoring, instructing, and organizing for collective academic growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEADERSHIP.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden hover:-translate-y-2 transition-transform shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Users size={64} className="text-blue-900" />
                </div>
                <p className="text-xs font-bold text-blue-600 uppercase mb-4">{item.period}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.role}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-4">{item.org}</p>
                <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-blue-100 pl-4">
                  "{item.details}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between border border-blue-100">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="font-bold text-blue-900 text-lg flex items-center justify-center md:justify-start">
                <Award className="mr-2 text-blue-600" size={20} />
                Athletics & Teamwork
              </h4>
              <p className="text-blue-700/70 text-sm mt-1">Defender, CSE Department Soccer Team (2023-2025)</p>
            </div>
            <div className="text-sm font-medium text-blue-800 bg-white px-6 py-2 rounded-xl shadow-sm border border-blue-100">
              Department League Runner-up (2x)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Let's connect</h2>
            <p className="text-slate-500">Currently exploring graduate school opportunities and collaborative research.</p>
          </div>
          
          <div className="flex justify-center gap-6">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm">
               <Mail size={24} />
             </a>
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm">
               <Linkedin size={24} />
             </a>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Built with React & Tailwind CSS</span>
              <span>First Class Honors, UMaT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
