"use client";

import { useState } from "react";

const skills = [
  ["TypeScript", "Primary language for frontend and backend development."],
  ["Next.js", "Full-stack React framework for modern web applications."],
  ["React", "Building reusable and interactive user interfaces."],
  ["Node.js", "Backend logic, APIs, and server-side development."],
  ["PostgreSQL", "Structured data storage and database management."]
];

const experiences = [
  {
    period: "Oct 2024 — Present",
    company: "Accenture",
    role: "Integration Consultant",
    points: [
      "Support UKG Ready Benefits system configuration and end-to-end integration activities.",
      "Work with API and file-based integrations, data mapping, validation, testing, and troubleshooting.",
      "Collaborate with clients, vendors, and internal teams during onboarding and implementation."
    ]
  },
  {
    period: "Jun 2024 — Present",
    company: "Automancers",
    role: "Part-Time Backend Developer",
    points: [
      "Develop and maintain backend API endpoints.",
      "Debug application issues and support feature implementation.",
      "Implement data validation and sanitization to improve stability, security, and performance."
    ]
  }
];

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
            I'm <strong>April Justine C. Vega</strong>, a Backend Developer and Integration Consultant
            focused on TypeScript, modern web development, APIs, and reliable system integrations.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View My Work</a>
            <a className="button secondary" href="#contact">Let's Connect</a>
          </div>
        </div>

        <div className="system-card">
          <div className="terminal-top"><span></span><span></span><span></span><b>system.map</b></div>
          <div className="flow">
            <div className="node">React UI</div>
            <i>→</i>
            <div className="node">Next.js</div>
            <i>→</i>
            <div className="node">API</div>
            <i>→</i>
            <div className="node accent">PostgreSQL</div>
          </div>
          <div className="terminal-lines">
            <p><span>01</span> interface.ready = true</p>
            <p><span>02</span> api.connected = true</p>
            <p><span>03</span> data.flow = "reliable"</p>
            <p><span>04</span> status = <b>"building"</b></p>
          </div>
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
              I enjoy solving technical problems and building practical solutions while collaborating
              with development teams, clients, vendors, and stakeholders.
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
      </section>

      <section id="experience" className="section">
        <div className="section-label">03 / EXPERIENCE</div>
        <h2 className="section-title">Experience that connects <span>technology and people.</span></h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="experience-card" key={item.company}>
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
              <h2>Adeus <span>Life.</span></h2>
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
        <div>
          <div className="section-label">05 / CONTACT</div>
          <h2>Have a project or opportunity?<br/><span>Let's talk.</span></h2>
          <p>Send me a message and it will be saved through the portfolio's backend API.</p>
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