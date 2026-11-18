import { useEffect, useState } from "react";
import { Mail, FileText, Moon, Sun, Menu, X, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  profile,
  bio,
  news,
  currentResearch,
  publications,
  talks,
  research,
  work,
  projects,
  education,
  skills,
  certifications,
  leadership,
  type Role,
} from "./data";

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

const NAV = [
  { id: "about", label: "about" },
  { id: "research", label: "research" },
  { id: "news", label: "news" },
  { id: "publications", label: "publications" },
  { id: "talks", label: "talks" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
];

function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, () => setDark((d) => !d)] as const;
}

function Nav() {
  const [dark, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
        <a href="#about" className="font-serif text-lg text-foreground">
          <span className="font-semibold">Ayushree</span> Kharel
        </a>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="nav-link">
              {n.label}
            </a>
          ))}
          <a href={asset(profile.cv)} target="_blank" rel="noreferrer" className="nav-link">
            cv
          </a>
          <button onClick={toggle} aria-label="Toggle theme" className="icon-btn">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggle} aria-label="Toggle theme" className="icon-btn">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="icon-btn">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-border px-5 py-4 text-sm md:hidden">
          {[...NAV, { id: "", label: "cv" }].map((n) => (
            <a
              key={n.label}
              href={n.id ? `#${n.id}` : asset(profile.cv)}
              onClick={() => setOpen(false)}
              className="nav-link"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-10">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function Authors({ text }: { text: string }) {
  const parts = text.split("A. Kharel");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <strong className="font-semibold text-foreground">A. Kharel</strong>}
        </span>
      ))}
    </>
  );
}

function Roles({ heading, roles }: { heading: string; roles: Role[] }) {
  return (
    <div className="mb-8">
      <h3 className="sub-title">{heading}</h3>
      <div className="space-y-6">
        {roles.map((r) => (
          <div key={r.title + r.org} className="timeline-item">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-semibold text-foreground">{r.title}</p>
              <p className="text-sm text-muted-foreground">{r.dates}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {r.org} · {r.place}
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem]">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const pubsByYear = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-16">
        {/* About */}
        <section id="about" className="scroll-mt-20 pt-14 pb-6">
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">
            <span className="font-semibold">Ayushree</span> Kharel
          </h1>
          <p className="mt-2 italic text-muted-foreground">{profile.tagline}</p>

          <div className="mt-8 flex flex-col-reverse gap-8 md:flex-row md:items-start">
            <div className="flex-1 space-y-4 leading-relaxed">
              {bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <figure className="mx-auto w-44 shrink-0 md:mx-0 md:w-52">
              <img
                src={asset(profile.photo)}
                alt={profile.name}
                className="aspect-square w-full rounded-lg object-cover shadow-sm ring-1 ring-border"
              />
              <figcaption className="mt-3 text-center text-xs leading-snug text-muted-foreground">
                {profile.role}
                <br />
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} /> {profile.location}
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="pill">
              <Mail size={14} /> email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="pill">
              <FaGithub size={14} /> github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill">
              <FaLinkedin size={14} /> linkedin
            </a>
            <a href={asset(profile.cv)} target="_blank" rel="noreferrer" className="pill">
              <FileText size={14} /> cv
            </a>
          </div>
        </section>

        {/* Current research */}
        <Section id="research" title="current research">
          <div className="space-y-6">
            {currentResearch.map((r) => (
              <article key={r.title} className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-semibold leading-snug text-foreground">{r.title}</p>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent-brand">
                    {r.status}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed">{r.summary}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem]">
                  {r.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* News */}
        <Section id="news" title="news">
          <table className="w-full text-[0.95rem]">
            <tbody>
              {news.map((n) => (
                <tr key={n.text} className="align-top">
                  <th className="w-24 whitespace-nowrap py-2 pr-4 text-left font-medium text-accent-brand">
                    {n.date}
                  </th>
                  <td className="py-2">
                    {n.text}{" "}
                    {n.link && (
                      <a
                        href={n.link.href}
                        className="link"
                        {...(n.link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        [{n.link.label}]
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* Publications */}
        <Section id="publications" title="publications">
          {pubsByYear.map((year) => (
            <div key={year} className="relative mb-6">
              <p className="year-label">{year}</p>
              <ol className="space-y-5">
                {publications
                  .filter((p) => p.year === year)
                  .map((p) => (
                    <li key={p.title} className="flex gap-4">
                      <span className="venue-tag">{p.venue}</span>
                      <div>
                        <p className="font-semibold leading-snug text-foreground">{p.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          <Authors text={p.authors} />
                        </p>
                        <p className="text-sm italic text-muted-foreground">
                          Accepted to {p.where}, {p.year}
                        </p>
                        {p.links && (
                          <div className="mt-2 flex gap-2">
                            {p.links.map((l) => (
                              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-xs">
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
        </Section>

        {/* Talks */}
        <Section id="talks" title="talks & posters">
          <div className="space-y-8">
            {talks.map((t) => (
              <article key={t.event + t.kind}>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-accent-brand">{t.date}</span> · {t.kind}
                  {t.location && <> · {t.location}</>}
                </p>
                <p className="mt-1 font-semibold text-foreground">{t.event}</p>
                <p className="italic">{t.title}</p>
                {t.description && <p className="mt-2 leading-relaxed">{t.description}</p>}
                {t.photos && t.photos.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {t.photos.map((ph) => (
                      <img
                        key={ph.src}
                        src={asset(ph.src)}
                        alt={ph.alt}
                        loading="lazy"
                        className="w-full rounded-lg object-cover ring-1 ring-border"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="experience">
          <Roles heading="Research" roles={research} />
          <Roles heading="Industry" roles={work} />
          <h3 className="sub-title">Education</h3>
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p>
                  <span className="font-semibold text-foreground">{e.school}</span>{" "}
                  <span className="text-muted-foreground">· {e.degree}</span>
                </p>
                <p className="text-sm text-muted-foreground">{e.dates}</p>
              </div>
            ))}
            <p className="pt-1 text-sm text-muted-foreground">
              Certification: {certifications.join(", ")}
            </p>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="projects">
          <div className="grid gap-4">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <p className="font-semibold text-foreground">{p.name}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem]">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="skills">
          <dl className="space-y-3">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-1 sm:grid-cols-[13rem_1fr]">
                <dt className="font-medium text-foreground">{s.group}</dt>
                <dd className="text-muted-foreground">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Leadership */}
        <Section id="leadership" title="leadership & achievements">
          <ul className="space-y-2">
            {leadership.map((l) => (
              <li key={l.title}>
                <span className="font-medium text-foreground">{l.title}</span>
                {l.dates && <span className="text-sm text-muted-foreground"> ({l.dates})</span>}
                {l.text && <span>: {l.text}</span>}
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="mb-3 flex justify-center gap-5 text-foreground">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-link">
            <Mail size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link">
            <FaGithub size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link">
            <FaLinkedin size={20} />
          </a>
        </div>
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
