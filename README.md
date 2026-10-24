## 📌 Sobre o Projeto

O **FlipControl** é uma aplicação web criada para simplificar a gestão e o controle de operações financeiras e de estoque. O objetivo do sistema é fornecer uma visão clara de investimentos, custos, retornos e margem de lucro em tempo real, permitindo tomar decisões mais estratégicas de forma simples e intuitiva.

---

## ✨ Funcionalidades Principais

- 📈 **Painel / Dashboard:** Visão geral rápida dos principais indicadores financeiros.
- 📦 **Gestão de Inventário:** Acompanhamento de itens, custos de aquisição e valores de venda.
- 💰 **Cálculo de Lucro & Margem:** Métricas automáticas para avaliar o retorno de cada operação (ROI).
- 📱 **Interface Responsiva:** Design otimizado para navegação contínua em computadores e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

**Interface/Front-end**

**HTML, CSS e JavaScript puro, sem framework. É um site de uma página só (SPA), com a lógica toda no index.html.**
**Tailwind CSS (pelo CDN) para o visual.
Lucide Icons para os ícones.
Chart.js para os gráficos.**

**Banco de dados e login (Supabase)**

**PostgreSQL como banco, com RLS (cada usuário só enxerga os próprios dados).
Supabase Auth para o login, com a biblioteca supabase-js v2.
Edge Function em TypeScript (Deno) para criar a conta já confirmada.**

**App instalável (PWA)**

**manifest.json (nome, cor, ícones).
Service worker (sw.js) para abrir rápido e funcionar sem internet.
Ícones PNG gerados para o app.**

**Publicação e desenvolvimento**

**Git e GitHub para o código, GitHub Pages para o site, e opcionalmente GitHub Actions para criar o config.js com as chaves.
VS Code com Go Live para testar no computador.
localStorage do navegador, usado só no modo “Experimentar sem cadastro”.**
