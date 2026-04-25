# Care(Us) 🏥
### Challenge FIAP x Care Plus — Sprint 2

> **"Transformando o Cuidado em Conexão."**

![Badge](https://img.shields.io/badge/FIAP-Challenge-red?style=flat-square)
![Badge](https://img.shields.io/badge/Care%20Plus-Part%20of%20Bupa-blue?style=flat-square)
![Badge](https://img.shields.io/badge/Sprint-2-green?style=flat-square)
![Badge](https://img.shields.io/badge/HTML5-CSS3-orange?style=flat-square)
![Badge](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square)

---

## 📋 Sobre o Projeto

O **Care(Us)** é uma plataforma web desenvolvida como resposta ao **Challenge FIAP x Care Plus 2025/2026**, cujo objetivo é criar uma solução digital inovadora que **reduza o no-show nas clínicas da Care Plus**, engaje os pacientes e promova uma cultura de responsabilidade com a própria saúde.

A solução integra recursos de **mobilidade urbana, agendamento inteligente e gamificação** em uma única plataforma web responsiva, inspirada em aplicativos como Google Calendar, Duolingo e Waze.

---

## 🎯 O Problema

Clínicas odontológicas e dermatológicas enfrentam taxas de **no-show entre 10% e 30%**, causadas por:

- 📅 Esquecimento e falhas de comunicação
- 🚗 Trânsito, clima e dificuldades de deslocamento
- 📞 Dificuldade de reagendamento (processo burocrático por telefone)
- 🏆 Ausência de incentivos para o comparecimento
- 📍 Distância e localização das clínicas

---

## 💡 A Solução

O Care(Us) combate o no-show através de:

| Funcionalidade | Descrição |
|---|---|
| 🗓️ **Agendamento Ágil** | Fluxo em 4 etapas com stepper interativo, sem telefonemas |
| 🔔 **Notificações Preditivas** | Lembretes com análise de trânsito e clima em tempo real |
| 🏆 **Care Points** | Sistema de gamificação com pontos, níveis e conquistas |
| ↻ **Reagendamento Fácil** | Re-agendamento em 3 cliques diretamente no dashboard |
| 📍 **Integração de Mapas** | Google Maps, Google Agenda e Waze integrados |
| 💳 **Carteirinha Digital** | Cartão digital com QR Code e dados de saúde |
| ⚡ **FastPass** | Plano premium com benefícios Diamante imediatos |

---

## 🖥️ Páginas Desenvolvidas

```
📁 Sprint2/
├── index.html          → Login e Cadastro
├── home.html           → Dashboard Principal
├── agendar.html        → Agendamento de Consultas
├── carteirinha.html    → Carteirinha Digital
├── nivel.html          → Meu Nível & Conquistas
├── 📁 css/
│   └── style.css       → Estilos customizados
└── 📁 js/
    ├── app.js          → Funções compartilhadas
    └── sidebar.js      → Sidebar dinâmica
```

---

## 🚀 Como executar o projeto

### Opção 1 — Live Server (VS Code)
1. Clone o repositório:
```bash
git clone https://github.com/FelipoB/challenge-careplus-sprint2.git
```
2. Abra a pasta no **VS Code**
3. Instale a extensão **Live Server**
4. Clique com botão direito no `index.html` → **Open with Live Server**

### Opção 2 — Abrir direto no navegador
1. Baixe o repositório como `.zip`
2. Extraia a pasta
3. Abra o arquivo `index.html` no navegador

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica das páginas
- **CSS3** — Estilos customizados e animações
- **Bootstrap 5.3** — Grid responsivo e componentes
- **JavaScript** — Interatividade, calendário, modais e toasts
- **Font Awesome 6** — Ícones
- **Google Fonts (Nunito)** — Tipografia

---

## 🗃️ Modelo de Dados (MER)

O modelo conta com **9 entidades** relacionadas:

- `PACIENTE` — dados do beneficiário
- `CLINICA` — unidades de atendimento
- `ENDERECO` — endereço normalizado da clínica *(correção Sprint 1)*
- `MEDICO` — profissionais de saúde
- `CONSULTA` — agendamentos realizados
- `NIVEL` — níveis de gamificação (Prata, Ouro, Diamante)
- `RECOMPENSA` — benefícios disponíveis
- `CONQUISTAS` — recompensas obtidas pelo paciente
- `HISTORICO_PONTUACAO` — registro de pontos acumulados

---

## 💡 Insights Estratégicos

**01 — Fatores externos aumentam no-show em até 40%**
> Trânsito, chuva e distância são as principais causas não-comportamentais. O Care(Us) exibe clima e trânsito em tempo real e sugere horários alternativos automaticamente.

**02 — Gamificação aumenta engajamento com a saúde em 60%+**
> Apps como Gympass, Noom e Duolingo provam que sistemas de pontos aumentam a adesão. O Care(Us) usa Care Points, níveis progressivos e conquistas para criar vínculo com a plataforma.

**03 — Reagendamento simples reduz no-show em até 25%**
> Barreiras de UX como muitos cliques ou telefonemas fazem o paciente desistir. O Care(Us) permite reagendamento em 3 cliques direto no dashboard, sem contato telefônico.

---

## 👥 Equipe

| Nome | RM |
|---|---|
| Maycon Rodrigues | RM567561 |
| Angela Persek | RM567315 |
| Felipo Blanc | RM567636 |
| Renan Merlotti | RM567737 |

---

## 📅 Entregas

| Sprint | Data | Status |
|---|---|---|
| Sprint 1 | 31/10/2025 | ✅ Entregue |
| Sprint 2 | 19/05/2026 | ✅ Entregue |

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos — **FIAP 2025/2026**.  
Parceria com **Care Plus · Part of Bupa**.
