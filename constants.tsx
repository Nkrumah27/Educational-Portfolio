
import React from 'react';
import { Project, Experience, SkillGroup } from './types';
import { 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  Users, 
  Trophy, 
  Mail, 
  Linkedin, 
  Briefcase,
  Lightbulb,
  Search,
  PenTool,
  Server
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Obed Nkrumah",
  title: "Computer Science & Engineering Student",
  email: "obednkrumah41@gmail.com",
  linkedin: "https://www.linkedin.com/in/obednkrumah",
  location: "Tarkwa, Ghana",
  university: "University of Mines and Technology (UMaT)",
  tagline: "Bridging Human-Computer Interaction and Artificial Intelligence to solve real-world psychosocial and accessibility challenges."
};

export const PROJECTS: Project[] = [
  {
    title: "Intelligent Digital Counselling Platform for Universities",
    period: "January 2025 – August 2025",
    supervisor: "Dr. Daniel Adu-Gyamfi",
    category: "Research",
    description: [
      "Led a team of three students to investigate psychosocial barriers to student mental health through 50+ direct interviews.",
      "Architected a trust-based, anonymous user experience using qualitative data."
    ],
    highlights: ["Full-stack AI mobile app", "Intelligent counselor matching", "Automated pre-session analytics", "University-validated platform"]
  },
  {
    title: "Online Library System for the Aged",
    period: "July 2024 – October 2024",
    supervisor: "Dr. Eric Affum",
    category: "Research",
    description: [
      "Conducted surveys with individuals aged 50+ to gather qualitative data on digital literacy and accessibility challenges.",
      "Authored UI design prioritizing large fonts, high contrast, and simplified navigation."
    ],
    highlights: ["HCI Research", "Accessibility First", "High-fidelity mockups", "User-validated UI"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Lymfz Engineering Limited",
    location: "Accra, Ghana",
    role: "Web and IT Specialist (Remote)",
    period: "August 2025 – Present",
    bullets: [
      "Developed and deployed the company's official website from scratch.",
      "Collaborated with leadership to align web content with business goals and industry standards."
    ]
  },
  {
    company: "EnspireFX Websites",
    location: "Accra, Ghana",
    role: "Web Developer",
    period: "October 2025 – December 2025",
    bullets: [
      "Managed end-to-end lifecycle from client needs assessment to full-stack development.",
      "Refined products for law firms and media platforms based on client feedback.",
      "Authored news articles for the Ghanaian Standard digital media platform."
    ]
  },
  {
    company: "PentaTech",
    location: "Accra, Ghana",
    role: "Frontend Intern (Remote)",
    period: "November 2024 – January 2025",
    bullets: [
      "Translated Figma mockups into pixel-perfect functional code.",
      "Participated in Agile workflows, including daily stand-ups and peer code reviews."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "PHP", "Kotlin", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks & Tech",
    items: ["React.js", "React Native", "Laravel", "MongoDB", "Tailwind CSS"]
  },
  {
    category: "Specializations",
    items: ["AI/ML", "UI/UX Design", "Web Programming", "Mobile App Dev", "HCI"]
  }
];

export const LEADERSHIP = [
  {
    role: "Frontend Skills Tutor",
    org: "Ideation Axis Club, UMaT",
    period: "2024 - 2025",
    details: "Instructed 30+ members on frontend fundamentals and mentored 5 members for the UMaT innovation fair."
  },
  {
    role: "Peer Tutor",
    org: "Graduate Together, UMaT",
    period: "2022 - 2025",
    details: "Co-founded a peer tutoring program assisting course mates with weekly tutorials."
  },
  {
    role: "Electoral Commission Chairman",
    org: "ACSES, UMaT",
    period: "2024",
    details: "Launched a secure online voting system to ensure fair and transparent elections."
  }
];
