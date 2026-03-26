interface CareerResults {
  roles: string[];
  rolesFit: string;
  guidance: string;
  email: string;
}

const careerData: Record<string, { roles: string[]; rolesFitTemplate: string; guidanceTemplate: string; emailTemplate: string }> = {
  "Frontend Development": {
    roles: ["Junior React Developer", "Accessibility & UI Engineer", "Design System Developer"],
    rolesFitTemplate: `Your skills in {skills} align perfectly with frontend development — you already understand the building blocks of modern web interfaces. These roles let you apply what you know while growing into specialized, high-demand positions.`,
    guidanceTemplate: `Start by building 2–3 polished portfolio projects using React and Tailwind CSS — recruiters want to see real work, not tutorials.
Practice responsive design and accessibility (WCAG basics) — these skills are rare among juniors and will set you apart.
Contribute to one open-source UI library on GitHub to gain collaborative experience.
Apply to startups and mid-size companies first; they're more open to motivated beginners with strong portfolios.`,
    emailTemplate: `Subject: Application for Junior Frontend Developer Role

Dear Hiring Manager,

I'm reaching out to apply for the Frontend Developer position at your company. I bring hands-on experience with {skills}, and I've been focused on building responsive, accessible web applications that prioritize user experience.

What excites me most about frontend development is turning complex requirements into clean, intuitive interfaces. I've spent time deepening my knowledge of component architecture and modern CSS, and I'm confident I can contribute meaningfully to your team from day one.

I'd love the chance to walk you through my recent projects and discuss how I can support your engineering goals.

Warm regards,
[Your Name]`,
  },
  "Backend Development": {
    roles: ["Junior API Developer", "Database & Integration Engineer", "Cloud Functions Developer"],
    rolesFitTemplate: `With {skills} in your toolkit, you already have the core competencies backend teams look for. These roles focus on building reliable systems and APIs — exactly where your current skills can create immediate impact.`,
    guidanceTemplate: `Build a REST API project end-to-end (authentication, CRUD, error handling) and deploy it — this is the single best portfolio piece for backend roles.
Learn PostgreSQL deeply: indexing, query optimization, and schema design matter more than knowing five databases superficially.
Get comfortable with Docker basics and one cloud platform (AWS Lambda or GCP Cloud Functions) for serverless deployments.
Focus your applications on companies building SaaS or data-heavy products — they hire the most backend engineers.`,
    emailTemplate: `Subject: Application for Junior Backend Developer Position

Dear Hiring Manager,

I'm writing to express my interest in the Backend Developer role at your company. My experience with {skills} has given me a solid foundation in building reliable server-side applications and working with databases.

I'm particularly drawn to the challenge of designing systems that scale — whether that's optimizing database queries, building clean API architectures, or ensuring robust error handling. I take pride in writing code that's not just functional, but maintainable.

I'd welcome the opportunity to discuss how my backend skills and eagerness to learn can benefit your engineering team.

Best regards,
[Your Name]`,
  },
  "Fullstack Development": {
    roles: ["Junior Fullstack Engineer", "Product-Focused Developer", "Internal Tools Developer"],
    rolesFitTemplate: `Your combination of {skills} gives you a rare advantage — you can think across the entire stack. These roles value versatility and ownership, which is exactly what your skill set supports.`,
    guidanceTemplate: `Build one complete project from database to deployed UI — this single artifact proves you can own a feature end-to-end, which is the #1 thing fullstack hiring managers look for.
Master one frontend framework (React) and one backend runtime (Node.js/Express) deeply rather than spreading thin across many.
Learn basic CI/CD: setting up a GitHub Actions pipeline shows you understand professional development workflows.
Target product-driven companies and startups where fullstack engineers get to ship features independently.`,
    emailTemplate: `Subject: Application for Junior Fullstack Developer Role

Dear Hiring Manager,

I'm excited to apply for the Fullstack Developer position. With experience in {skills}, I bring a well-rounded understanding of both frontend interfaces and backend systems.

What sets me apart is my ability to own features from concept to deployment. I enjoy the challenge of connecting a polished user interface to a well-structured API and database — and I've built projects that demonstrate exactly that.

I'd love to discuss how my cross-stack skills and proactive approach can contribute to your product team.

Best regards,
[Your Name]`,
  },
  "Artificial Intelligence": {
    roles: ["Junior AI Application Developer", "Prompt Engineer & AI Integrator", "Conversational AI Developer"],
    rolesFitTemplate: `Your background in {skills} positions you at the intersection of software engineering and AI — a combination that's in massive demand. These roles let you apply AI practically without requiring years of research experience.`,
    guidanceTemplate: `Focus on applied AI: build projects that integrate LLM APIs (OpenAI, Gemini) into real applications — employers want builders, not just theorists.
Learn prompt engineering and RAG (Retrieval-Augmented Generation) patterns — these are the most in-demand AI skills for 2024–2025.
Understand vector databases (Pinecone, Weaviate) and embedding workflows — they're central to modern AI applications.
Apply to AI startups and companies adding AI features to existing products; they need developers who can ship, not just research.`,
    emailTemplate: `Subject: Application for Junior AI Developer Position

Dear Hiring Manager,

I'm reaching out regarding the AI Developer role at your company. With skills in {skills}, I've been building applications that leverage AI models to solve real-world problems.

I'm passionate about the practical side of AI — integrating language models into production systems, designing effective prompts, and creating AI-powered features that users actually find valuable. I stay current with the rapidly evolving AI landscape and am eager to bring that knowledge to your team.

I'd be excited to discuss how my applied AI experience can support your product goals.

Best regards,
[Your Name]`,
  },
  "Data Science": {
    roles: ["Junior Data Analyst", "Business Intelligence Developer", "Data Visualization Specialist"],
    rolesFitTemplate: `Your skills in {skills} give you the analytical foundation that data teams need. These roles focus on turning raw data into actionable insights — a perfect match for your current capabilities.`,
    guidanceTemplate: `Build 2–3 data analysis projects with real datasets (Kaggle, government open data) that tell a clear story — showcase your ability to find insights, not just run code.
Master SQL and one visualization tool (Tableau or Python's Plotly/Seaborn) — these are non-negotiable for data roles.
Learn to communicate findings to non-technical audiences: a one-page summary of your analysis is worth more than a 50-cell notebook.
Apply to companies with established data teams where you'll have mentorship, rather than being the sole data person at a startup.`,
    emailTemplate: `Subject: Application for Junior Data Analyst Position

Dear Hiring Manager,

I'm writing to apply for the Data Analyst position at your company. My experience with {skills} has equipped me to extract meaningful insights from complex datasets and present them in ways that drive decisions.

I combine strong analytical skills with clear storytelling — I believe data is only valuable when it leads to action. I've worked on projects ranging from exploratory analysis to building interactive dashboards, and I'm eager to bring that same rigor to your data team.

I'd love to discuss how my analytical skills can contribute to your business goals.

Best regards,
[Your Name]`,
  },
  "Machine Learning": {
    roles: ["Junior ML Engineer", "ML Data Pipeline Developer", "Model Evaluation & Testing Engineer"],
    rolesFitTemplate: `With {skills} in your arsenal, you have the technical depth that ML teams need. These roles bridge the gap between data science research and production engineering — exactly where your skills are most valuable.`,
    guidanceTemplate: `Build an end-to-end ML project: data collection → preprocessing → training → evaluation → deployment via a simple API. This single project demonstrates production readiness.
Learn MLOps basics: model versioning (MLflow), experiment tracking, and basic monitoring — these separate ML engineers from ML hobbyists.
Understand the math behind 2–3 core algorithms deeply (gradient boosting, neural networks, clustering) rather than superficially knowing twenty.
Target companies that already have ML in production — they need engineers who can maintain and improve existing systems, which is more accessible for juniors.`,
    emailTemplate: `Subject: Application for Junior ML Engineer Position

Dear Hiring Manager,

I'm excited to apply for the ML Engineer position. With experience in {skills}, I've developed a strong foundation in building, evaluating, and deploying machine learning models.

What drives me is the engineering side of ML — not just training models, but making them reliable, reproducible, and production-ready. I understand the importance of clean data pipelines, proper evaluation metrics, and maintainable code in ML systems.

I'd welcome the chance to discuss how my ML engineering skills can contribute to your team's goals.

Best regards,
[Your Name]`,
  },
};

export async function generateCareerPlan(skills: string, interest: string): Promise<CareerResults> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = careerData[interest];
  if (!data) throw new Error("Unknown career interest");

  return {
    roles: data.roles,
    rolesFit: data.rolesFitTemplate.replace(/\{skills\}/g, skills),
    guidance: data.guidanceTemplate.replace(/\{skills\}/g, skills),
    email: data.emailTemplate.replace(/\{skills\}/g, skills),
  };
}
