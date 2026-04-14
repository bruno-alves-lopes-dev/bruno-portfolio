import ScrollReveal from "./ScrollReveal";
import { Code2, Layers3, Rocket, ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    icon: Layers3,
    title: "API de Usuários com Java + Spring Boot",
    desc: "Projeto de estudo voltado para prática de back-end, rotas, DTOs, validações, organização em camadas e construção de uma API com foco em estrutura, clareza e boas práticas.",
    tags: ["Java", "Spring Boot", "API REST"],
    status: "Foco principal",
    accent: "from-cyan-400/20 via-sky-500/10 to-transparent",
    link: "https://github.com/bruno-alves-lopes-dev/projeto-java-api-springboot",
  },
  {
    icon: Rocket,
    title: "Portfólio com assistente de IA",
    desc: "Experiência web com identidade mais tecnológica e um assistente integrado para apresentar trajetória, habilidades e objetivos de forma interativa, com IA real no back-end.",
    tags: ["React", "TypeScript", "Node", "IA"],
    status: "Ativo",
    accent: "from-fuchsia-400/20 via-cyan-500/10 to-transparent",
  },
  {
    icon: Code2,
    title: "Projetos Web com HTML, CSS e JavaScript",
    desc: "Interfaces responsivas construídas para prática de estrutura, semântica, estilização, componentização e integração visual com soluções mais completas.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Apoio front-end",
    accent: "from-emerald-400/20 via-cyan-500/10 to-transparent",
    link: "https://github.com/bruno-alves-lopes-dev/pizzaria",
  },
];

export default function ProjectsSection() {
  return (
      <section id="projetos" className="relative overflow-hidden section-padding section-gap">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_20%)]" />

        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <Sparkles size={14} />
                Projetos em evolução
              </div>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Construções que mostram evolução prática
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Projetos desenvolvidos para consolidar conhecimento técnico,
                demonstrar consistência de evolução e transformar estudo em entrega visual.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={0.08 * i}>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <article className="group glass-panel relative h-full cursor-pointer p-6 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)] dark:hover:shadow-[0_26px_70px_rgba(0,0,0,0.28)]">

                      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`} />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-6 flex items-start justify-between gap-4">
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(37,99,235,0.12))] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                            <p.icon size={24} />
                          </span>

                          <span className="rounded-full border border-border/70 bg-background/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                            {p.status}
                          </span>
                        </div>

                        <h3 className="mb-3 font-heading text-xl font-semibold leading-snug text-foreground">
                          {p.title}
                        </h3>

                        <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground">
                          {p.desc}
                        </p>

                        <div className="mb-6 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition group-hover:text-cyan-300">
                          Ver projeto
                          <ArrowUpRight
                            size={16}
                            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </article>
                  </a>
                ) : (
                  <article className="group glass-panel relative h-full p-6 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)] dark:hover:shadow-[0_26px_70px_rgba(0,0,0,0.28)]">

                    {/* conteúdo igual */}

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(37,99,235,0.12))] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                          <p.icon size={24} />
                        </span>

                        <span className="rounded-full border border-border/70 bg-background/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          {p.status}
                        </span>
                      </div>

                      <h3 className="mb-3 font-heading text-xl font-semibold leading-snug text-foreground">
                        {p.title}
                      </h3>

                      <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground">
                        {p.desc}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        Projeto em construção
                      </div>
                    </div>
                  </article>
                )}
              </ScrollReveal>
            ))}