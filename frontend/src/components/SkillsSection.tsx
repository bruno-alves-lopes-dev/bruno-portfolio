import ScrollReveal from "./ScrollReveal";
import {Sparkles, Cpu, Code2, Briefcase} from "lucide-react";

const skillGroups = [
    {
        category: "Back-end",
        icon: Cpu,
        accent: "from-cyan-400/20 via-sky-500/10 to-transparent",
        skills: [
            {name: "Java", level: 64},
            {name: "Spring Boot", level: 58},
            {name: "APIs REST", level: 60},
            {name: "Lógica de programação", level: 70},
        ],
    },
    {
        category: "Front-end de apoio",
        icon: Code2,
        accent: "from-fuchsia-400/20 via-cyan-500/10 to-transparent",
        skills: [
            {name: "HTML & CSS", level: 78},
            {name: "JavaScript", level: 62},
            {name: "React", level: 55},
            {name: "TypeScript", level: 52},
        ],
    },
    {
        category: "Ferramentas e perfil",
        icon: Briefcase,
        accent: "from-emerald-400/20 via-cyan-500/10 to-transparent",
        skills: [
            {name: "Git & GitHub", level: 64},
            {name: "Pacote Office", level: 92},
            {name: "Organização de processos", level: 90},
            {name: "Responsabilidade", level: 93},
        ],
    },
];

export default function SkillsSection() {
    return (
        <section id="habilidades" className="relative overflow-hidden section-padding section-gap">
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_22%)]"/>

            <div className="mx-auto max-w-7xl">
                <ScrollReveal>
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <div
                            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                            <Sparkles size={14}/>
                            Habilidades
                        </div>

                        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                            Base técnica em evolução com disciplina de trabalho
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                            Conhecimentos em desenvolvimento, ferramentas e competências
                            construídas com prática, constância e experiência profissional.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-6 xl:grid-cols-3">
                    {skillGroups.map((group, gi) => (
                        <ScrollReveal key={group.category} delay={0.08 * gi}>
                            <article
                                className="group relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_26px_70px_rgba(0,0,0,0.28)]">
                                <div
                                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent} opacity-80`}/>
                                <div
                                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]"/>
                                <div
                                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"/>

                                <div className="relative z-10">
                                    <div className="mb-6 flex items-center gap-4">
                    <span
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(37,99,235,0.12))] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                      <group.icon size={24}/>
                    </span>

                                        <div>
                                            <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                                                Categoria
                                            </p>
                                            <h3 className="font-heading text-lg font-semibold text-foreground">
                                                {group.category}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        {group.skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="mb-2.5 flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                                                    <span
                                                        className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-cyan-300">
                            {skill.level}%
                          </span>
                                                </div>

                                                <div className="relative h-2.5 overflow-hidden rounded-full bg-white/8">
                                                    <div
                                                        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),transparent)]"/>
                                                    <div
                                                        className="relative h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(59,130,246,0.95),rgba(6,182,212,0.95))] shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-all duration-700"
                                                        style={{width: `${skill.level}%`}}
                                                    >
                                                        <div
                                                            className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.35)]"/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}