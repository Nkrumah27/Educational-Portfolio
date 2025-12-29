
export interface Project {
  title: string;
  period: string;
  supervisor?: string;
  description: string[];
  highlights: string[];
  category: 'Research' | 'Development';
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
