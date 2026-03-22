import ScrollReveal from "./ScrollReveal";
import { BookOpen, Cpu, Target, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Aprendizado contínuo",
    desc: "Estudo constante, prática em projetos e evolução gradual com consistência e visão de longo prazo.",
  },
  {
    icon: Cpu,
    title: "Mentalidade de tecnologia",
    desc: "Interesse por sistemas bem estruturados, APIs organizadas e soluções que façam sentido no uso real.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    desc: "Cada projeto precisa comunicar valor, clareza técnica e transmitir confiança visual e funcional.",
  },
];

export default function AboutSection() {
  return (
      <section id="sobre" className="relative overflow-hidden section-padding section-gap">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_22%)]" />

        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <Sparkles size={14} />
                Sobre mim
              </div>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Da operação ao desenvolvimento
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Uma trajetória construída com experiência prática, organização,
                liderança e evolução técnica orientada para tecnologia.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <ScrollReveal delay={0.08}>
              <article className="relative overflow-hidden glass-panel p-8 md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    Trajetória profissional
                  </div>

                  <p className="mb-5 text-base leading-8 text-muted-foreground md:text-lg">
                    Minha trajetória começou na logística, atuando com liderança,
                    controle de processos, relatórios, organização operacional e
                    suporte administrativo. Esse período me ensinou algo que hoje
                    aplico diretamente em tecnologia: bons sistemas precisam ser
                    claros, funcionais e confiáveis.
                  </p>

                  <p className="mb-5 text-base leading-8 text-muted-foreground md:text-lg">
                    Ao entrar em Análise e Desenvolvimento de Sistemas, passei a
                    transformar curiosidade em prática. Hoje estudo
                    desenvolvimento com foco principal em back-end, Java, Spring
                    Boot e APIs, sem deixar de lado conhecimentos de front-end
                    que ajudam a construir soluções mais completas.
                  </p>

                  <p className="text-base leading-8 text-muted-foreground md:text-lg">
                    Meu objetivo é crescer como desenvolvedor, unindo boa
                    comunicação, visão prática, execução consistente e soluções
                    com identidade profissional, organização técnica e pensamento
                    de produto.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="surface-soft p-4">
                      <p className="text-xl font-semibold text-foreground">Logística</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        base forte em operação e processos
                      </p>
                    </div>

                    <div className="surface-soft p-4">
                      <p className="text-xl font-semibold text-foreground">ADS</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        formação em evolução constante
                      </p>
                    </div>

                    <div className="surface-soft p-4">
                      <p className="text-xl font-semibold text-foreground">Back-end</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        foco técnico em APIs e sistemas
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <div className="grid gap-5">
              {highlights.map((item, i) => (
                  <ScrollReveal key={item.title} delay={0.12 + i * 0.07}>
                    <article className="group surface-soft relative overflow-hidden p-6 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                      <div className="relative z-10">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(37,99,235,0.12))] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.10)]">
                      <item.icon size={22} />
                    </span>

                        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>

                        <p className="text-sm leading-7 text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </article>
                  </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}