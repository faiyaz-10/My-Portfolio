import React, { useState } from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin,
  Facebook, Mail, Phone, MapPin, Menu, X, Code2, Sparkles, ExternalLink,
  GraduationCap, BriefcaseBusiness, Send, Download, CheckCircle2
} from "lucide-react";
import { profile, skills, projects, education } from "./data";

const navItems = [
  ["About", "#about"], ["Skills", "#skills"], ["Education", "#education"],
  ["Projects", "#projects"], ["Contact", "#contact"]
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">F</span><span>Faiyaz<span className="brand-dot">.</span></span>
        </Link>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={isHome ? href : `/${href}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={isHome ? "#contact" : "/#contact"} onClick={() => setOpen(false)}>Get in Touch <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function SocialLinks() {
  return <div className="social-links">
    <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
    <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
    <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
  </div>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function ProjectCard({ project, index }) {
  return <article className="project-card">
    <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.name}`}>
      {project.images.length > 0
        ? <img src={project.images[0].src} alt={project.images[0].alt} />
        : <span className="image-unavailable">Project screenshot not supplied</span>}
      <span className="image-arrow"><ArrowUpRight size={20} /></span>
    </Link>
    <div className="project-content">
      <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
      <h3>{project.name}</h3>
      <p>{project.short}</p>
      <div className="tag-list">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
      <Link className="text-link" to={`/projects/${project.slug}`}>View project details <ArrowRight size={16} /></Link>
    </div>
  </article>;
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(event) {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Quietly ignore automated submissions caught by the honeypot field.
    if (form.website.trim()) return;

    setSending(true);
    setStatus({ type: "sending", message: "Sending your message…" });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || "Portfolio contact message",
          message: form.message.trim(),
          _subject: `New portfolio message from ${form.name.trim()}`,
          _template: "table",
          _honey: ""
        })
      });

      const result = await response.json();
      if (!response.ok || String(result.success).toLowerCase() !== "true") {
        throw new Error(result.message || "The message could not be sent. Please try again.");
      }

      setForm({ name: "", email: "", subject: "", message: "", website: "" });
      setStatus({
        type: "success",
        message: "Your message has been submitted. Thank you for reaching out!"
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please email me directly instead."
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" type="text" placeholder="Enter your name" value={form.name}
            onChange={updateField} autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Email address
          <input name="email" type="email" placeholder="you@example.com" value={form.email}
            onChange={updateField} autoComplete="email" required maxLength={160} />
        </label>
      </div>
      <label>
        Subject <span className="optional-label">(optional)</span>
        <input name="subject" type="text" placeholder="What would you like to discuss?"
          value={form.subject} onChange={updateField} maxLength={140} />
      </label>
      <label>
        Your message
        <textarea name="message" placeholder="Write your message here…" value={form.message}
          onChange={updateField} rows={5} required minLength={10} maxLength={5000} />
      </label>
      <label className="honeypot" aria-hidden="true">
        Leave this field empty
        <input name="website" type="text" value={form.website} onChange={updateField}
          tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary contact-submit" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send message"} <Send size={16} />
        </button>
        <span className="form-privacy-note">Your message will be sent to my email.</span>
      </div>
      <p className={`form-status ${status.type}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}

function Home() {
  return <>
    <Header />
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"></span> Open to opportunities</div>
          <p className="hero-kicker">HELLO, I'M FAIYAZ SHAHRIAR</p>
          <h1>I build for the<br /><span>web & beyond.</span></h1>
          <p className="hero-description">I'm a Computer Science and Engineering student and aspiring software engineer, passionate about building useful products and exploring AI/ML.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <div className="resume-actions">
              <a className="button button-outline" href={profile.resume} download><Download size={17} /> Download résumé</a>
              <a className="resume-view-link" href={profile.resume} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <SocialLinks />
          <div className="hero-location"><MapPin size={15} /> {profile.location}</div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <img
                className="profile-photo"
                src="/images/profile.jpg"
                alt="Faiyaz Shahriar"
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
              <div className="portrait-initials portrait-fallback">FS</div>
            </div>
            <div className="portrait-caption"><Code2 size={17} /><span>Curious mind. Builder's mindset.</span></div>
          </div>
          <div className="floating-card floating-card-top"><Sparkles size={17} /><span>Always learning</span></div>
          <div className="floating-card floating-card-bottom"><span className="mini-dot"></span><span>Ideas into products</span></div>
          <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
        </div>
        <a href="#about" className="scroll-cue"><ArrowDown size={15} /> Scroll to explore</a>
      </section>

      <section id="about" className="section container">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Engineer in progress.<br /><span className="muted-heading">Curious by nature.</span></>} />
        <div className="about-grid">
          <div className="about-lead"><p className="large-copy">I enjoy turning ideas into practical, well-crafted digital experiences.</p></div>
          <div className="about-body">
            <p>My programming journey started with a curiosity about how technology works. That curiosity grew into a passion for software development, where I enjoy taking an idea from a rough concept to a working product.</p>
            <p>I've been building with JavaScript and the modern web ecosystem, especially React, Next.js, Node.js, Express, and MongoDB. I like solving problems across the stack, learning how systems fit together, and improving the details that make an application reliable and easy to use.</p>
            <p>Beyond development, I'm interested in AI/ML, AI safety, responsible AI, and human-centered technology. I also enjoy research-oriented problem solving and collaborating with people who are excited to build something meaningful.</p>
            <div className="about-facts">
              <div><strong>3.5+</strong><span>Current CGPA</span></div>
              <div><strong>4+</strong><span>Selected projects</span></div>
              <div><strong>∞</strong><span>Things to learn</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & technologies" text="Tools and technologies I've used while building projects and strengthening my engineering fundamentals." />
          <div className="skills-grid">
            {skills.map((group, i) => <div className="skill-card" key={group.group}>
              <div className="skill-number">0{i + 1}</div><h3>{group.group}</h3>
              <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </div>)}
          </div>
        </div>
      </section>

      <section id="education" className="section container">
        <SectionHeading eyebrow="MY BACKGROUND" title="Education" text="The academic foundation behind my interest in software engineering and emerging technologies." />
        <div className="timeline">
          {education.map((item, i) => <div className="timeline-item" key={item.degree}>
            <div className="timeline-marker"><GraduationCap size={18} /></div>
            <div className="timeline-content"><span className="timeline-period">{item.period}</span><h3>{item.degree}</h3><p>{item.institution}</p><span className="education-detail">{item.detail}</span></div>
          </div>)}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading eyebrow="EXPERIENCE & COMMUNITY" title="Learning by building and sharing" text="I value practical learning, teamwork, and contributing to developer communities." />
          <div className="experience-card">
            <div className="experience-icon"><BriefcaseBusiness size={22} /></div>
            <div><span className="eyebrow">COMMUNITY EXPERIENCE</span><h3>Campus Ambassador — Phitron</h3><p>Participated in a campus ambassador initiative, building communication, community engagement, and peer-to-peer learning experience.</p></div>
          </div>
          <p className="note-small">I am currently focused on growing through hands-on projects, research, and continuous learning. I have not listed any full-time professional role that I haven't held.</p>
        </div>
      </section>

      <section id="projects" className="section container">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects I've built" text="A selection of academic and personal projects that reflect how I learn, experiment, and solve problems." />
        <div className="projects-grid">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="contact-copy">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something<br /><span>meaningful together.</span></h2>
            <p>I'm open to internships, entry-level opportunities, collaborations, and conversations about software and AI. Send me a message and I'll get back to you.</p>
            <div className="contact-direct-links">
              <a href={`mailto:${profile.email}`}><Mail size={18} /><span>{profile.email}</span><ArrowUpRight size={16} /></a>
              <a href={`tel:${profile.phone}`}><Phone size={18} /><span>{profile.phone}</span><ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-social"><SocialLinks /></div>
          </div>
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <h3>Send me a message</h3>
              <p>Fill out the form below. Your message will arrive in my inbox.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <><Header /><main className="container not-found"><h1>Project not found</h1><Link className="text-link" to="/">Back to home <ArrowRight size={16} /></Link></main><Footer /></>;
  return <>
    <Header />
    <main className="detail-page container">
      <Link to="/#projects" className="back-link"><ArrowLeft size={16} /> Back to projects</Link>
      <div className="detail-hero">
        <div><span className="eyebrow">{project.category}</span><h1>{project.name}</h1><p>{project.short}</p></div>
        {project.images.length > 0
          ? <div className="detail-gallery">
            {project.images.map(image => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
          : <div className="detail-gallery-unavailable">No project screenshot was included for this project.</div>}
      </div>
      <div className="detail-layout">
        <div className="detail-main">
          <section><span className="eyebrow">OVERVIEW</span><h2>About this project</h2><p>{project.description}</p></section>
          <section><span className="eyebrow">WHAT IT INCLUDES</span><h2>Features</h2><ul className="detail-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
          <section><span className="eyebrow">THE PROCESS</span><h2>Challenges I worked through</h2><ul className="detail-list">{project.challenges.map(x => <li key={x}>{x}</li>)}</ul></section>
          <section><span className="eyebrow">WHAT'S NEXT</span><h2>Future improvements</h2><ul className="detail-list">{project.improvements.map(x => <li key={x}>{x}</li>)}</ul></section>
        </div>
        <aside className="detail-sidebar">
          <div className="sidebar-card"><h3>Technology stack</h3><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          <div className="sidebar-card"><h3>Project links</h3>
            {project.live !== "#" && <a className="sidebar-link" href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live project <ArrowUpRight size={15} /></a>}
            {project.live === "#" && <p className="link-unavailable">Live project URL not provided.</p>}
            <a className="sidebar-link" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> {project.slug === "iot-fall-detection" ? "GitHub profile (repository URL not provided)" : "GitHub repository"} <ArrowUpRight size={15} /></a>
          </div>
          <div className="sidebar-callout"><CheckCircle2 size={19} /><p>Interested in the details? I'd be happy to walk you through the implementation.</p><a href={`mailto:${profile.email}`}>Get in touch <ArrowRight size={15} /></a></div>
        </aside>
      </div>
    </main>
    <Footer />
  </>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Link to="/" className="brand"><span className="brand-mark">F</span><span>Faiyaz<span className="brand-dot">.</span></span></Link><span>Designed & built with curiosity · © {new Date().getFullYear()} Faiyaz Shahriar</span><a href="#top" aria-label="Back to top">Back to top ↑</a></div></footer>;
}

export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetail />} /></Routes>;
}
