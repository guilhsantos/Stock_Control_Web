# SGA · Controle de estoque e produção (web)

Aplicação web para digitalizar o controle de estoque operacional e o acompanhamento da produção, no lugar de planilhas. Versão pública, sem marca, dados ou credenciais de nenhuma empresa.

## O que faz

- **Pedidos de produção** com acompanhamento de status e fotos.
- **Estoque de kits e materiais** com baixa atômica (sem condição de corrida) e reservas por pedido.
- **Painel do operador** com leitura de QR code, registro de produção, defeitos e paradas.
- **Painéis gerenciais**: visão geral, estoque e desempenho.
- **Perfis de acesso** (administrador, operador de estoque, operador de produção) com regras de segurança por linha (RLS) no banco.

## Stack

Next.js, TypeScript, Tailwind, Supabase (PostgreSQL, Auth e Storage) e Vercel.

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha com as chaves do seu projeto Supabase
npm run dev                  # http://localhost:3000
```

O banco vem das migrações em `supabase/migrations`. Com a CLI do Supabase, `supabase start` e `supabase db reset` sobem um ambiente local com os usuários de teste de `supabase/seed.sql`.

## Variáveis de ambiente

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | chave pública (anon) |

Nunca versione chaves de serviço (`service_role`).
