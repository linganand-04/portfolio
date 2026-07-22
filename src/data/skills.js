// Skill proficiency is self-rated (0-100). Adjust freely as your skills grow.

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", level: 92, icon: "FileCode2" },
      { name: "CSS3", level: 90, icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 85, icon: "Braces" },
      { name: "React.js", level: 82, icon: "Component" },
      { name: "Tailwind CSS", level: 85, icon: "Wind" },
      { name: "Bootstrap", level: 80, icon: "LayoutGrid" },
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
      { name: "MongoDB", level: 55, icon: "Leaf" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "VS Code", level: 92, icon: "Code2" },
      { name: "Figma", level: 60, icon: "PenTool" },
      { name: "npm", level: 80, icon: "Package" },
    ],
  },
  {
    id: "vcs",
    label: "Version Control",
    skills: [
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "GitHub", level: 85, icon: "FolderGit2" },
    ],
  },
];
