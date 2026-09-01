"use client";

import { useState } from "react";

const skills = [
  ["TypeScript", "Primary language for frontend and backend development."],
  ["Next.js", "Full-stack React framework for modern web applications."],
  ["React", "Building reusable and interactive user interfaces."],
  ["Node.js", "Backend logic, APIs, and server-side development."],
  ["PostgreSQL", "Structured data storage and database management."],
  ["UKG Ready", "Benefits system configuration and end-to-end integration, from discovery through delivery."],
  ["Everything Benefits", "Benefit enrollment and payroll integrations, including MetLife, Principal, COBRA, 401(k), and 403(b)."]
];

const softSkills = [
  ["Client Communication", "Clear, professional communication built through years of direct client and customer interaction."],
  ["Problem Solving", "Strong analytical thinking applied to both technical debugging and client-facing issue resolution."],
  ["Time Management", "Effective multitasking and prioritization in fast-paced, deadline-driven environments."],
  ["Team Collaboration", "Experience mentoring teammates and coordinating across clients, vendors, and internal teams."]
];

const experiences = [
  {
    period: "October 2024 — Present",
    company: "Accenture",
    role: "Integration Consultant",
    points: [
      "Support UKG Ready Benefits system configuration and end-to-end integration activities, from discovery calls through delivered implementations.",
      "Delivered Benefit Enrollment integrations using Everything Benefits, including MetLife and Principal.",
      "Delivered payroll integrations for COBRA, 401(k), and 403(b) plans using Everything Benefits.",
      "Work with API and file-based integrations, data mapping, validation, testing, and troubleshooting.",
      "Collaborate with clients, vendors, and internal teams during onboarding and implementation."
    ]
  },
  {
    period: "June 2024 — Sept 2026",
    company: "Automancers",
    role: "Part-Time | Junior Full Stack Developer",
    points: [
      "Develop and maintain backend API endpoints.",
      "Debug application issues and support feature implementation.",
      "Implement data validation and sanitization to improve stability, security, and performance."
    ]
  },
  {
    period: "June 24, 2024 — October 4, 2024",
    company: "EXL",
    role: "Customer Service Representative",
    points: [
      "Delivered consistent, high-quality customer support in a fast-paced service environment.",
      "Applied strong communication and multitasking skills to resolve client concerns efficiently."
    ]
  },
  {
    period: "April 20, 2022 — June 9, 2024",
    company: "Teleperformance",
    role: "Customer Service Representative",
    points: [
      "Consistently achieved top performance metrics over a two-year tenure.",
      "Mentored new team members on processes, tools, and client communication best practices.",
      "Handled client-facing interactions requiring adaptability and clear communication."
    ]
  },
  {
    period: "October 6, 2020 — January 29, 2022",
    company: "Topdial",
    role: "Sales Representative",
    points: [
      "Built and maintained client relationships through direct sales communication.",
      "Developed foundational skills in negotiation, persuasion, and client needs assessment."
    ]
  }
];

const contactInfo = {
  email: "vegaaj429@gmail.com",
  phone: "+63 966 651 4773",
  location: "Cebu City, Philippines",
  github: "https://github.com/ajvdos",
  linkedin: "https://www.linkedin.com/in/april-justine-vega-113474171/",
  resumeFile: "/VEGA_RESUME.pdf" 
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("Message sent successfully.");
      e.currentTarget.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">AJ<span>.</span></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <div className={`links ${open ? "show" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE DEVELOPMENT • INTEGRATION</p>
          <h1>Building systems that <em>connect</em>.</h1>
          <p className="lead">
            I'm <strong>April Justine C. Vega</strong>, a Junior Full Stack Developer focused on TypeScript and Integration Consultant
            focused on UKG Ready and Everything Benefits, modern web development, APIs, and reliable system integrations.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View My Work</a>
            <a className="button secondary" href="#contact">Let's Connect</a>
          </div>
        </div>

        <div className="hero-photo">
          <img
            src="/Profile.jpg"
            alt="April Justine C. Vega"
          />
        </div>

      </section>

      <section id="about" className="section">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <h2>From development to <span>system integration.</span></h2>
          <div>
            <p>
              I am an IT professional with experience in backend development and integration consulting.
              My work includes API and file-based integrations, data mapping, validation, testing,
              troubleshooting, backend API development, and application improvements.
            </p>
            <p>
              Before moving into tech, I spent several years in client-facing sales and customer service
              roles, which shaped the communication, problem-solving, and collaboration skills I now bring
              to every project.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="section-label">02 / TECHNICAL TOOLKIT</div>
        <h2 className="section-title">The tools I use to <span>build.</span></h2>
        <div className="skills-grid">
          {skills.map(([name, description], index) => (
            <article className="skill-card" key={name}>
              <span className="number">0{index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: "3rem" }}>Skills that <span>support the work.</span></h2>
        <div className="skills-grid">
          {softSkills.map(([name, description], index) => (
            <article className="skill-card" key={name}>
              <span className="number">0{index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-label">03 / EXPERIENCE</div>
        <h2 className="section-title">Experience that connects <span>technology and people.</span></h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.period}`}>
              <div className="period">{item.period}</div>
              <div className="experience-content">
                <p className="company">{item.company}</p>
                <h3>{item.role}</h3>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section alt">
        <div className="section-label">04 / FEATURED PROJECT</div>
        <article className="project">
          <div className="project-header">
            <div>
              <p className="eyebrow">FULL-STACK CONTRIBUTION</p>
              
                className="project-link"
                href="https://www.adeus.app/"
                target="_blank"
                rel="noreferrer"
              <a>
                <h2>Adeus <span>Life.</span></h2>
              </a>
            </div>
            <div className="project-mark">AL</div>
          </div>

          <p className="project-intro">
            A project where I contributed to both frontend and backend development using TypeScript,
            including feature implementation, authentication migration, and homepage updates.
          </p>

          <div className="contribution-grid">
            <div className="contribution">
              <span>01</span>
              <h3>Draft Reminder</h3>
              <p>Created a Draft Reminder feature to support users in managing unfinished drafts.</p>
            </div>
            <div className="contribution">
              <span>02</span>
              <h3>Authentication Migration</h3>
              <p>Migrated the application's authentication from Auth0 to Firebase Authentication.</p>
            </div>
            <div className="contribution">
              <span>03</span>
              <h3>Homepage Update</h3>
              <p>Updated and improved the homepage experience as part of the application's development.</p>
            </div>
          </div>

          <div className="tags">
            <span>TypeScript</span><span>Frontend</span><span>Backend</span><span>Authentication</span>
          </div>
        </article>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-left">
          <div className="section-label">05 / CONTACT</div>
          <h2>Have a project or opportunity?<br/><span>Let's talk.</span></h2>
          <p>
            I'm always interested in new opportunities and challenging projects. Whether you have a
            question about my work, want to collaborate, or just want to say hello, feel free to reach out!
          </p>

          <a className="button secondary resume-download" href={contactInfo.resumeFile} download>
            <span aria-hidden="true">⭳</span> Download Resume
          </a>

          <div className="contact-info-cards">
            <a className="contact-card" href={`mailto:${contactInfo.email}`}>
              <span className="contact-icon" aria-hidden="true">✉</span>
              <span>
                <span className="contact-label">Email</span>
                <span className="contact-value">{contactInfo.email}</span>
              </span>
            </a>

            <a className="contact-card" href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}>
              <span className="contact-icon" aria-hidden="true">☎</span>
              <span>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{contactInfo.phone}</span>
              </span>
            </a>

            <div className="contact-card">
              <span className="contact-icon" aria-hidden="true">📍</span>
              <span>
                <span className="contact-label">Location</span>
                <span className="contact-value">{contactInfo.location}</span>
              </span>
            </div>
          </div>

          <div className="contact-info-social">
            <a href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
              </svg>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M0 1.15C0 .52.53 0 1.18 0h13.64C15.47 0 16 .52 16 1.15v13.7c0 .63-.53 1.15-1.18 1.15H1.18C.53 16 0 15.48 0 14.85V1.15ZM4.75 13.4V6.16H2.4v7.24h2.35Zm-1.17-8.23c.82 0 1.33-.55 1.33-1.23-.01-.7-.51-1.23-1.31-1.23-.8 0-1.33.53-1.33 1.23 0 .68.51 1.23 1.3 1.23h.01ZM8.9 13.4V9.36c0-.22.02-.43.08-.59.17-.43.57-.88 1.24-.88.87 0 1.22.67 1.22 1.64v3.87h2.35V9.25c0-2.19-1.16-3.21-2.72-3.21-1.25 0-1.81.7-2.12 1.19h.02V6.16H6.62c.03.66 0 7.24 0 7.24H8.9Z"/>
              </svg>
            </a>
          </div>
        </div>

        <form onSubmit={submitContact} className="contact-form">
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email address" required />
          <input name="subject" placeholder="Subject (optional)" />
          <textarea name="message" placeholder="Tell me about your message..." rows={6} required />
          <button className="button primary" type="submit">Send Message →</button>
          {status && <p className="status">{status}</p>}
        </form>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} April Justine C. Vega</span>
        <span>Designed & built with Next.js + TypeScript</span>
      </footer>
    </main>
  );
}