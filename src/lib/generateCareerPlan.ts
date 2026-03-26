interface CareerResults {
  roles: string[];
  guidance: string;
  email: string;
}

const careerData: Record<string, { roles: string[]; guidanceTemplate: string; emailTemplate: string }> = {
  "Frontend Development": {
    roles: ["UI/UX Developer", "React Frontend Engineer", "Design Systems Engineer"],
    guidanceTemplate: `Based on your skills in {skills}, you're well-positioned for a career in Frontend Development.

Focus on mastering modern frameworks like React or Vue, and deepen your CSS/design skills. Build a strong portfolio showcasing responsive, accessible web applications.

Consider contributing to open-source projects and staying current with web standards. Companies highly value developers who understand performance optimization and user experience.`,
    emailTemplate: `Subject: Application for Frontend Developer Position

Dear Hiring Manager,

I am writing to express my interest in the Frontend Developer position at your company. With strong skills in {skills}, I am confident in my ability to contribute to your team.

I have hands-on experience building responsive, performant web applications and am passionate about creating exceptional user experiences. I stay current with modern frontend technologies and best practices.

I would welcome the opportunity to discuss how my skills and enthusiasm can benefit your team.

Best regards,
[Your Name]`,
  },
  "Backend Development": {
    roles: ["Backend Engineer", "API Developer", "Cloud Infrastructure Engineer"],
    guidanceTemplate: `Your skills in {skills} provide a strong foundation for Backend Development.

Focus on building scalable APIs, understanding database design, and mastering cloud services (AWS, GCP, or Azure). Learn about microservices architecture and containerization with Docker/Kubernetes.

Security best practices and performance optimization are highly valued. Consider getting certified in cloud platforms to stand out.`,
    emailTemplate: `Subject: Application for Backend Developer Position

Dear Hiring Manager,

I am excited to apply for the Backend Developer role. My experience with {skills} has equipped me to build robust, scalable server-side applications.

I am passionate about writing clean, efficient code and designing systems that perform reliably at scale. I am eager to bring my technical expertise to your engineering team.

I look forward to the opportunity to discuss my qualifications further.

Best regards,
[Your Name]`,
  },
  "Fullstack Development": {
    roles: ["Fullstack Engineer", "Software Developer", "Technical Lead"],
    guidanceTemplate: `With skills in {skills}, you have great potential as a Fullstack Developer.

The key advantage of fullstack development is versatility. Focus on mastering both frontend frameworks (React, Next.js) and backend technologies (Node.js, databases). Understanding DevOps and CI/CD pipelines will set you apart.

Build end-to-end projects that demonstrate your ability to own entire features from database to UI.`,
    emailTemplate: `Subject: Application for Fullstack Developer Position

Dear Hiring Manager,

I am writing to apply for the Fullstack Developer position. With proficiency in {skills}, I bring a comprehensive understanding of both frontend and backend development.

I thrive in environments where I can contribute across the entire stack, from designing intuitive user interfaces to building performant APIs and managing databases.

I would love to discuss how my versatile skill set can add value to your team.

Best regards,
[Your Name]`,
  },
  "Artificial Intelligence": {
    roles: ["AI Engineer", "NLP Specialist", "Computer Vision Engineer"],
    guidanceTemplate: `Your background in {skills} positions you well for a career in Artificial Intelligence.

Deepen your knowledge of neural networks, transformer architectures, and reinforcement learning. Hands-on experience with frameworks like PyTorch or TensorFlow is essential.

Stay current with research papers and consider specializing in a domain like NLP, computer vision, or generative AI. Building and deploying real AI applications will make you stand out.`,
    emailTemplate: `Subject: Application for AI Engineer Position

Dear Hiring Manager,

I am eager to apply for the AI Engineer role at your organization. With skills in {skills}, I have a solid foundation in developing and deploying AI solutions.

I am passionate about pushing the boundaries of what AI can achieve and am experienced in building models that deliver real-world impact. I am excited about the opportunity to contribute to your AI initiatives.

Best regards,
[Your Name]`,
  },
  "Data Science": {
    roles: ["Data Scientist", "Business Intelligence Analyst", "Data Analytics Engineer"],
    guidanceTemplate: `Your skills in {skills} are excellent for a Data Science career.

Focus on statistical analysis, data visualization, and storytelling with data. Master tools like Python, SQL, and visualization libraries. Understanding business context is just as important as technical skills.

Build a portfolio of projects that show you can extract actionable insights from complex datasets. Kaggle competitions and real-world case studies are great ways to demonstrate your capabilities.`,
    emailTemplate: `Subject: Application for Data Scientist Position

Dear Hiring Manager,

I am applying for the Data Scientist position with enthusiasm. My skills in {skills} enable me to extract meaningful insights from complex datasets and drive data-informed decisions.

I combine strong analytical skills with clear communication to translate data findings into actionable business strategies. I would be thrilled to bring this expertise to your team.

Best regards,
[Your Name]`,
  },
  "Machine Learning": {
    roles: ["ML Engineer", "MLOps Engineer", "Research Scientist"],
    guidanceTemplate: `With skills in {skills}, you're on a great path toward Machine Learning engineering.

Focus on understanding ML algorithms deeply, not just using libraries. Learn about model deployment, monitoring, and MLOps practices. Experience with feature engineering and model optimization is highly valued.

Consider contributing to ML open-source projects and building end-to-end ML pipelines that demonstrate production-readiness.`,
    emailTemplate: `Subject: Application for Machine Learning Engineer Position

Dear Hiring Manager,

I am writing to express my strong interest in the ML Engineer position. With expertise in {skills}, I have experience building, training, and deploying machine learning models.

I am passionate about developing ML solutions that are not only accurate but also production-ready and maintainable. I am excited about the opportunity to contribute to your ML initiatives.

Best regards,
[Your Name]`,
  },
};

export async function generateCareerPlan(skills: string, interest: string): Promise<CareerResults> {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = careerData[interest];
  if (!data) throw new Error("Unknown career interest");

  return {
    roles: data.roles,
    guidance: data.guidanceTemplate.replace(/\{skills\}/g, skills),
    email: data.emailTemplate.replace(/\{skills\}/g, skills),
  };
}
