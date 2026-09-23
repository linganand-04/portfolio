// Skill proficiency is self-rated (0-100). Adjust freely as your skills grow.

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", level: 92, icon: "FileCode2" },
      { name: "CSS3", level: 90, icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 85, icon: "Braces" },
      { name: "React.js", level: 82, icon: "Atom" }, // Changed to Atom
      { name: "Tailwind CSS", level: 85, icon: "Wind" }, // Clever match
      { name: "Bootstrap", level: 80, icon: "LayoutGrid" },
      { name: "SEO", level: 80, icon: "SearchCheck" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 60, icon: "Server" },
      { name: "Express.js", level: 55, icon: "Webhook" },
      { name: "REST APIs", level: 65, icon: "Cable" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MySQL", level: 60, icon: "Database" },
      { name: "MongoDB", level: 55, icon: "Leaf" }, // Perfect conceptual match
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "VS Code", level: 92, icon: "Code2" },
      { name: "npm", level: 80, icon: "Package" },
      { name: "Google Ads", level: 80, icon: "Ad" }, // Changed from Package
      { name: "Google Analytics", level: 80, icon: "ChartNoAxesCombined" }, // Changed from Package
      { name: "Figma", level: 60, icon: "PenTool" },
      { name: "Canva", level: 60, icon: "Paintbrush" },
      { name: "Excel", level: 60, icon: "FileSpreadsheet" },
      { name: "Word", level: 60, icon: "FileText" },
    ],
  },

  {
    id: "ai",
    label: "AI Tools",
    skills: [
      { name: "ChatGPT", level: 85, icon: "BotMessageSquare" },
      { name: "Claude", level: 85, icon: "Brain" },
      { name: "Gemini", level: 85, icon: "Sparkles" },
    ],
  },
  {
    id: "vcs",
    label: "Version Control",
    skills: [
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "GitHub", level: 85, icon: "FolderGit2" }, // Lucide has a dedicated Github icon
    ],
  },
];
