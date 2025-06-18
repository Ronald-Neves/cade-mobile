# 📱 Cadê? – Conectando Você ao que Precisa Perto de Você

## ✅ Problema 1: Documentação README.md

### 🧭 Nome do Projeto

**Cadê?** é um aplicativo mobile que conecta usuários a empresas e prestadores de serviços locais com praticidade e agilidade.  
Com poucos toques, é possível visualizar informações detalhadas sobre o estabelecimento, incluindo:

- Localização
- Horário de funcionamento
- Avaliações
- Contato direto por mensagem ou telefone

Um catálogo digital inteligente com foco em **simplicidade** e **usabilidade**.

---

### 🛠️ Tecnologias Utilizadas (Mobile)

- **📱 Framework Mobile:** React Native 0.73  
- **🖥️ Backend (API REST):** Node.js 20 + Express.js  
- **💾 Banco de Dados:** PostgreSQL 15  
- **🔐 Autenticação & Notificações Push:** Firebase 11.28  
- **🗺️ Geolocalização:** Leaflet  
- **🧭 Navegação:** React Navigation 6.1  
- **📦 Estado Global:** Redux Toolkit  
- **🎨 Estilo:** Tailwind CSS (via NativeWind)  
- **⚙️ Configurações:** Dotenv (.env)

---

### ⚙️ Instalação

```bash
# Clonar o repositório
git clone https://github.com/usuario/cade-app.git
cd cade-app

# Instalar dependências
npm install

# Executar no emulador ou dispositivo físico
npx react-native run-android
# ou
npx react-native run-ios
```

> ⚠️ **Observação:** É necessário configurar as chaves do Firebase e Google Maps no arquivo `.env`.

---

### 🚀 Uso

O **Cadê?** facilita a vida do usuário ao permitir encontrar estabelecimentos com base em localização e preferências.  
Oferece visualizações completas de perfis, incluindo contato direto com prestadores.

---

### 🎯 Público-alvo

- Consumidores que buscam serviços locais rapidamente  
- Pequenas empresas que desejam presença digital simplificada

---

### 💡 Exemplos de Uso

- Um usuário busca uma **farmácia** aberta e **liga diretamente** pelo app  
- Um cliente encontra um **chaveiro próximo** e envia uma **mensagem no app**

---

## ✅ Problema 2: Pesquisa e Análise de Mercado

### 🔎 App Similar: **UaiPede**

**Pontos Fortes:**
- Plataforma ampla (delivery, transporte e classificados)
- Muitos serviços integrados

**Pontos Fracos:**
- Interface confusa e poluída
- Excesso de funcionalidades
- Pouco foco no contato direto com o prestador

---

### ✨ Diferenciais do **Cadê?**

- ✅ Interface minimalista e fácil de usar  
- ✅ Contato direto (mensagem ou ligação)  
- ✅ Filtros por categoria, nota, distância  
- ✅ Ideal para pequenos negócios e agilidade

---

## ✅ Problema 3: Funcionalidades Principais

### 🔐 Autenticação e Cadastro

- Login com usuário e senha
- Cadastro com nome de usuário, email, senha e confirmação

### 🔍 Busca Inteligente

- Sugestões automáticas ao digitar

### 🏪 Catálogo de Estabelecimentos

- Nome, localização (Google Maps), descrição, fotos, horário, avaliações

### 📞 Contato Direto

- Botão para enviar mensagem ou realizar ligação

### 🌟 Avaliações

- Sistema de notas e comentários por usuários autenticados

---

## ✅ Problema 4: Fluxo de Navegação

### 📱 Telas do Aplicativo

- **Tela de Boas-Vindas / Login**  
  - Login com usuário/senha  
  - Link para cadastro

- **Tela de Cadastro**  
  - Nome de usuário, email, senha, confirmar senha

- **Tela Principal (Home)**  
  - Sugestões por geolocalização  
  - Categorias em destaque  
  - **Menu Inferior:** Home | Buscar | Serviços | Perfil

- **Tela de Busca**  
  - Campo com sugestões dinâmicas

- **Tela do Estabelecimento**  
  - Nome, descrição, fotos  
  - Botões de contato e avaliações

- **Tela de Perfil**  
  - Edição de dados  
  - Botão de logout

---

## ✅ Problema 5: Diário de Desenvolvimento

### 👥 Equipe

**Ronald, João e Samuel**  
Distribuição equilibrada conforme disponibilidade de recursos

---

### 📋 Tarefas e Responsáveis

| Tarefa | Responsável | Data | Status |
|-------|-------------|------|--------|
| Estrutura inicial do projeto + dependências | Ronald | 14/05 | ✅ Concluída |
| Autenticação Firebase (e-mail/telefone/Google) | João | 14/05 | 🔄 Em andamento |
| Tela de login e cadastro com seleção de perfil | Samuel | 21/05 | ✅ Concluída |
| Tela principal (Home) com sugestões | Ronald | 21/05 | ✅ Concluída |
| Sistema de busca e sugestões | João | 28/05 | ✅ Concluída |
| Tela de perfil do estabelecimento | Samuel | 28/05 | ⏳ Planejada |
| Sistema de avaliações e comentários | Samuel | 11/06 | ⏳ Planejada |
| Layout responsivo e testes finais | Equipe | 18/06 | ⏳ Planejada |
