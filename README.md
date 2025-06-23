CADE - Conectando Voce ao que Precisa Perto de Voce
Problema 1: Documentacao README.md
Nome do Projeto
CADE e um aplicativo mobile que conecta usuarios a empresas e prestadores de servicos locais com
praticidade e agilidade, sempre buscando facilitar essa relacao.
Um catalogo digital inteligente com foco em simplicidade e usabilidade.
Tecnologias Utilizadas (Mobile)
- Framework Mobile: React Native Expo 0.73
- Backend (API REST): Node.js 20 + Express.js
- Banco de Dados: AsyncStorage
- Navegacao: React Navigation 6.1
- Estado Global: Redux Toolkit
- Estilo: Tailwind CSS (via NativeWind)
- Configuracoes: Dotenv (.env)
Instalacao
# Clonar o repositório
git clone https://github.com/usuario/cade-mobile.git
# Acessar a pasta do projeto
cd cade-mobile
# Instalar dependencias
npm install
# Executar no emulador ou dispositivo fisico
npx expo start
# ou
npx react-native run-ios
Uso
O CADE facilita a vida do usuario ao permitir encontrar estabelecimentos com base em localizacao e
preferencias.
Oferece visualizacoes completas de perfis, incluindo contato direto com prestadores.
Publico-alvo
- Consumidores que buscam servicos locais com rapidez
- Pequenas empresas que desejam presenca digital simplificada
Exemplos de Uso
- Um cliente encontra um chaveiro proximo e entra em contato diretamente via app
- Um usuario procura uma farmacia aberta e faz uma ligacao rapida pelo aplicativo
Problema 2: Pesquisa e Analise de Mercado
Aplicativo Semelhante: UaiPede
Pontos Fortes:
- Plataforma ampla (delivery, transporte e classificados)
- Muitos servicos integrados
Pontos Fracos:
- Interface confusa e poluida
- Excesso de funcionalidades
- Pouco foco no contato direto com o prestador
Diferenciais do CADE
- Interface minimalista e facil de usar
- Contato direto com prestadores
- Ideal para pequenos negocios e foco em agilidade
Problema 3: Funcionalidades Principais
Autenticacao e Cadastro
- Login com usuario e senha
- Cadastro com nome de usuario, e-mail, senha e confirmacao
Busca Inteligente
- Sugestoes automaticas ao digitar
Catalogo de Servicos
- Nome, descricao, horario, orcamento
Contato Direto
- Botao para solicitar servico
Problema 4: Fluxo de Navegacao
Telas do Aplicativo
- Tela de Boas-Vindas / Login: login com usuario/senha, link para cadastro, botao "Esqueceu a senha"
- Tela de Cadastro: nome de usuario, e-mail, senha e confirmacao
- Tela Principal (Home): sugestoes por geolocalizacao, categorias em destaque, menu inferior: Home |
Buscar | Servicos | Perfil
- Tela de Busca: campo com sugestoes dinamicas
- Tela de Agendamentos: nome do servico, descricao, datas e orcamento
- Tela de Perfil: edicao de dados pessoais, botao de logout, botao de ajuda, meus agendamentos
Problema 5: Diario de Desenvolvimento
Equipe: Ronald, Joao e Samuel
Distribuicao equilibrada conforme disponibilidade de recursos
Tarefas e Responsaveis
- Estrutura inicial do projeto + dependencias - Ronald - 14/05 - Concluida
- Autenticacao Firebase (e-mail/telefone/Google) - Joao - 14/05 - Concluida
- Tela de login e cadastro com selecao de perfil - Samuel - 21/05 - Concluida
- Tela principal (Home) com sugestoes - Ronald - 21/05 - Concluida
- Sistema de busca e sugestoes - Joao - 28/05 - Concluida
- Layout responsivo e testes finais - Equipe - 18/06 - Concluida
