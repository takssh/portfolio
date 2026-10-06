// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE ONLY.
//  Everything on the website is read from here, so you never
//  have to touch the components to personalise your portfolio.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Taksh S Kumar",
  initials: "TSK",
  role: "Digital Marketer",
  headline: "I turn ideas into things people remember.",
  intro:
    "I'm a creative who enjoys turning ideas into things people connect with. I care about good storytelling, thoughtful design and the details that make a brand feel right.",
  location: "Mangaluru, India",
  email: "kumartaksh2026@gmail.com",
  // Put a photo in /public (e.g. profile.jpg) and set photo: "/profile.jpg"
  
  // Put your CV in /public (e.g. resume.pdf) and set resume: "/resume.pdf"
  resume: "",
  socials: [
    { label: "GitHub", href: "https://github.com/takssh" },
    { label: "Instagram", href: "https://instagram.com/_takssh__" },
  ],
};

export const about = {
  paragraphs: [
    "I'm currently studying computer science, with a strong interest in web development and user-focused design. I like starting with a real problem, sketching a simple solution, and refining it until it feels effortless.",
    "Outside of coursework I build side projects, contribute to team assignments and keep learning new tools. I work best in collaborative environments where feedback is welcome and quality matters.",
  ],
  stats: [
    { value: "2", label: "Projects completed" },
    { value: "1", label: "Years of coding" },
    { value: "1", label: "Team collaborations" },
  ],
};

export const skills = [
  { group: "Frontend", items: ["HTML & CSS", "JavaScript", "React", "Next.js"] },
  { group: "Backend", items: ["Node.js", "SQL"] },
  { group: "Tools", items: ["Git & GitHub", "VS Code", "Figma"] },
];

export const projects = [
  {
    title: "EV Charging Station",
    year: "2026",
    description:
      "A full-stack web app for finding EV charging stations and managing bookings — search, filter, view station details, and book, update, or cancel charging slots in real time.",
    tags: ["Node.js", "Express", "JavaScript"],
    
    code: "https://github.com/takssh/ev-charging-station",
    
  },
 
];

export const journey = [
  {
    period: "2025 – Present",
    title: "B.E. in Computer Science",
    place: "Sahyadri College of Engineering and Management",
    text: "Focused on web technologies, data structures and software engineering. Active in the coding club.",
  },
  {
    period: "2026",
    title: "Digital Marketing Intern",
    place: "Roava Experiences",
    text: "Creative Lead at Roava Experiences, where I work across branding, content, marketing and growth to build a travel community and create experiences for the next generation of travellers.",
  },
  {
    period: "2025-Present",
    title: "Freelance Video Editor",
    place: "Freelance",
    text: "Bringing together vision & creativity to push brands further.",
  },
];
