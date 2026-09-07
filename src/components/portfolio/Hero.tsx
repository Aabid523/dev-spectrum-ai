import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Code2, Briefcase } from "lucide-react";
import { links, profile } from "@/content/portfolio";

const rotating = [
  "ASP.NET Core Web APIs",
  "Entity Framework Core models",
  "SQL Server data layers",
  "AI-assisted applications",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = rotating[i % rotating.length] ?? "";
    const done = !del && text === word;
    const empty = del && text === "";
    if (done) {
      const t = setTimeout(() => setDel(true), 1600);
      return () => clearTimeout(t);
    }
    if (empty) {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      del ? 34 : 62,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

const badges = ["C#", "ASP.NET Core", "EF Core", "SQL Server", "REST API", "Git", "Power BI", "AI"];

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="hero-glow" />
      <div aria-hidden className="grid-lines" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            I Build <span className="text-gradient">Scalable Backend Solutions</span> &amp;
            Intelligent Applications.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s Work Together
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SocialLink href={links.github} label="GitHub">
              <Github size={16} />
            </SocialLink>
            <SocialLink href={links.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </SocialLink>
            <SocialLink href={links.codeforces} label="Codeforces">
              <Code2 size={16} />
            </SocialLink>
            <SocialLink href={links.mostaql} label="Mostaql">
              <Briefcase size={16} />
            </SocialLink>
          </div>
        </div>

        <div className="card-glass overflow-hidden p-0">
          <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              backend-service — dotnet
            </span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-muted-foreground sm:text-[13px]">
            <code>
              <span className="text-accent">public class</span>{" "}
              <span className="text-foreground">MaintenanceController</span> :{" "}
              <span className="text-primary">ControllerBase</span>
              {"\n{\n    "}
              <span className="text-accent">[HttpGet(</span>
              <span className="text-chart-2">&quot;/api/requests&quot;</span>
              <span className="text-accent">)]</span>
              {"\n    "}
              <span className="text-accent">public async</span> Task&lt;IActionResult&gt;{" "}
              <span className="text-foreground">GetAsync</span>() =&gt;
              {"\n        "}Ok(<span className="text-accent">await</span>{" "}
              _db.Requests.AsNoTracking().ToListAsync());
              {"\n}"}
            </code>
          </pre>
          <div className="border-t border-border/70 px-5 py-4 font-mono text-xs text-muted-foreground">
            <span className="text-accent">$</span> building{" "}
            <span className="text-foreground">{typed}</span>
            <span className="caret" />
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border/70 px-5 py-4">
            {badges.map((b, idx) => (
              <span key={b} className="badge float-badge" style={{ animationDelay: `${idx * 220}ms` }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
    >
      {children}
      {label}
    </a>
  );
}
