import {motion} from "framer-motion";
import {ArrowRight, Download, Sparkles, Cpu, Briefcase, Code2} from "lucide-react";
import bruno from "@/assets/profile-photo.jpg";

const stats = [
    {title: "+2 anos", desc: "liderança, operação e processos"},
    {title: "ADS", desc: "transição sólida para tecnologia"},
    {title: "APIs", desc: "foco em back-end e sistemas"},
];

export default function HeroSection() {
    return (
        <section className="relative overflow-x-hidden px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-24">
            <div
                className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.96))] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(2,6,23,1))]"/>

            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.08] [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]"/>

            <div
                className="pointer-events-none absolute left-[12%] top-24 -z-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15"/>
            <div
                className="pointer-events-none absolute right-[10%] top-32 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"/>

            <div
                className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-120px)] lg:grid-cols-2 lg:gap-16">
                <motion.div
                    initial={{opacity: 0, y: 32}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
                    className="relative z-10 max-w-3xl"
                >
                    <div
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm backdrop-blur-xl dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                        <Sparkles size={14}/>
                        Portfólio
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[5rem] dark:text-white">
                        Transformando{" "}
                        <span
                            className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              experiência real
            </span>{" "}
                        em soluções tecnológicas.
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
                        Profissional com base sólida em logística, processos, liderança e operação,
                        migrando com consistência para tecnologia, com foco em back-end, APIs,
                        organização de sistemas e resolução prática de problemas.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-cyan-300">
                            <Cpu size={14}/>
                            Back-end
                        </div>

                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-sky-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-sky-300">
                            <Briefcase size={14}/>
                            Processos & liderança
                        </div>

                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-emerald-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-emerald-300">
                            <Code2 size={14}/>
                            Evolução constante
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#projetos"
                            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(14,116,144,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,116,144,0.30)]"
                        >
                            Ver projetos
                            <ArrowRight size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1"/>
                        </a>

                        <a
                            href="#contato"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/85 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        >
                            Entrar em contato
                        </a>

                        <a
                            href="/curriculo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                        >
                            <Download size={16}/>
                            Currículo
                        </a>
                    </div>

                    <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                        {stats.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, y: 18}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.15 + index * 0.08, duration: 0.45}}
                                className="rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                            >
                                <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                                    {item.title}
                                </p>
                                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.96, y: 24}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
                    className="relative z-10 flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px]">
                        <div
                            className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_60%)] blur-3xl"/>

                        <div
                            className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                            <div
                                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_38%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%)]"/>

                            <div
                                className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-slate-100 dark:border-white/10 dark:bg-slate-950">
                                <img
                                    src={bruno}
                                    alt="Bruno Alves Lopes"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}