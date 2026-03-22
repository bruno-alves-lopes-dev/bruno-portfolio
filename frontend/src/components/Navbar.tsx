import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = links.map((l) => document.querySelector(l.href) as HTMLElement | null);
      sections.forEach((sec, i) => {
        if (!sec) return;
        const top = sec.offsetTop - 140;
        const bottom = top + sec.clientHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(links[i].href);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-6">
        <div
          className={`relative flex min-h-16 items-center justify-between gap-3 rounded-2xl border px-4 py-2 md:px-5 transition-all duration-300 ${
            scrolled
              ? "border-border/70 bg-background/80 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              : "border-transparent bg-transparent"
          }`}
        >
          {scrolled && (
            <>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/5" />
            </>
          )}

          <a href="#" className="relative z-10 flex shrink-0 items-center gap-3 text-foreground">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(37,99,235,0.14))] text-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.12)] dark:text-cyan-300">
              <Sparkles size={17} />
            </span>

            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">
                Bruno<span className="text-cyan-500 dark:text-cyan-400">.dev</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Portfolio</p>
            </div>
          </a>

          <div className="relative z-10 hidden items-center gap-2 rounded-full border border-border/70 bg-background/70 px-2 py-2 backdrop-blur-xl md:flex">
            {links.map((l) => {
              const isActive = active === l.href;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-pill"
                      className="absolute inset-0 rounded-full border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(37,99,235,0.12))]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              );
            })}
          </div>

          <div className="relative z-10 hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <a
              href="#contato"
              className="rounded-full border border-border/70 bg-background/75 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent/10"
            >
              Contato
            </a>

            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(37,99,235,0.95))] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_25px_rgba(14,116,144,0.22)] transition hover:-translate-y-0.5"
            >
              Ver portfólio
            </a>
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/75 text-foreground transition hover:bg-accent/10 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            type="button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:shadow-[0_18px_45px_rgba(0,0,0,0.38)] md:hidden"
            >
              <div className="border-b border-border/70 px-5 py-4">
                <p className="text-sm font-semibold text-foreground">Navegação</p>
                <p className="mt-1 text-xs text-muted-foreground">Explore as principais áreas do portfólio.</p>
              </div>

              <div className="flex flex-col gap-2 px-4 py-4">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300"
                          : "text-foreground/85 hover:bg-accent/10 hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </a>
                  );
                })}

                <div className="mt-2 flex flex-col gap-2 border-t border-border/70 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tema</span>
                    <ThemeToggle />
                  </div>
                  <a
                    href="#projetos"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(37,99,235,0.95))] px-4 py-3 text-sm font-medium text-white"
                  >
                    Ver portfólio
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="#contato"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-background/75 px-4 py-3 text-sm font-medium text-foreground"
                  >
                    Entrar em contato
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
