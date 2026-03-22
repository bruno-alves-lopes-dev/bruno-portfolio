import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import { brunoProfile } from "@/data/brunoProfile";

export default function Footer() {
  return (
      <footer id="contato" className="relative overflow-hidden section-padding pb-12 pt-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_22%)]" />

        <ScrollReveal>
          <div className="mx-auto max-w-7xl">
            <div className="glass-panel relative overflow-hidden px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-8 md:py-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    <Sparkles size={14} />
                    Contato
                  </div>

                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Vamos construir algo forte juntos.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    {brunoProfile.name} é um profissional em evolução na tecnologia,
                    com base sólida em processos, liderança, organização e visão prática.
                    Se você busca alguém comprometido, com vontade real de crescer e
                    construir soluções com qualidade, vale a pena conversar.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                        href={`mailto:${brunoProfile.email}`}
                        className="group inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(37,99,235,0.95))] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(14,116,144,0.32)] transition hover:-translate-y-0.5"
                    >
                      Enviar e-mail
                      <ArrowUpRight
                          size={16}
                          className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                        href={brunoProfile.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/75 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/10"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="surface-soft p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                      Contato direto
                    </p>
                    <a
                        href={`mailto:${brunoProfile.email}`}
                        className="mt-2 block text-base font-medium text-foreground transition hover:text-cyan-300"
                    >
                      {brunoProfile.email}
                    </a>
                  </div>

                  <div className="surface-soft p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                      Presença profissional
                    </p>

                    <div className="mt-4 flex gap-3">
                      <a
                          href={brunoProfile.github}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background/75 text-muted-foreground transition hover:-translate-y-0.5 hover:border-cyan-400/20 hover:text-cyan-300"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer noopener"
                      >
                        <Github size={20} />
                      </a>

                      <a
                          href={brunoProfile.linkedin}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background/75 text-muted-foreground transition hover:-translate-y-0.5 hover:border-cyan-400/20 hover:text-cyan-300"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noreferrer noopener"
                      >
                        <Linkedin size={20} />
                      </a>

                      <a
                          href={`mailto:${brunoProfile.email}`}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background/75 text-muted-foreground transition hover:-translate-y-0.5 hover:border-cyan-400/20 hover:text-cyan-300"
                          aria-label="Email"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="surface-soft p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                      Resumo
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Desenvolvedor em formação, com foco em back-end, APIs e
                      construção de sistemas, somando bagagem real em operação,
                      processos e liderança.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
                <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
                  <p>© {new Date().getFullYear()} {brunoProfile.name}. Todos os direitos reservados.</p>
                  <p>Construído com foco em tecnologia, identidade visual e evolução contínua.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </footer>
  );
}