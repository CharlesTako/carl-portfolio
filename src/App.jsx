import React from "react";

export default function App() {
  const profile = {
    name: "Charles Takomana",
    headline:
      "Business Analytics Graduate | Data Storyteller | Applied AI Researcher",
    location: "Philadelphia / Greater Philadelphia Area",
    email: "carlostakomana@gmail.com",
    linkedin: "https://www.linkedin.com/in/charlestakomana",
    github: "https://github.com/CharlesTako",
  };

  const skills = [
    "Business Analytics",
    "Data Visualization",
    "SQL",
    "Python",
    "R",
    "Dashboard Development",
    "Research Analysis",
    "Agentic AI Workflows",
  ];

  const projects = [
    {
      title: "Data Quilting Research",
      description:
        "Exploring multimodal analytics and agentic AI workflows that synthesize text, speech, and motion signals into evidence-grounded insights.",
      icon: "📊",
    },
    {
      title: "Marketing Campaign ROI Dashboard",
      description:
        "Built reporting structures to evaluate campaign performance, improve visibility, and support stronger decision-making.",
      icon: "💼",
    },
    {
      title: "Phillies / MLB Analytics Capstone",
      description:
        "Analyzed ticketing and attendance patterns using Python, Excel, and R to identify business insights from sports data.",
      icon: "🎓",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_30%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              Business Analytics • AI Research • Data Storytelling
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I’m <span className="text-sky-300">{profile.name}</span>.
              </h1>

              <p className="max-w-2xl text-xl leading-8 text-slate-300">
                {profile.headline}
              </p>

              <p className="max-w-2xl text-base leading-7 text-slate-400">
                I build data-driven solutions that help organizations understand
                patterns, measure performance, and make better decisions. My
                background combines business analytics, computer engineering,
                and applied AI research.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-sky-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Connect on LinkedIn →
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-2xl border border-slate-600 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span>{profile.location}</span>
              <span>Drexel University, LeBow College of Business</span>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-700 bg-white/10 shadow-2xl backdrop-blur">
              <div className="p-8">
                <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 to-blue-600 text-4xl font-bold text-slate-950">
                  CT
                </div>

                <h2 className="mb-3 text-2xl font-semibold text-white">
                  About Me
                </h2>

                <p className="leading-7 text-slate-300">
                  I enjoy turning messy information into clear insights. Whether
                  I am building dashboards, analyzing business problems, or
                  exploring agentic AI workflows, my goal is to make data easier
                  to understand and easier to act on.
                </p>

                <div className="mt-8 grid gap-3">
                  <a
                    className="flex items-center justify-between rounded-2xl bg-slate-900/70 p-4 text-slate-200 transition hover:bg-slate-800"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile <span>→</span>
                  </a>

                  <a
                    className="flex items-center justify-between rounded-2xl bg-slate-900/70 p-4 text-slate-200 transition hover:bg-slate-800"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub / Portfolio <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              What I Do
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              I turn raw information into useful decisions.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              My strengths sit across analytics, reporting, research, and
              communication, the kind of mix that helps teams move from data
              overload to clear action.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200 shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Featured Work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Projects & Experience Highlights
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 shadow-xl"
              >
                <div className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-2xl">
                    {project.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/20 to-blue-600/10 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s connect.</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            I’m always open to meaningful conversations around analytics,
            business intelligence, AI-assisted workflows, research, and
            opportunities to create impact through data.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              View LinkedIn →
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-2xl border border-slate-500 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with clarity,
        purpose, and data-driven ambition.
      </footer>
    </main>
  );
}