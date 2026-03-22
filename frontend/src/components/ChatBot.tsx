import { useEffect, useMemo, useRef, useState } from "react";
import {
    MessageCircle,
    X,
    Send,
    Bot,
    Sparkles,
    Briefcase,
    Cpu,
    Mail,
    Linkedin,
    ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { brunoProfile } from "@/data/brunoProfile";
import brunoAvatar from "@/assets/Perfil.png";

type Msg = { role: "user" | "assistant"; content: string };

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

type Intent =
    | "about"
    | "experience"
    | "skills"
    | "projects"
    | "education"
    | "goals"
    | "contact"
    | "transition"
    | "backend"
    | "frontend"
    | "fullstack"
    | "whyhire"
    | "greeting"
    | "fallback";

const INITIAL_MSG: Msg = {
    role: "assistant",
    content:
        "Olá! Eu sou o **Bruno AI**. Posso te mostrar a trajetória do Bruno, o foco em back-end, os projetos, os diferenciais profissionais e as formas de contato.",
};

const quickQuestions = [
    "Quem é o Bruno?",
    "Qual é o foco dele em tecnologia?",
    "Como foi a transição para tecnologia?",
    "Quais projetos ele está construindo?",
    "Por que contratar o Bruno?",
    "Como entrar em contato?",
];

const keywordMap: Record<Exclude<Intent, "fallback">, string[]> = {
    about: ["quem e", "quem é", "sobre", "perfil", "resumo", "apresentacao", "apresentação"],
    experience: ["experiencia", "experiência", "trabalho", "carreira", "lideranca", "liderança", "logistica", "logística", "pcm"],
    skills: ["habilidade", "habilidades", "skills", "stack", "tecnologia", "tecnologias", "sabe fazer", "competencias", "competências"],
    projects: ["projeto", "projetos", "portfolio", "portfólio", "desenvolvendo", "construindo"],
    education: ["curso", "faculdade", "formacao", "formação", "estudo", "estudando", "cursando"],
    goals: ["objetivo", "objetivos", "meta", "metas", "futuro", "planos", "plano", "oportunidade"],
    contact: ["contato", "email", "e-mail", "linkedin", "github"],
    transition: ["transicao", "transição", "mudanca", "mudança", "mudou de area", "mudou de área", "logistica para tecnologia", "migrou"],
    backend: ["backend", "back end", "back-end", "java", "spring", "api", "apis", "rest"],
    frontend: ["frontend", "front end", "front-end", "html", "css", "javascript", "react", "interface"],
    fullstack: ["fullstack", "full stack", "perfil completo", "atua nos dois"],
    whyhire: ["por que contratar", "porque contratar", "diferencial", "pontos fortes", "por que o bruno", "vantagens"],
    greeting: ["oi", "ola", "olá", "bom dia", "boa tarde", "boa noite", "tudo bem", "fala"],
};

function normalize(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s?]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function detectIntent(input: string): Intent {
    const text = normalize(input);

    for (const [intent, keywords] of Object.entries(keywordMap) as [
        Exclude<Intent, "fallback">,
        string[],
    ][]) {
        if (keywords.some((keyword) => text.includes(normalize(keyword)))) {
            return intent;
        }
    }

    return "fallback";
}

function generateLocalResponse(input: string): string {
    switch (detectIntent(input)) {
        case "greeting":
            return "Olá! Posso te apresentar o Bruno de forma rápida, falar da experiência dele em logística, mostrar o foco em back-end, explicar os projetos ou resumir os diferenciais dele para uma oportunidade em tecnologia.";

        case "about":
            return `O Bruno Alves Lopes é **${brunoProfile.title}**. ${brunoProfile.story.summary}`;

        case "transition":
            return `${brunoProfile.story.transition} Em vez de abandonar o que viveu antes, ele transformou essa bagagem em diferencial na área tech.`;

        case "experience":
            return `O Bruno atuou como **${brunoProfile.experience.role}** por **${brunoProfile.experience.duration}**. Nesse período, trabalhou com gestão de equipe, controle de processos, relatórios, PCM e rotina operacional. Isso fortaleceu competências como ${brunoProfile.experience.strengths.join(", ")}.`;

        case "skills":
            return `Hoje o conjunto técnico dele está dividido assim:

- **Back-end:** ${brunoProfile.techSkills.backend.join(", ")}
- **Front-end de apoio:** ${brunoProfile.techSkills.frontend.join(", ")}
- **Ferramentas:** ${brunoProfile.techSkills.tools.join(", ")}
- **Soft skills:** ${brunoProfile.techSkills.soft.join(", ")}`;

        case "backend":
            return `O foco principal do Bruno está em **back-end**, especialmente com **${brunoProfile.techSkills.backend.join(", ")}**. Ele gosta da parte de estrutura, fluxo, organização do código e construção de APIs que resolvam problemas reais.`;

        case "frontend":
            return `O front-end para o Bruno é uma base importante de apoio. Ele utiliza **${brunoProfile.techSkills.frontend.join(", ")}** para construir interfaces, integrar projetos e apresentar soluções de forma mais completa.`;

        case "fullstack":
            return "Hoje o Bruno se posiciona como um perfil em evolução para fullstack, mas com identidade mais forte em back-end. Ele estuda a construção de sistemas completos sem perder o foco principal em Java, APIs e lógica.";

        case "projects":
            return `Os projetos atuais do Bruno incluem:

${brunoProfile.projects
                .map((project) => `- **${project.name}** (${project.focus}): ${project.description}`)
                .join("\n")}

A ideia é transformar cada projeto em prova prática de evolução.`;

        case "education":
            return `Atualmente o Bruno está cursando:

${brunoProfile.education
                .map((item) => `- **${item.course}** — ${item.status}. ${item.notes}`)
                .join("\n")}

Além da faculdade, ele mantém rotina de prática com exercícios, projetos e estudo contínuo.`;

        case "goals":
            return `Os objetivos dele hoje são:

${brunoProfile.goals.map((goal) => `- ${goal}`).join("\n")}`;

        case "whyhire":
            return brunoProfile.story.whyHire;

        case "contact":
            return `Você pode entrar em contato com o Bruno pelos canais abaixo:

- **E-mail:** [${brunoProfile.email}](mailto:${brunoProfile.email})
- **LinkedIn:** [Perfil do LinkedIn](${brunoProfile.linkedin})
- **GitHub:** [Projetos no GitHub](${brunoProfile.github})`;

        default:
            return "Posso falar sobre quem é o Bruno, experiência profissional, foco em back-end, habilidades, projetos, transição para tecnologia, objetivos ou formas de contato. Tente algo como: *Qual é o foco dele em tecnologia?*";
    }
}

async function fetchAiResponse(message: string): Promise<string> {
    if (!API_BASE_URL) {
        throw new Error("VITE_API_BASE_URL não configurada");
    }

    const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error(`Falha na API: ${response.status}`);
    }

    const data = (await response.json()) as { reply?: string };
    return data.reply?.trim() || "Não consegui responder agora.";
}

function AssistantAvatar() {
    return (
        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/20 via-sky-500/15 to-blue-600/20 shadow-[0_0_35px_rgba(34,211,238,0.16)]">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
            <Bot size={18} className="relative text-cyan-300" />
        </div>
    );
}

function BrunoMiniAvatar() {
    return (
        <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.28)]">
            <img src={brunoAvatar} alt="Bruno Alves Lopes" className="h-full w-full object-cover" />
        </div>
    );
}

function QuickActions({
                          suggestions,
                          onSelect,
                      }: {
    suggestions: string[];
    onSelect: (value: string) => void;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <div className="mb-2 flex items-center gap-2 px-1">
                <Sparkles size={13} className="text-cyan-300" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
          Sugestões
        </span>
            </div>

            <div className="flex flex-wrap gap-2">
                {suggestions.map((question) => (
                    <button
                        key={question}
                        type="button"
                        onClick={() => onSelect(question)}
                        className="group rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-left text-xs text-slate-200 transition duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                    >
            <span className="inline-flex items-center gap-1.5">
              {question}
                <ChevronRight
                    size={12}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                />
            </span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
}

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Msg[]>([INITIAL_MSG]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const suggestions = useMemo(() => quickQuestions, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, isTyping, open]);

    async function pushUserQuestion(text: string) {
        const clean = text.trim();

        if (!clean || isTyping) return;

        setMessages((prev) => [...prev, { role: "user", content: clean }]);
        setInput("");
        setIsTyping(true);

        try {
            const reply = await fetchAiResponse(clean);
            setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        } catch {
            const fallback = generateLocalResponse(clean);
            setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
        } finally {
            setIsTyping(false);
        }
    }

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.section
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed bottom-24 right-6 z-50 flex h-[min(760px,calc(100vh-7rem))] w-[420px] max-w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.97)_0%,rgba(3,7,18,0.99)_100%)] shadow-[0_30px_120px_rgba(0,0,0,0.6),0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-2xl"
                        aria-label="Assistente virtual do Bruno"
                    >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_22%)]" />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),transparent)]" />

                        <header className="relative border-b border-white/10 px-5 pb-4 pt-5">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3">
                                    <AssistantAvatar />

                                    <div>
                                        <div className="mb-1 flex items-center gap-2">
                                            <p className="text-sm font-semibold tracking-wide text-white">
                                                Bruno • Assistente Inteligente
                                            </p>
                                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                        online
                      </span>
                                        </div>

                                        <p className="max-w-[270px] text-xs leading-5 text-slate-400">
                                            Portfólio interativo com IA real para falar sobre back-end, trajetória,
                                            projetos e diferenciais profissionais.
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-cyan-300">
                        <Cpu size={11} />
                        Back-end
                      </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-sky-300">
                        <Briefcase size={11} />
                        Trajetória
                      </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
                                    aria-label="Fechar assistente"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </header>

                        <div ref={scrollRef} className="relative flex-1 overflow-y-auto px-4 py-5 scroll-smooth">
                            {messages.length === 1 && (
                                <QuickActions
                                    suggestions={suggestions}
                                    onSelect={(value) => {
                                        void pushUserQuestion(value);
                                    }}
                                />
                            )}

                            <div className="space-y-5">
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={`${message.role}-${index}`}
                                        initial={{ opacity: 0, y: 12, scale: 0.985 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                                        className={`flex items-end gap-2 ${
                                            message.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                    >
                                        {message.role === "assistant" && <AssistantAvatar />}

                                        <div className={`max-w-[82%] ${message.role === "user" ? "order-1" : ""}`}>
                                            <div
                                                className={`relative overflow-hidden rounded-[1.5rem] px-4 py-3.5 text-[0.92rem] leading-7 ${
                                                    message.role === "user"
                                                        ? "rounded-br-md border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.94),rgba(37,99,235,0.94))] text-white shadow-[0_12px_30px_rgba(14,116,144,0.28)]"
                                                        : "rounded-bl-md border border-white/10 bg-white/[0.045] text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
                                                }`}
                                            >
                                                {message.role === "assistant" && (
                                                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
                                                )}

                                                <ReactMarkdown
                                                    components={{
                                                        p: ({ children }) => <p className="mb-2.5 last:mb-0">{children}</p>,
                                                        ul: ({ children }) => <ul className="ml-4 list-disc space-y-1.5">{children}</ul>,
                                                        li: ({ children }) => <li>{children}</li>,
                                                        strong: ({ children }) => (
                                                            <strong
                                                                className={
                                                                    message.role === "user"
                                                                        ? "font-semibold text-white"
                                                                        : "font-semibold text-cyan-300"
                                                                }
                                                            >
                                                                {children}
                                                            </strong>
                                                        ),
                                                        a: ({ href, children }) => (
                                                            <a
                                                                href={href}
                                                                target="_blank"
                                                                rel="noreferrer noopener"
                                                                className={`underline underline-offset-4 ${
                                                                    message.role === "user" ? "text-white" : "text-cyan-300"
                                                                }`}
                                                            >
                                                                {children}
                                                            </a>
                                                        ),
                                                    }}
                                                >
                                                    {message.content}
                                                </ReactMarkdown>
                                            </div>
                                        </div>

                                        {message.role === "user" && (
                                            <div className="order-2">
                                                <BrunoMiniAvatar />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                <AnimatePresence>
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 6 }}
                                            className="flex items-end gap-2"
                                        >
                                            <AssistantAvatar />

                                            <div className="rounded-[1.5rem] rounded-bl-md border border-white/10 bg-white/[0.045] px-4 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                                                <div className="flex items-center gap-1.5 opacity-80">
                          <span
                              className="h-2 w-2 animate-bounce rounded-full bg-cyan-300"
                              style={{ animationDelay: "0ms" }}
                          />
                                                    <span
                                                        className="h-2 w-2 animate-bounce rounded-full bg-cyan-300"
                                                        style={{ animationDelay: "120ms" }}
                                                    />
                                                    <span
                                                        className="h-2 w-2 animate-bounce rounded-full bg-cyan-300"
                                                        style={{ animationDelay: "240ms" }}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="relative border-t border-white/10 px-4 pb-4 pt-3">
                            <div className="mb-2 flex items-center gap-3 px-1">
                                <a
                                    href={`mailto:${brunoProfile.email}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                                >
                                    <Mail size={12} />
                                    Email
                                </a>

                                <a
                                    href={brunoProfile.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                                >
                                    <Linkedin size={12} />
                                    LinkedIn
                                </a>
                            </div>

                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    void pushUserQuestion(input);
                                }}
                                className="relative"
                            >
                                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_42%)]" />

                                    <input
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                        maxLength={280}
                                        placeholder="Pergunte algo sobre o Bruno..."
                                        className="relative h-14 w-full bg-transparent pl-4 pr-16 text-sm text-white outline-none placeholder:text-slate-500"
                                        aria-label="Digite sua pergunta"
                                    />

                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isTyping}
                                        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(37,99,235,0.95))] text-white shadow-[0_10px_25px_rgba(14,116,144,0.35)] transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
                                        aria-label="Enviar pergunta"
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>
                            </form>

                            <div className="mt-2 flex items-center justify-between px-1">
                                <p className="text-[11px] text-slate-500">IA + fallback inteligente do portfólio</p>
                                <p className="text-[11px] text-slate-500">{input.length}/280</p>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            <motion.button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.95),rgba(37,99,235,0.95))] text-white shadow-[0_16px_45px_rgba(14,116,144,0.42),0_0_40px_rgba(34,211,238,0.2)] transition"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: open
                        ? "0 16px 45px rgba(14,116,144,0.42), 0 0 40px rgba(34,211,238,0.2)"
                        : [
                            "0 16px 45px rgba(14,116,144,0.34), 0 0 20px rgba(34,211,238,0.12)",
                            "0 16px 45px rgba(14,116,144,0.44), 0 0 34px rgba(34,211,238,0.22)",
                            "0 16px 45px rgba(14,116,144,0.34), 0 0 20px rgba(34,211,238,0.12)",
                        ],
                }}
                transition={{
                    duration: 2.6,
                    repeat: open ? 0 : Infinity,
                    ease: "easeInOut",
                }}
                aria-label={open ? "Fechar assistente" : "Abrir assistente"}
            >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_55%)]" />
                {open ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>

            {!open && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="pointer-events-none fixed bottom-24 right-24 z-40 hidden max-w-[290px] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(2,6,23,0.88))] px-4 py-3 text-sm text-white shadow-[0_18px_45px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:block"
                >
                    <div className="mb-1.5 flex items-center gap-2 text-cyan-300">
                        <Sparkles size={14} />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em]">Bruno AI</span>
                    </div>

                    <p className="text-xs leading-5 text-slate-400">
                        Pergunte sobre minha trajetória, foco em back-end, projetos ou diferenciais profissionais.
                    </p>
                </motion.div>
            )}
        </>
    );
}