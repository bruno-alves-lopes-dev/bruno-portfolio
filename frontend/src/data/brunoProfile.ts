export const brunoProfile = {
  name: "Bruno Alves Lopes",
  title: "Desenvolvedor em formação com foco em Back-End e APIs",
  location: "Santa Vitória - MG",
  email: "Bruno.alves.lopes.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/bruno-alves-lopes-dev",
  github: "https://github.com/bruno-alves-lopes-dev",
  education: [
    {
      course: "Análise e Desenvolvimento de Sistemas",
      status: "Em andamento",
      notes: "Foco em desenvolvimento back-end, lógica de programação, Java, Spring Boot e construção de APIs.",
    },
    {
      course: "Administração",
      status: "Em andamento",
      notes: "Base complementar em gestão, processos e visão organizacional.",
    },
  ],
  story: {
    summary:
      "Bruno está construindo sua transição para tecnologia com foco principal em back-end, sem abrir mão de uma visão fullstack em evolução. A experiência anterior em liderança, processos e operação fortalece a forma como ele estrutura soluções e pensa em entrega real.",
    transition:
      "A transição para tecnologia aconteceu apoiada na bagagem profissional construída na logística. Organização, análise, comunicação e resolução de problemas deixaram de ser apenas rotina operacional e passaram a orientar o estudo de desenvolvimento, especialmente em Java, APIs e estrutura de sistemas.",
    whyHire:
      "O diferencial do Bruno está na combinação entre disciplina operacional, liderança e evolução técnica. Ele traz responsabilidade, visão de processo, boa comunicação e foco em aprender rápido, além de estar direcionando os estudos para back-end com Java, Spring Boot e APIs, com base de front-end para integração e visão fullstack.",
  },
  experience: {
    role: "Líder de Logística",
    duration: "2 anos",
    summary:
      "Atuação com gestão de equipe, controle de processos, PCM, relatórios, rotinas administrativas, organização operacional e tomada de decisão.",
    strengths: [
      "liderança",
      "organização",
      "comunicação clara",
      "resolução de problemas",
      "visão de processo",
      "análise de dados e relatórios",
    ],
  },
  techSkills: {
    backend: ["Java", "Spring Boot", "APIs REST", "lógica de programação"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    tools: ["Git", "GitHub", "Pacote Office avançado"],
    soft: ["liderança", "organização", "comunicação", "responsabilidade"],
  },
  projects: [
    {
      name: "Portfólio pessoal com assistente de IA",
      focus: "fullstack em evolução",
      description:
        "Site responsivo para apresentar trajetória, experiências, habilidades e projetos com um assistente integrado para conversar com recrutadores e visitantes.",
    },
    {
      name: "API de usuários com Java e Spring Boot",
      focus: "back-end",
      description:
        "Projeto de estudo para praticar rotas, DTOs, organização em camadas, regras de negócio e construção de uma API mais estruturada.",
    },
    {
      name: "Projetos web com HTML, CSS e JavaScript",
      focus: "front-end de apoio",
      description:
        "Interfaces voltadas para prática de responsividade, semântica, organização visual e integração com aplicações.",
    },
  ],
  goals: [
    "Conquistar uma oportunidade em tecnologia com foco principal em back-end",
    "Evoluir em Java, Spring Boot, APIs e estrutura de sistemas",
    "Crescer como perfil fullstack sem perder a identidade mais forte em back-end",
  ],
};

export type BrunoProfile = typeof brunoProfile;
