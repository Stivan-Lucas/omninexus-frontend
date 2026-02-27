# 🖼️ Omninexus Frontend (Next.js 15)

O **Omninexus Frontend** é o dashboard administrativo do ecossistema. Desenvolvido com **Next.js 15** (App Router), ele oferece uma interface em tempo real, responsiva e de alta performance para monitorar todos os agentes espalhados pela rede.

## 🚀 Tecnologias

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & React Server Components)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes:** [Radix UI](https://www.radix-ui.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Linter/Formatter:** [Biome](https://biomejs.dev/)
- **Runtime:** [Bun](https://bun.sh/)
- **Versionamento:** Semantic Release

---

## ✨ Funcionalidades

- 📊 **Monitoramento em Tempo Real**: Gráficos de uso de CPU, RAM e Tráfego de Rede.
- 🌓 **Suporte a Temas**: Modo claro e escuro totalmente integrado via `next-themes`.
- 📱 **Design Responsivo**: Otimizado para desktops, tablets e dispositivos móveis.
- ⚡ **Performance Extrema**: Aproveita o `React Compiler` e o build otimizado do Bun.

---

## 📦 Gestão de Versões

Este repositório segue o fluxo automatizado de release. Cada `feat:` ou `fix:` gera automaticamente uma nova versão e atualiza o histórico de mudanças.

| Tipo de Commit | Versão  | Gatilho                                         |
| -------------- | ------- | ----------------------------------------------- |
| `feat:`        | `Minor` | Novos componentes, páginas ou gráficos.         |
| `fix:`         | `Patch` | Correções de UI, bugs de estado ou CSS.         |
| `chore:`       | `None`  | Atualização de bibliotecas ou configs de build. |

---

## 🛠️ Desenvolvimento

### Instalação

```bash
# 1. Instalar as dependências com Bun
bun install

# 2. Configurar o ambiente
cp .env.example .env.local

# 3. Rodar em modo desenvolvimento
bun run dev

```

### Comandos de Build

- `bun run build`: Gera a versão otimizada para produção.
- `bun run start`: Inicia o servidor Next.js em produção.
- `bun run lint`: Verifica erros de código e acessibilidade.
- `bun run format`: Padroniza o código seguindo as regras do Biome.

---

## 📡 Conexão com o Ecossistema

O Frontend consome a API do **Omninexus Backend**. Certifique-se de configurar a variável `NEXT_PUBLIC_API_URL` no seu arquivo `.env.local` apontando para o servidor Bun.

---

## 🔗 Repositórios Relacionados

- **Agent (Rust):** [omninexus-agent](https://github.com/Stivan-Lucas/omninexus-agent)
- **Backend (Bun):** [omninexus-backend](https://www.google.com/search?q=https://github.com/Stivan-Lucas/omninexus-backend)

---

_Omninexus: Visualizando a telemetria do amanhã._
