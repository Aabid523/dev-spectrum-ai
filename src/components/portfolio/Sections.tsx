import {
  Server,
  Plug,
  Layers,
  Database,
  Brain,
  BarChart3,
  Bug,
  Sparkles,
  Github,
  Linkedin,
  Code2,
  Briefcase,
  Mail,
  ExternalLink,
  GraduationCap,
  Trophy,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  aboutParagraphs,
  aboutStats,
  careerGoal,
  cpSkills,
  differentiators,
  education,
  experience,
  featuredProject,
  links,
  profile,
  services,
  skillGroups,
} from "@/content/portfolio";

const serviceIcons: Record<string, LucideIcon> = {
  server: Server,
  plug: Plug,
  layers: Layers,
  database: Database,
  brain: Brain,
  chart: BarChart3,
  bug: Bug,
  sparkles: Sparkles,
};

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend engineering, with a wide technical curiosity."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {aboutStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="card-hover rounded-xl border border-border bg-surface-2/50 p-4">
                <p className="text-sm font-medium text-foreground">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background & training"
      intro="Formal computer science study combined with structured competitive programming training."
    >
      <ol className="timeline">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 80}>
            <li className="timeline-item">
              <span className="timeline-dot">
                <GraduationCap size={14} />
              </span>
              <div className="card-hover rounded-xl border border-border bg-surface-2/40 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{e.org}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-accent">{e.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                  <Trophy size={13} /> {e.meta}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      intro="Real-world backend development inside a collaborative, Agile engineering team."
    >
      <ol className="timeline">
        {experience.map((x, i) => (
          <Reveal key={x.role} delay={i * 80}>
            <li className="timeline-item">
              <span className="timeline-dot">
                <Server size={14} />
              </span>
              <div className="card-glass p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{x.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{x.period}</span>
                </div>
                <p className="mt-1 text-sm text-accent">{x.org}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {x.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {x.tags.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Freelance"
      title="Services I Offer on Mostaql"
      intro="Backend, data and AI work delivered with clean architecture and maintainable code."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon] ?? Server;
          return (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <article className="card-hover flex h-full flex-col rounded-xl border border-border bg-surface-2/40 p-5">
                <span className="icon-chip">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Reveal>
        <div className="card-glass mt-8 flex flex-wrap items-center justify-between gap-4 p-6">
          <p className="text-base font-medium text-foreground">
            Have a project in mind? Let&apos;s discuss it.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={links.mostaql} target="_blank" rel="noreferrer noopener" className="btn-ghost">
              Mostaql Profile <ExternalLink size={15} />
            </a>
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skills & tools"
      intro="Technologies I work with day to day, grouped by area rather than arbitrary percentages."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 70}>
            <div className="card-hover h-full rounded-xl border border-border bg-surface-2/40 p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="badge">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  const p = featuredProject;
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured project"
      intro="Selected work that shows how I design and build backend systems."
    >
      <Reveal>
        <article className="card-glass overflow-hidden p-0">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="order-2 p-7 sm:p-9 lg:order-1">
              <p className="eyebrow">Featured</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-accent">{p.subtitle}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <p className="mt-5 rounded-lg border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-foreground">
                {p.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={p.githubUrl} target="_blank" rel="noreferrer noopener" className="btn-primary">
                  <Github size={16} /> GitHub
                </a>
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer noopener" className="btn-ghost">
                    Live Demo <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="btn-ghost cursor-not-allowed opacity-55">Live Demo — soon</span>
                )}
              </div>
            </div>

            <div className="order-1 border-b border-border/70 bg-surface-2/40 p-7 sm:p-9 lg:order-2 lg:border-b-0 lg:border-l">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                System architecture
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { k: "Client", v: "ASP.NET Core MVC views" },
                  { k: "API", v: "REST endpoints · Web API" },
                  { k: "Domain", v: "Services · SOLID components" },
                  { k: "Data", v: "EF Core · SQL Server" },
                  { k: "AI Layer", v: "Complaint classification & prioritization" },
                ].map((row, idx, arr) => (
                  <div key={row.k}>
                    <div className="rounded-lg border border-border bg-background/60 px-4 py-3">
                      <p className="font-mono text-xs text-accent">{row.k}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{row.v}</p>
                    </div>
                    {idx < arr.length - 1 ? (
                      <div aria-hidden className="mx-auto h-4 w-px bg-border" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

export function Different() {
  return (
    <section id="different" className="scroll-mt-24 border-y border-border bg-surface-2/30 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <header className="mb-12 max-w-3xl">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What Makes Me Different
            </h2>
          </header>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 70}>
              <div className="h-full bg-background p-6 transition-colors duration-300 hover:bg-surface-2/70">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompetitiveProgramming() {
  return (
    <Section
      id="competitive"
      eyebrow="Problem Solving"
      title="Competitive programming"
      intro="Consistent algorithmic practice that sharpens how I approach engineering problems."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal>
          <div className="card-glass h-full p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Codeforces
            </p>
            <p className="mt-4 text-4xl font-semibold text-gradient">1243</p>
            <p className="mt-2 text-sm text-muted-foreground">Rank: Pupil · since March 2025</p>
            <a
              href={links.codeforces}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost mt-6"
            >
              <Code2 size={16} /> View profile
            </a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card-glass h-full p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              ICPC Community
            </p>
            <p className="mt-4 text-2xl font-semibold text-foreground">Phase 1 Trainee</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ranked <span className="text-accent">2nd</span> among 56 trainees on Virtual Judge.
            </p>
            <a href={links.github} target="_blank" rel="noreferrer noopener" className="btn-ghost mt-6">
              <Github size={16} /> Solutions on GitHub
            </a>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="card-glass h-full p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Focus areas
            </p>
            <ul className="mt-4 space-y-3">
              {cpSkills.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="node-dot" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function CareerGoal() {
  return (
    <Section id="goal" eyebrow="Vision" title="Where I'm Heading">
      <Reveal>
        <div className="card-glass relative overflow-hidden p-8 sm:p-10">
          <span className="icon-chip">
            <Target size={18} />
          </span>
          <div className="mt-5 max-w-3xl space-y-4">
            {careerGoal.map((t) => (
              <p key={t.slice(0, 20)} className="text-base leading-relaxed text-muted-foreground">
                {t}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something Useful Together."
      intro="Have a software idea, backend project, API, dashboard, or AI solution in mind? I'm always interested in discussing new opportunities and challenging technical problems."
    >
      <Reveal>
        <div className="card-glass p-7 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> Contact Me
            </a>
            <a href={links.github} target="_blank" rel="noreferrer noopener" className="btn-ghost">
              <Github size={16} /> View My GitHub
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin profile" href={links.linkedin} />
            <ContactRow icon={Github} label="GitHub" value="github profile" href={links.github} />
            <ContactRow icon={Briefcase} label="Mostaql" value="freelance profile" href={links.mostaql} />
            <ContactRow icon={Code2} label="Codeforces" value="competitive profile" href={links.codeforces} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer noopener"
      className="card-hover flex items-center gap-3 rounded-xl border border-border bg-surface-2/40 px-4 py-3"
    >
      <span className="icon-chip shrink-0">
        <Icon size={16} />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm text-foreground">{value}</span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex gap-4 text-muted-foreground">
          <a href={links.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={links.codeforces} target="_blank" rel="noreferrer noopener" aria-label="Codeforces">
            <Code2 size={17} />
          </a>
          <a href={links.mostaql} target="_blank" rel="noreferrer noopener" aria-label="Mostaql">
            <Briefcase size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
