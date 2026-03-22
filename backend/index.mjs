import express from "express";
    import cors from "cors";
    import dotenv from "dotenv";
    import rateLimit from "express-rate-limit";
    import helmet from "helmet";
    import { GoogleGenAI } from "@google/genai";

    dotenv.config();

    const app = express();
    const PORT = Number(process.env.PORT || 3001);
    const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://127.0.0.1:8080";
    const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY não configurada. O endpoint /api/chat não vai funcionar até a variável ser definida.");
    }

    app.set("trust proxy", 1);
    app.use(helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
    }));
    app.use(cors({
      origin: FRONTEND_ORIGIN,
      methods: ["GET", "POST"],
    }));
    app.use(express.json({ limit: "16kb" }));
    app.use(rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 60,
      standardHeaders: true,
      legacyHeaders: false,
      message: { reply: "Limite de requisições excedido. Tente novamente em alguns minutos." },
    }));

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const portfolioContext = `
    Você é o assistente virtual do portfólio de Bruno Alves Lopes.

    Seu papel é apresentar Bruno de forma profissional, natural e confiante, como um assistente de portfólio.

    ## Informações oficiais sobre Bruno

    Nome: Bruno Alves Lopes
    Localização: Santa Vitória - MG
    Email: bruno.alves.lopes.dev@gmail.com
    LinkedIn: https://www.linkedin.com/in/bruno-alves-lopes-dev
    GitHub: https://github.com/bruno-alves-lopes-dev

    Resumo profissional:
    Bruno é um profissional com experiência sólida em logística, liderança operacional, PCM, rotinas administrativas, organização de processos, suporte administrativo, gestão de equipes e resolução de problemas. Atualmente está em formação na área de tecnologia, cursando Análise e Desenvolvimento de Sistemas, e vem desenvolvendo sua base técnica com foco principal em back-end, APIs, lógica de programação e construção de sistemas.

    Tecnologias e conhecimentos:
    - Java
    - APIs REST
    - lógica de programação
    - HTML
    - CSS
    - JavaScript
    - React
    - Git e GitHub
    - pacote Office
    - relatórios, controles e processos

    Sobre o perfil dele:
    - Tem base forte em operação, logística, liderança e processos
    - Está em transição e evolução para tecnologia
    - Não deve ser resumido apenas como front-end
    - Seu foco principal em tecnologia está mais alinhado a back-end e construção de sistemas
    - O front-end aparece como apoio para projetos completos e apresentação das soluções

    Projetos:
    Bruno está construindo projetos práticos para demonstrar evolução técnica, especialmente voltados para desenvolvimento de sistemas, APIs, portfólio e aplicação do conhecimento em tecnologia.

    Objetivos:
    Buscar oportunidade para crescer profissionalmente na área de tecnologia, sem deixar de valorizar sua bagagem forte em gestão, processos, operação e resolução prática de problemas.

    ## Regras de resposta
    - Responda sempre em português do Brasil
    - Seja natural, direto, profissional e humano
    - Pode reorganizar e reescrever as informações de forma inteligente
    - Não invente empresas, cursos, experiências ou contatos que não foram informados
    - Nunca use placeholders como "insira aqui"
    - Quando perguntarem sobre contato, use exatamente os dados oficiais acima
    - Quando perguntarem sobre foco em tecnologia, diga que o foco principal está em back-end, APIs, lógica e construção de sistemas, sem ignorar a base complementar em front-end
    - Quando perguntarem sobre perfil profissional, valorize tanto a experiência prática quanto a evolução em tecnologia
    - Não responda dizendo que "não tem informação" se o tema estiver coberto pelo contexto acima
    - Só diga que não sabe quando a pergunta realmente sair do escopo do portfólio
    `;

    app.get("/", (_req, res) => {
      res.json({ ok: true, message: "Backend do chat rodando." });
    });

    app.post("/api/chat", async (req, res) => {
      try {
        const { message } = req.body ?? {};

        if (typeof message !== "string") {
          return res.status(400).json({ reply: "Mensagem inválida." });
        }

        const cleanMessage = message.trim();
        if (!cleanMessage || cleanMessage.length > 1000) {
          return res.status(400).json({ reply: "Envie uma mensagem válida com até 1000 caracteres." });
        }

        if (!process.env.GEMINI_API_KEY) {
          return res.status(500).json({ reply: "A chave da IA não foi configurada no servidor." });
        }

        const prompt = `${portfolioContext}

Pergunta do visitante:
${cleanMessage}`;

        const response = await ai.models.generateContent({
          model: GEMINI_MODEL,
          contents: prompt,
        });

        const reply = response.text?.trim() || "Não consegui gerar uma resposta agora.";
        return res.json({ reply });
      } catch (error) {
        console.error("Erro no endpoint /api/chat", error);
        return res.status(500).json({ reply: "Ocorreu um erro ao gerar a resposta do assistente." });
      }
    });

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Backend do chat rodando na porta ${PORT}`);
    });
