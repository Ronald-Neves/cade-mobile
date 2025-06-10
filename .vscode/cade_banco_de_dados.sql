-- Tabela de usuários (clientes e empresas)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    telefone VARCHAR(20),
    tipo_perfil VARCHAR(20) CHECK (tipo_perfil IN ('usuario', 'empresa')) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de categorias de estabelecimentos (ex: Farmácias, Restaurantes, etc)
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL
);

-- Tabela de estabelecimentos (vinculados ao perfil de empresa)
CREATE TABLE estabelecimentos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    nome_fantasia VARCHAR(100) NOT NULL,
    descricao TEXT,
    endereco VARCHAR(200),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    horario_funcionamento VARCHAR(100),
    categoria_id INTEGER REFERENCES categorias(id),
    foto_url TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de avaliações
CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    estabelecimento_id INTEGER REFERENCES estabelecimentos(id) ON DELETE CASCADE,
    nota INTEGER CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de favoritos (locais salvos pelo usuário)
CREATE TABLE favoritos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    estabelecimento_id INTEGER REFERENCES estabelecimentos(id),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, estabelecimento_id)
);

-- Tabela de histórico de visualizações
CREATE TABLE historico_acessos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    estabelecimento_id INTEGER REFERENCES estabelecimentos(id),
    data_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de mensagens (contato direto pelo app)
CREATE TABLE mensagens (
    id SERIAL PRIMARY KEY,
    remetente_id INTEGER REFERENCES usuarios(id),
    destinatario_id INTEGER REFERENCES usuarios(id),
    conteudo TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
