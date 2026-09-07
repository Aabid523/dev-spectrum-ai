import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  CareerGoal,
  CompetitiveProgramming,
  Contact,
  Different,
  Education,
  Experience,
  Footer,
  Projects,
  Services,
  Skills,
} from "@/components/portfolio/Sections";
import { profile } from "@/content/portfolio";

const title = `${profile.name} — .NET Backend Developer & Software Engineer`;
const description =
  "Computer Science student and Junior .NET Developer building scalable ASP.NET Core backends, REST APIs and AI-assisted applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Junior Software Engineer / .NET Backend Developer",
          email: `mailto:${profile.email}`,
          alumniOf: "Menoufia University",
          knowsAbout: [
            "C#",
            "ASP.NET Core",
            "Entity Framework Core",
            "SQL Server",
            "REST APIs",
            "Artificial Intelligence",
            "Cyber Security",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <Different />
        <CompetitiveProgramming />
        <CareerGoal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
