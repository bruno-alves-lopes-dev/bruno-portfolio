# Integração do chatbot com IA real

## 1. Instale as dependências

```bash
npm install
```

## 2. Crie o arquivo `.env`

Copie `.env.example` para `.env` e preencha sua chave:

```bash
OPENAI_API_KEY=coloque_sua_chave_aqui
OPENAI_MODEL=gpt-5.4
PORT=3001
```

## 3. Rode o backend e o front

Em dois terminais:

```bash
npm run server
```

```bash
npm run dev
```

Ou em um terminal só:

```bash
npm run dev:all
```

## 4. Endereços

- Front-end: `http://127.0.0.1:8080`
- Backend: `http://127.0.0.1:3001`
- Health check: `http://127.0.0.1:3001/api/health`

## Observações de segurança

- A chave da OpenAI fica apenas no backend, nunca no React.
- O backend aceita apenas JSON pequeno e limita requisições.
- O servidor escuta apenas em `127.0.0.1` por padrão.
- Se for publicar, ajuste `FRONTEND_ORIGIN` no `.env`.
