import ScrollReveal from "./ScrollReveal";
import { Briefcase, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

const highlights = [
  "Gestão de equipe e liderança de pessoas",
  "PCM, controles operacionais e acompanhamento de processos",
  "Criação de relatórios, organização de informações e apoio administrativo",
  "Tomada de decisão com responsabilidade e senso de prioridade",
  "Visão prática de operação, rotina e eficiência",
];

export default function ExperienceSection() {
  return (
      <section id="experiencia" className="relative overflow-hidden section-padding section-gap">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_22%)]" />

        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <Sparkles size={14} />
                Experiência
              </div>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Base profissional que fortalece o perfil tech
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Experiência prática construída com liderança, processos, operação e
                responsabilidade — uma base que agrega valor real à tecnologia.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <article className="relative overflow-hidden glass-panel p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-500" />

              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(37,99,235,0.12))] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                    <Briefcase size={24} />
                  </span>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                        Cargo de destaque
                      </p>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        Líder de Logística
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        2 anos • operação, processos, controle e liderança
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    <ShieldCheck size={14} className="text-cyan-300" />
                    Bagagem profissional sólida
                  </div>
                </div>

                <p className="mb-8 max-w-4xl text-base leading-8 text-muted-foreground md:text-lg">
                  Atuação focada em coordenação de equipe, acompanhamento de rotinas,
                  controle de processos e suporte às operações. Essa vivência criou
                  uma base forte em organização, visão sistêmica, comunicação e
                  responsabilidade — exatamente o tipo de bagagem que agrega muito
                  valor na tecnologia.
                </p>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
                  {highlights.map((item) => (
                      <div
                          key={item}
                          className="group relative overflow-hidden rounded-[1.4rem] border border-border/70 bg-background/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-accent/10"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_42%)]" />

                        <div className="relative z-10 flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <CheckCircle2 size={16} />
                      </span>

                          <span className="text-sm leading-7 text-foreground/90">
                        {item}
                      </span>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
  );
}